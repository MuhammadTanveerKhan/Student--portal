let table=document.querySelector("table")

let students = JSON.parse(localStorage.getItem("students")) || [];
students.forEach(student => {
    let row = document.createElement("tr");
    let statusbtn = document.createElement("button")
    let statusCell = document.createElement("td");
  row.innerHTML=`
  <td>${student.department}</td>
  <td>${student.name}</td>
  <td>${student.id}</td>
  <td>${student.rollnumber}</td>

  `
  statusbtn.addEventListener("click",()=>{
      
      student.status = !student.status;
      if(student.status){
          statusbtn .innerHTML="present"
          statusbtn.style.color="green"
          statusbtn.style.backgroundColor="lightgreen"
          
        }
        else{
            statusbtn.innerHTML="Absent"
            statusbtn.style.color="red"
            statusbtn.style.backgroundColor="#ffb3b3"
        }
    })
    table.append(row)
    statusCell.appendChild(statusbtn);
});




      
    