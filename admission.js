let students = []
let form =document.querySelector("form")
let inputs=document.querySelectorAll("input")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const object={}
    inputs.forEach(input => {
        object[input.name]=input.value
    });
    students.push(object)
    localStorage.setItem("Students",students)
})
console.log(students)
