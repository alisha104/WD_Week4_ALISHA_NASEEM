/* =====================================================
   WEEK 4 JAVASCRIPT ASSIGNMENT
   JavaScript Fundamentals - Part 2
   Prepared by: Alisha Naseem
===================================================== */


/* =====================================================
   TASK 1 — JAVASCRIPT FUNCTIONS
===================================================== */


/*
   1. FUNCTION DECLARATION
   2. FUNCTION PARAMETER
   3. FUNCTION ARGUMENT
   4. RETURN VALUE
*/

// Function declaration with a parameter
function generateGreeting(name) {

    return `Hello, ${name}! Welcome to the JavaScript learning dashboard.`;

}


// Function with parameters and a return value
function getPercentage(obtained, total) {

    if (total <= 0) {
        return 0;
    }

    return (obtained / total) * 100;

}


/*
   MULTIPLE FUNCTIONS
*/

// Function to calculate total marks
function calculateTotal(mark1, mark2, mark3) {

    return mark1 + mark2 + mark3;

}


// Function to calculate average marks
function calculateAverage(mark1, mark2, mark3) {

    const total = calculateTotal(mark1, mark2, mark3);

    return total / 3;

}


// Function to determine grade
function getGrade(percentage) {

    if (percentage >= 80) {

        return "A+";

    } else if (percentage >= 70) {

        return "A";

    } else if (percentage >= 60) {

        return "B";

    } else if (percentage >= 50) {

        return "C";

    } else {

        return "F";

    }

}


/*
   ARROW FUNCTION
*/

// Arrow function for addition
const addNumbers = (number1, number2) => {

    return number1 + number2;

};


/* =====================================================
   TASK 1 — INTERACTIVE FUNCTIONS
===================================================== */


/*
   Greeting Function
*/

function showGreeting() {

    const name =
        document.getElementById("nameInput").value.trim();

    const result =
        document.getElementById("greetingResult");


    if (name === "") {

        result.textContent =
            "Please enter your name.";

        return;

    }


    const greeting =
        generateGreeting(name);

    result.textContent =
        greeting;

}


/*
   Percentage Calculator
*/

function calculatePercentage() {

    const obtained =
        Number(
            document.getElementById("obtainedMarks").value
        );

    const total =
        Number(
            document.getElementById("totalMarks").value
        );

    const result =
        document.getElementById("percentageResult");


    if (
        obtained < 0 ||
        total <= 0 ||
        obtained > total
    ) {

        result.textContent =
            "Please enter valid marks.";

        return;

    }


    const percentage =
        getPercentage(obtained, total);

    const grade =
        getGrade(percentage);


    result.textContent =
        `Percentage: ${percentage.toFixed(2)}% | Grade: ${grade}`;

}


/*
   Arrow Function Calculator
*/

function calculateSum() {

    const number1 =
        Number(
            document.getElementById("numberOne").value
        );

    const number2 =
        Number(
            document.getElementById("numberTwo").value
        );

    const result =
        document.getElementById("sumResult");


    if (
        Number.isNaN(number1) ||
        Number.isNaN(number2)
    ) {

        result.textContent =
            "Please enter both numbers.";

        return;

    }


    const sum =
        addNumbers(number1, number2);

    result.textContent =
        `The sum is: ${sum}`;

}


/* =====================================================
   TASK 2 — ARRAYS
===================================================== */


/*
   Creating an Array
*/

let students = [
    "Alisha",
    "Ayesha",
    "Hassan",
    "Hamza",
    "Sara"
];


/*
   Display Array
*/

function displayStudents() {

    const display =
        document.getElementById("studentArrayDisplay");

    display.textContent =
        students.join(" | ");

}


/*
   Accessing Array Elements
*/

function accessStudent() {

    const result =
        document.getElementById("arrayResult");


    if (students.length === 0) {

        result.textContent =
            "The student array is empty.";

        return;

    }


    const firstStudent =
        students[0];

    result.textContent =
        `First student: ${firstStudent}`;

}


/*
   Adding Elements
*/

function addStudent() {

    const result =
        document.getElementById("arrayResult");


    const newStudent =
        "Zain";


    if (!students.includes(newStudent)) {

        students.push(newStudent);

        result.textContent =
            `${newStudent} was added to the array.`;

    } else {

        result.textContent =
            `${newStudent} is already in the array.`;

    }


    displayStudents();

}


/*
   Removing Elements
*/

function removeStudent() {

    const result =
        document.getElementById("arrayResult");


    if (students.length === 0) {

        result.textContent =
            "There are no students to remove.";

        return;

    }


    const removedStudent =
        students.pop();


    result.textContent =
        `${removedStudent} was removed from the array.`;


    displayStudents();

}


/*
   Updating Array Element
*/

function updateStudent() {

    const result =
        document.getElementById("arrayResult");


    if (students.length === 0) {

        result.textContent =
            "There are no students to update.";

        return;

    }


    const oldName =
        students[0];

    const newName =
        "Mariam";


    students[0] =
        newName;


    result.textContent =
        `${oldName} was updated to ${newName}.`;


    displayStudents();

}


