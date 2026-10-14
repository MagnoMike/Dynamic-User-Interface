let students = [
    { id: 0, name: "Mike", program: "Batchelor of Science in Information Technology" },
    { id: 1, name: "Zinrick", program: "Master of Science in Computer Science" },
    { id: 2, name: "Renier", program: "Bachelor of Arts in Psychology" },
    { id: 3, name: "Alice", program: "Master of Business Administration" },
    { id: 4, name: "Boby", program: "Doctor of Philosophy in Education" }
];

const createStudent = (name, program) => {

const article = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const button = document.createElement("button");

h2.innerHTML = name;
p.innerHTML = program;
button.innerHTML = "Delete";

article.append(h2);
article.append(p);
article.append(button);

article.classList.add("list-item");

return article;

}

const studentList = students.map((s) => {

    return createStudent(s.name, s.program);
});

const listContainer = document.querySelector("#listContainer");

studentList.forEach((s) => {
    listContainer.append(s);
});