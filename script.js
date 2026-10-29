let students = [
    { id: 0, name: "Mike", program: "Bachelor of Science in Information Technology" },
    { id: 1, name: "Zinrick", program: "Master of Science in Computer Science" },
    { id: 2, name: "Renier", program: "Bachelor of Arts in Psychology" },
    { id: 3, name: "Alice", program: "Master of Business Administration" },
    { id: 4, name: "Boby", program: "Doctor of Philosophy in Education" }
];

let nextId = 5;

const studentForm = document.querySelector("#studentForm");
const nameInput = document.querySelector("#name");
const programInput = document.querySelector("#program");
const listContainer = document.querySelector("#listContainer");
const studentCount = document.querySelector("#studentCount");
const emptyMessage = document.querySelector("#emptyMessage");

const createStudent = (student) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");

    h2.textContent = student.name;
    p.textContent = student.program;

    button.textContent = "Delete";
    button.type = "button";
    button.classList.add("delete-button");

    button.addEventListener("click", () => {
        deleteStudent(student.id);
    });

    article.append(h2, p, button);
    article.classList.add("list-item");

    return article;
};

const displayStudents = () => {
    listContainer.replaceChildren();

    const studentList = students.map((student) => {
        return createStudent(student);
    });

    studentList.forEach((studentCard) => {
        listContainer.append(studentCard);
    });

    studentCount.textContent =
        `${students.length} ${students.length === 1 ? "Student" : "Students"}`;

    emptyMessage.hidden = students.length > 0;
};

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const program = programInput.value.trim();

    if (!name || !program) {
        alert("Please enter the student name and program.");
        return;
    }

    students.push({
        id: nextId++,
        name: name,
        program: program
    });

    displayStudents();
    studentForm.reset();
});

const deleteStudent = (id) => {
    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
        return;
    }

    students = students.filter((student) => {
        return student.id !== id;
    });

    displayStudents();
};

displayStudents();