/*
   Iterating Through Array
*/

function iterateStudents() {

    const result =
        document.getElementById("arrayResult");


    let studentList =
        "";


    students.forEach(function(student, index) {

        studentList +=
            `${index + 1}. ${student} `;

    });


    result.textContent =
        `Students: ${studentList}`;

}


/* =====================================================
   TASK 3 — JAVASCRIPT OBJECTS
===================================================== */


/*
   Object 1 — Student
*/

let student = {

    name: "Alisha Naseem",

    age: 20,

    course: "JavaScript",

    marks: 88

};


/*
   Object 2 — Course
*/

const course = {

    name: "JavaScript Fundamentals",

    duration: "7 Days",

    level: "Beginner",

    status: "Active"

};


/*
   Object 3 — Product
*/

const product = {

    name: "JavaScript Course",

    price: 2500,

    category: "Programming",

    availability: "Available"

};


/*
   Display Object Function
*/

function displayObject(object, elementId) {

    const container =
        document.getElementById(elementId);


    container.innerHTML = "";


    for (const key in object) {

        const row =
            document.createElement("div");

        row.className =
            "object-row";


        row.innerHTML = `
            <span class="object-key">
                ${key}
            </span>

            <span class="object-value">
                ${object[key]}
            </span>
        `;


        container.appendChild(row);

    }

}


/*
   Updating Object Property
*/

function updateStudentObject() {

    student.marks = 95;


    displayObject(
        student,
        "studentObject"
    );


    document.getElementById("objectResult")
        .textContent =
        "Student marks updated to 95.";

}


/*
   Adding New Object Property
*/

function addStudentProperty() {

    student.email =
        "student@example.com";


    displayObject(
        student,
        "studentObject"
    );


    document.getElementById("objectResult")
        .textContent =
        "New email property added to the student object.";

}


/*
   Removing Object Property
*/

function removeStudentProperty() {

    delete student.age;


    displayObject(
        student,
        "studentObject"
    );


    document.getElementById("objectResult")
        .textContent =
        "Age property removed from the student object.";

}


/* =====================================================
   TASK 4 — DOM MANIPULATION
===================================================== */


/*
   Changing Text Content
*/

function changeDOMText() {

    const title =
        document.getElementById("domTitle");


    title.textContent =
        "DOM Heading Updated Successfully!";

}


/*
   Changing HTML Content
*/

function changeDOMHTML() {

    const text =
        document.getElementById("domText");


    text.innerHTML =
        "<strong>HTML content has been changed dynamically using JavaScript.</strong>";

}


/*
   Changing CSS Styles
*/

function changeDOMStyle() {

    const title =
        document.getElementById("domTitle");


    title.style.fontSize =
        "32px";

    title.style.letterSpacing =
        "1px";

    title.style.textTransform =
        "uppercase";

}


/*
   Adding New DOM Element
*/

function addDOMElement() {

    const container =
        document.getElementById("dynamicElements");


    const newElement =
        document.createElement("div");


    newElement.className =
        "dynamic-item";


    newElement.textContent =
        "This element was dynamically created using JavaScript DOM manipulation.";


    container.appendChild(
        newElement
    );

}


/*
   Removing DOM Element
*/

function removeDOMElement() {

    const container =
        document.getElementById("dynamicElements");


    if (container.lastElementChild) {

        container.removeChild(
            container.lastElementChild
        );

    }

}


/* =====================================================
   TASK 5 — EVENTS
===================================================== */


/*
   CLICK EVENT
*/

const clickButton =
    document.getElementById("clickButton");


clickButton.addEventListener(
    "click",
    function() {

        document.getElementById("clickResult")
            .textContent =
            "Button clicked successfully!";

    }
);


/*
   INPUT EVENT
*/

const liveInput =
    document.getElementById("liveInput");


liveInput.addEventListener(
    "input",
    function() {

        document.getElementById("liveOutput")
            .textContent =
            liveInput.value;

    }
);


/*
   CHANGE EVENT
*/

const colorSelect =
    document.getElementById("colorSelect");


colorSelect.addEventListener(
    "change",
    function() {

        const selectedValue =
            colorSelect.value;


        const result =
            document.getElementById("changeResult");


        if (selectedValue === "") {

            result.textContent =
                "Please select a topic.";

        } else {

            result.textContent =
                `You selected: ${selectedValue}`;

        }

    }
);


/*
   MOUSE EVENT
*/

const mouseBox =
    document.getElementById("mouseBox");


mouseBox.addEventListener(
    "mouseenter",
    function() {

        document.getElementById("mouseResult")
            .textContent =
            "Mouse entered the box!";

        mouseBox.style.transform =
            "scale(1.03)";

    }
);


