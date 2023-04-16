let projects = [
    {name: "Hospital Management System", technology: "C#"},
    {name: "Library-CRUD", technology: "Java"},
    {name: "Business Website", technology: "JavaScript"},
    {name: "Chat App", technology: "React"},
    {name: "DayCare Management System", technology: "C++"}
];

function displayProjects(projects, filterValue) {
    let projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
  
    projects.forEach(function(project){
      if (project.technology.toLowerCase().includes(filterValue.toLowerCase()) || !filterValue) {
        let li = document.createElement("li");
        li.textContent = project.name + " - " + project.technology;
        projectList.appendChild(li);
      }
    });
}
   
function applyFilter() {
    let filterValue = document.getElementById("filter").value;
    displayProjects(projects, filterValue);
}
