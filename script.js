const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

// Load notes from localStorage on page load
function showNotes() {
  notescontainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Update localStorage with current notes content
function updateStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

// Add new editable paragraph on button click
createbtn.addEventListener("click", () => {
  const inputbox = document.createElement("p");
  const img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  img.addEventListener("click", () => {
    inputbox.remove();
    updateStorage();
  });
  notescontainer.appendChild(inputbox);
  inputbox.appendChild(img);
});

// Update storage when input boxes are edited
notescontainer.addEventListener("input", updateStorage);

// Insert line break on Enter key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