mouseBox.addEventListener(
    "mouseleave",
    function() {

        document.getElementById("mouseResult")
            .textContent =
            "Mouse left the box.";

        mouseBox.style.transform =
            "scale(1)";

    }
);


/*
   KEYBOARD EVENT
*/

const keyboardInput =
    document.getElementById("keyboardInput");


keyboardInput.addEventListener(
    "keydown",
    function(event) {

        document.getElementById("keyboardResult")
            .textContent =
            `You pressed: ${event.key}`;

    }
);


/*
   SUBMIT EVENT
*/

const eventForm =
    document.getElementById("eventForm");


eventForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("eventName")
                .value
                .trim();


        document.getElementById("submitResult")
            .textContent =
            `Form submitted successfully. Welcome, ${name}!`;

    }
);


/* =====================================================
   TASK 6 — MINI PROJECT
   STUDENT RECORD MANAGER
===================================================== */


/*
   Student Records Array
*/

let studentRecords = [

    {
        name: "Ayesha",
        marks: 92,
        course: "JavaScript"
    },

    {
        name: "Hassan",
        marks: 78,
        course: "HTML & CSS"
    },

    {
        name: "Sara",
        marks: 85,
        course: "Python"
    }

];


/*
   Calculate Grade Function
*/

function calculateGrade(marks) {

    if (marks >= 90) {

        return "A+";

    } else if (marks >= 80) {

        return "A";

    } else if (marks >= 70) {

        return "B";

    } else if (marks >= 60) {

        return "C";

    } else if (marks >= 50) {

        return "D";

    } else {

        return "F";

    }

}


/*
   Display Student Records
*/

function displayStudentRecords(records = studentRecords) {

    const tableBody =
        document.getElementById("studentTableBody");


    tableBody.innerHTML = "";


    records.forEach(
        function(record, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${index + 1}</td>

                <td>${record.name}</td>

                <td>${record.course}</td>

                <td>${record.marks}</td>

                <td>${calculateGrade(record.marks)}</td>

                <td>
                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})"
                    >
                        Delete
                    </button>
                </td>

            `;


            tableBody.appendChild(row);

        }
    );


    updateStatistics(records);

}


/*
   Update Statistics
*/

function updateStatistics(records) {

    const totalStudents =
        document.getElementById("totalStudents");


    const averageMarks =
        document.getElementById("averageMarks");


    const highestMarks =
        document.getElementById("highestMarks");


    totalStudents.textContent =
        records.length;


    if (records.length === 0) {

        averageMarks.textContent =
            "0";

        highestMarks.textContent =
            "0";

        return;

    }


    const totalMarks =
        records.reduce(
            function(sum, record) {

                return sum + record.marks;

            },
            0
        );


    const average =
        totalMarks / records.length;


    const highest =
        Math.max(
            ...records.map(
                function(record) {

                    return record.marks;

                }
            )
        );


    averageMarks.textContent =
        average.toFixed(2);


    highestMarks.textContent =
        highest;

}


/*
   Add Student
*/

const studentForm =
    document.getElementById("studentForm");


studentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("studentName")
                .value
                .trim();


        const marks =
            Number(
                document.getElementById("studentMarks")
                    .value
            );


        const course =
            document.getElementById("studentCourse")
                .value;


        const message =
            document.getElementById("projectMessage");


        if (
            name === "" ||
            marks < 0 ||
            marks > 100 ||
            course === ""
        ) {

            message.textContent =
                "Please enter valid student information.";

            return;

        }


        const newStudent = {

            name: name,

            marks: marks,

            course: course

        };


        studentRecords.push(
            newStudent
        );


        studentForm.reset();


        displayStudentRecords();


        message.textContent =
            `${name} was successfully added to the student records.`;

    }
);


/*
   Delete Student
*/

function deleteStudent(index) {

    const deletedStudent =
        studentRecords[index].name;


    studentRecords.splice(
        index,
        1
    );


    displayStudentRecords();


    document.getElementById("projectMessage")
        .textContent =
        `${deletedStudent} was removed successfully.`;

}


/*
   Search Students
*/

const searchStudent =
    document.getElementById("searchStudent");


searchStudent.addEventListener(
    "input",
    function() {

        const searchTerm =
            searchStudent.value
                .toLowerCase()
                .trim();


        const filteredStudents =
            studentRecords.filter(
                function(record) {

                    return record.name
                        .toLowerCase()
                        .includes(searchTerm);

                }
            );


        displayStudentRecords(
            filteredStudents
        );

    }
);


/* =====================================================
   INITIAL PAGE SETUP
===================================================== */


/*
   Display initial array
*/

displayStudents();


/*
   Display initial objects
*/

displayObject(
    student,
    "studentObject"
);


displayObject(
    course,
    "courseObject"
);


displayObject(
    product,
    "productObject"
);


/*
   Display initial student records
*/

displayStudentRecords();


/* =====================================================
   END OF WEEK 4 JAVASCRIPT ASSIGNMENT
===================================================== */