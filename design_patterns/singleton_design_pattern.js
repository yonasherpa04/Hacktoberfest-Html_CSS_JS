// Singleton class for a Database Manager
class DatabaseManager {
  // Private static instance variable (using WeakMap for true privacy in JS)
  static #instance = null;

  // Private constructor to prevent direct instantiation
  constructor() {
    if (DatabaseManager.#instance) {
      // If instance already exists, throw an error (or return the existing one in some implementations)
      throw new Error('Use DatabaseManager.getInstance() instead of new.');
    }
    // Initialize the instance properties
    this.connection = 'mysql://localhost:3306/myapp';
    this.isConnected = false;
    console.log('DatabaseManager instance created.');
  }

  // Static method to get the single instance
  static getInstance() {
    // Lazy initialization
    if (!DatabaseManager.#instance) {
      DatabaseManager.#instance = new DatabaseManager();
    }
    return DatabaseManager.#instance;
  }

  // Public method to demonstrate usage
  connect() {
    if (!this.isConnected) {
      console.log(`Connecting to database at ${this.connection}`);
      this.isConnected = true;
    } else {
      console.log('Already connected to database.');
    }
  }

  // Public method to query the database
  query(sql) {
    if (!this.isConnected) {
      console.error('Database not connected. Call connect() first.');
      return;
    }
    console.log(`Executing query: ${sql}`);
    return `Results for: ${sql}`;
  }

  // Public method to disconnect
  disconnect() {
    if (this.isConnected) {
      console.log('Disconnecting from database.');
      this.isConnected = false;
    } else {
      console.log('Not connected.');
    }
  }
}

// Example usage and testing
console.log('=== Singleton Pattern Demo ===');

// First access: Creates the instance
const db1 = DatabaseManager.getInstance();
db1.connect();
console.log('First instance connection:', db1.connection);

// Second access: Returns the same instance
const db2 = DatabaseManager.getInstance();
db2.connect(); // Should log "Already connected"
console.log('Second instance connection:', db2.connection);
console.log('Instances are the same:', db1 === db2); // true

// Demonstrate shared state
db1.query('SELECT * FROM users');
db2.query('SELECT * FROM orders'); // Same instance, so state is shared

// Try direct instantiation (should throw error)
try {
  const db3 = new DatabaseManager(); // This will throw an error
} catch (error) {
  console.log('Error caught:', error.message);
}

// Clean up
db1.disconnect();

// Output:
// === Singleton Pattern Demo ===
// DatabaseManager instance created.
// Connecting to database at mysql://localhost:3306/myapp
// First instance connection: mysql://localhost:3306/myapp
// Already connected to database.
// Second instance connection: mysql://localhost:3306/myapp
// Instances are the same: true
// Executing query: SELECT * FROM users
// Executing query: SELECT * FROM orders
// Error caught: Use DatabaseManager.getInstance() instead of new.
// Disconnecting from database.