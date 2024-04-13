let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let developer = arr.filter((employee) => employee.profession === "developer").map((developer) => developer.name);
    console.log(developer);
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        console.log(employee.name);
      }
    });
  }
  
  function addData() {
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
    console.log(arr);
  }
  
  function removeAdmin() {
    let rmAdmin = arr.filter((employee) => employee.profession !== "admin");
    console.log(rmAdmin);
  }
  
  function concatenateArray() {
    let newAdd = [
      { id: 4, name: "emma", age: "22", profession: "designer" },
      { id: 5, name: "alex", age: "24", profession: "engineer" },
      { id: 6, name: "olivia", age: "21", profession: "analyst" },
    ];
  
    let newArr = arr.concat(newAdd);
    console.log(newArr);
  }