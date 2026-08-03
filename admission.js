// Load students from localStorage
let students = JSON.parse(localStorage.getItem("Students")) || [];

// Get form and all form fields
let form = document.querySelector("form");
let fields = document.querySelectorAll("input, select");

// Submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create a new student object
    let student = {};

    fields.forEach(field => {
        student[field.name] = field.value;
    });

    // Extra properties
    student.id = Date.now();      // Unique ID
    student.status = false;       // Attendance status

    // Add to array
    students.push(student);

    // Save to localStorage
    localStorage.setItem("Students", JSON.stringify(students));

    console.log(students);

    // Optional: Reset the form
    form.reset();
});