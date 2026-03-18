// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Dates</h1>
// <h2>Using new Date()</h2>
// <p id="demo"></p>

// <script>
// const d = new Date("October 13, 2014 11:13:00");
// document.getElementById("demo").innerHTML = d;
// </script>

// </body>
// </html>
// ________________________________________________________________________________________________________________________________________

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript new Date()</h2>

// <p>Using new Date(7 numbers), creates a new date object with the specified date and time:</p>

// <p id="demo"></p>

// <script>
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// document.getElementById("demo").innerHTML = d;
// </script>

// </body>
// </html>
// ________________________________________________________________________________________________________________________________________

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let users = [];

function addUser(id, name, email) {
  const user = { id, name, email };
  users.push(user);
  console.log("User added successfully!");
}

function displayUsers() {
  if (users.length === 0) {
    console.log("No users found!");
  } else {
    console.log("User List:");
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  }
}

function showMenu() {
  console.log("\n1. Add User");
  console.log("2. Display Users");
  console.log("3. Exit");

  rl.question("Enter choice: ", (choice) => {
    if (choice === "1") {
      rl.question("Enter ID: ", (id) => {
        rl.question("Enter Name: ", (name) => {
          rl.question("Enter Email: ", (email) => {
            addUser(id, name, email);
            showMenu();
          });
        });
      });

    } else if (choice === "2") {
      displayUsers();
      showMenu();

    } else if (choice === "3") {
      console.log("Exiting");
      rl.close();

    } else {
      console.log("Invalid choice!");
      showMenu();
    }
  });
}
showMenu();