function createElement(type, props, ...children) {
  return { type, props: props || {}, children };
}

function render(vNode, container) {
  container.innerHTML = "";
  container.appendChild(createDom(vNode));
}

function createDom(vNode) {
  if (typeof vNode === "string") return document.createTextNode(vNode);

  const el = document.createElement(vNode.type);

  for (let [key, value] of Object.entries(vNode.props || {})) {
    if (key.startsWith("on")) {
      el.addEventListener(key.substring(2).toLowerCase(), value);
    } else if (key === "className") {
      el.className = value;
    } else {
      el.setAttribute(key, value);
    }
  }

  vNode.children.forEach((child) => el.appendChild(createDom(child)));
  return el;
}


let states = [];
let index = 0;

function useState(initial) {
  const curr = index;
  states[curr] = states[curr] ?? initial;
  function setState(newVal) {
    states[curr] = newVal;
    index = 0;
    render(App(), document.getElementById("root"));
  }
  index++;
  return [states[curr], setState];
}

// Theme toggle system


const toggleBtn = document.getElementById("theme-toggle");
let isLight = false;

toggleBtn.addEventListener("click", () => {
  isLight = !isLight;
  document.body.classList.toggle("light");
  toggleBtn.textContent = isLight ? "🌞" : "🌙";
});


// --- Root App ---
function App() {
  return createElement(
    "div",
    {},
    
    ThemeSwitcher()
  );
}

render(App(), document.getElementById("root"));
