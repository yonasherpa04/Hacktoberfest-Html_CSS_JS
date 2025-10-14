/* 
  OOP IN ES6 — DEMO
  ------------------
  This file demonstrates:
    • Abstraction      → Abstract base class with abstract methods
    • Encapsulation    → Private fields (#) + getters/setters with validation
    • Inheritance      → Person → Employee → Manager
    • Polymorphism     → Overridden describe(), calculatePay()
    • Composition      → Department "has many" People
    • Static methods   → Utilities on classes (id generation, factory/helpers)
*/

//Utility: simple ID generator
class Id {
  static #next = 1;
  static make() { return this.#next++; }
  static reset() { this.#next = 1; }
}

//Abstraction: abstract base "PersonLike"
class PersonLike {
  constructor() {
    if (new.target === PersonLike) {
      throw new Error("PersonLike is abstract and cannot be instantiated directly.");
    }
  }
  // Abstract: must be implemented by subclasses
  describe() { throw new Error("describe() must be implemented by subclass"); }
  toJSON()    { throw new Error("toJSON() must be implemented by subclass"); }
}

//Encapsulation via private fields on Person
class Person extends PersonLike {
  #id; 
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    super();
    this.#id = Id.make();
    this.firstName = firstName;
    this.lastName  = lastName;
  }

  // Readonly public id
  get id() { return this.#id; }

  get firstName() { return this.#firstName; }
  set firstName(val) {
    if (!val || typeof val !== "string") throw new TypeError("First name must be a non-empty string");
    this.#firstName = val.trim();
  }

  get lastName() { return this.#lastName; }
  set lastName(val) {
    if (!val || typeof val !== "string") throw new TypeError("Last name must be a non-empty string");
    this.#lastName = val.trim();
  }

  get fullName() { return `${this.#firstName} ${this.#lastName}`; }

  // Default description (polymorphic — subclasses override)
  describe() {
    return `Person#${this.#id} — ${this.fullName}`;
  }

  toJSON() {
    return { id: this.#id, firstName: this.#firstName, lastName: this.#lastName, type: "Person" };
  }
}

//Employee (Inheritance + Polymorphism)
class Employee extends Person {
  #salary; // monthly salary
  #role;

  constructor(firstName, lastName, salary, role = "Employee") {
    super(firstName, lastName);
    this.salary = salary;
    this.role = role;
  }

  get role() { return this.#role; }
  set role(val) {
    if (!val || typeof val !== "string") throw new TypeError("Role must be a non-empty string");
    this.#role = val.trim();
  }

  get salary() { return this.#salary; }
  set salary(val) {
    const num = Number(val);
    if (!Number.isFinite(num) || num < 0) throw new TypeError("Salary must be a non-negative number");
    this.#salary = num;
  }

  // Polymorphic method: Managers will override this
  calculatePay() {
    return this.#salary; // monthly base salary
  }

  describe() {
    return `Employee#${this.id} — ${this.fullName} (${this.#role}) earns ₹${this.calculatePay().toLocaleString("en-IN")}/mo`;
  }

  toJSON() {
    return { ...super.toJSON(), role: this.#role, salary: this.#salary, type: "Employee" };
  }
}

//Manager (Inheritance + Override + Extra state)
class Manager extends Employee {
  #bonusPct;
  constructor(firstName, lastName, salary, bonusPct = 0.15) {
    super(firstName, lastName, salary, "Manager");
    this.bonusPct = bonusPct;
  }

  get bonusPct() { return this.#bonusPct; }
  set bonusPct(val) {
    const num = Number(val);
    if (!Number.isFinite(num) || num < 0) throw new TypeError("bonusPct must be a non-negative number");
    this.#bonusPct = num;
  }

  // Polymorphism: different pay calculation
  calculatePay() {
    return Math.round(super.calculatePay() * (1 + this.#bonusPct));
  }

  describe() {
    return `Manager#${this.id} — ${this.fullName} (bonus ${(this.#bonusPct * 100).toFixed(0)}%) earns ₹${this.calculatePay().toLocaleString("en-IN")}/mo`;
  }

  toJSON() {
    return { ...super.toJSON(), bonusPct: this.#bonusPct, type: "Manager" };
  }
}

//Composition: Department has People
class Department {
  #name;
  #people; // array of Person/Employee/Manager
  constructor(name) {
    if (!name || typeof name !== "string") throw new TypeError("Department name is required");
    this.#name = name.trim();
    this.#people = [];
  }
  get name() { return this.#name; }
  get size() { return this.#people.length; }
  get people() { return [...this.#people]; } // return a copy (encapsulation)

  add(person) {
    if (!(person instanceof Person)) throw new TypeError("Only Person or subclasses can be added");
    this.#people.push(person);
    return this;
  }

  clear() {
    this.#people.length = 0;
  }

  // Higher-order utilities
  giveRaise(pct) {
    const k = 1 + pct;
    this.#people.forEach(p => {
      if (p instanceof Employee) p.salary = Math.round(p.salary * k);
    });
  }

  monthlyPayroll() {
    return this.#people
      .filter(p => p instanceof Employee)
      .reduce((sum, e) => sum + e.calculatePay(), 0);
  }

  toJSON() {
    return { name: this.#name, people: this.#people.map(p => p.toJSON()) };
  }
}

// UI glue
const ui = {
  tableBody: document.getElementById("peopleTable"),
  deptMeta:  document.getElementById("deptMeta"),
  out:       document.getElementById("consoleOut"),
  buttons: {
    seed: document.getElementById("seedBtn"),
    addEmp: document.getElementById("addEmployeeBtn"),
    addMgr: document.getElementById("addManagerBtn"),
    raise: document.getElementById("giveRaiseBtn"),
    payroll: document.getElementById("calcPayrollBtn"),
    clear: document.getElementById("clearBtn"),
  }
};

const dept = new Department("Engineering");

function render() {
  // meta
  ui.deptMeta.textContent = `Name: ${dept.name} • Size: ${dept.size} • Monthly Payroll: ₹${dept.monthlyPayroll().toLocaleString("en-IN")}`;

  // rows
  ui.tableBody.innerHTML = "";
  for (const person of dept.people) {
    const tr = document.createElement("tr");
    const isMgr = person instanceof Manager;
    const role = isMgr ? "Manager" : (person instanceof Employee ? "Employee" : "Person");

    tr.innerHTML = `
      <td>${person.id}</td>
      <td>${person.fullName}</td>
      <td>${role}</td>
      <td>${person instanceof Employee ? "₹" + person.calculatePay().toLocaleString("en-IN") : "—"}</td>
      <td>${person.describe()}</td>
    `;
    ui.tableBody.appendChild(tr);
  }
}

// Simple console logger to the right card
function log(...args) {
  const line = args.map(x => (typeof x === "string" ? x : JSON.stringify(x))).join(" ");
  ui.out.textContent += line + "\n";
  ui.out.scrollTop = ui.out.scrollHeight;
}

// Seed data
function seed() {
  Id.reset();
  dept.clear();
  dept
    .add(new Employee("Asha", "Verma", 65000, "Frontend Engineer"))
    .add(new Employee("Rohit", "Iyer", 90000, "Backend Engineer"))
    .add(new Manager("Neha", "Kulkarni", 120000, 0.20));
  log("Seeded:", JSON.stringify(dept.toJSON(), null, 2));
  render();
}

// Add random employee/manager for quick manual testing
function randomName() {
  const first = ["Arjun","Meera","Kabir","Sara","Ishaan","Priya","Dev","Naina"];
  const last  = ["Sharma","Nair","Singh","Das","Rao","Menon","Mukherjee","Kapoor"];
  return [first[Math.floor(Math.random()*first.length)], last[Math.floor(Math.random()*last.length)]];
}

function addEmployee() {
  const [f,l] = randomName();
  const sal = 50000 + Math.floor(Math.random()*60000);
  dept.add(new Employee(f, l, sal, "Engineer"));
  log("Added Employee:", dept.people.at(-1).describe());
  render();
}

function addManager() {
  const [f,l] = randomName();
  const sal = 100000 + Math.floor(Math.random()*70000);
  const bonus = 0.10 + Math.random()*0.20;
  dept.add(new Manager(f, l, sal, Number(bonus.toFixed(2))));
  log("Added Manager:", dept.people.at(-1).describe());
  render();
}

function giveRaise() {
  dept.giveRaise(0.10);
  log("Gave 10% raise to all employees.");
  render();
}

function calcPayroll() {
  const total = dept.monthlyPayroll();
  log(`Monthly payroll: ₹${total.toLocaleString("en-IN")}`);
  render();
}

function clearAll() {
  dept.clear();
  Id.reset();
  log("Cleared department.");
  render();
}

// Wire events
ui.buttons.seed.addEventListener("click", seed);
ui.buttons.addEmp.addEventListener("click", addEmployee);
ui.buttons.addMgr.addEventListener("click", addManager);
ui.buttons.raise.addEventListener("click", giveRaise);
ui.buttons.payroll.addEventListener("click", calcPayroll);
ui.buttons.clear.addEventListener("click", clearAll);

// Auto-seed on first load for convenience
seed();

export { Person, Employee, Manager, Department };
