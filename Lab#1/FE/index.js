function fetchEmployees() {
  fetch("http://localhost:3000/api/v1/employee")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataTable");
      tableBody.innerHTML = "";
      const list = data.data;

     
      list.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.addEventListener("click", deleteEmployee);
        deleteButton.id = item.id;
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

// TODO
// add event listener to submit button
const form = document.querySelector("button");
form.addEventListener("click", createEmployee);


// TODO
// add event listener to delete button

// TODO
async function createEmployee() {
  // get data from input field
  const Name = document.getElementById("name").value;
  const ID = document.getElementById("id").value;
  
  // send data to BE
  await fetch("http://localhost:3000/api/v1/employee/", {
    method: "POST",
    body: JSON.stringify({ ID: ID, Name: Name }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));

  // call fetchEmployees
  fetchEmployees();
}

// TODO
async function deleteEmployee(e) {
  // get id
  
 
  const id = e.target.id;
 
  // send id to BE

  await fetch(`http://localhost:3000/api/v1/employee/${id}`, { method: "DELETE" })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
  // call fetchEmployees
  fetchEmployees();
}

fetchEmployees();
