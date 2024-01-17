const fullName = document.getElementById("full__name");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const numberPhone = document.getElementById("number__phone");
const sendData = document.querySelector(".send__data");
const form = document.querySelector(".form");
const usersData = document.querySelector(".users__data");
const modalContainer = document.querySelector(".modal__container");
let regexOnlyText = new RegExp("^[a-zA-Z]");
let id = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !(fullName.value.trim() === "") &&
    regexOnlyText.test(fullName.value) &&
    !(email.value.trim() === "") &&
    !(numberPhone.value.trim() === "")
  ) {
    let rowData = document.createElement("tr");
    let rowName = document.createElement("td");
    let rowEmail = document.createElement("td");
    let rowPhone = document.createElement("td");
    let rowGender = document.createElement("td");
    let rowButtons = document.createElement("td");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    let imgDelete = document.createElement("img");
    imgDelete.setAttribute("src", "img/file-minus.svg");
    let imgEdit = document.createElement("img");
    imgEdit.setAttribute("src", "img/pencil-square.svg");
    imgEdit.classList.add("button__img");
    imgDelete.classList.add("button__img");
    rowName.textContent = fullName.value;
    rowEmail.textContent = email.value;
    rowPhone.textContent = numberPhone.value;
    rowGender.textContent = gender.value;
    deleteButton.appendChild(imgDelete);
    editButton.appendChild(imgEdit);
    editButton.classList.add("button__change");
    deleteButton.classList.add("button__change");
    rowButtons.append(deleteButton, editButton);
    rowData.classList.add("user__data");
    rowData.append(rowName, rowEmail, rowPhone, rowGender, rowButtons);
    deleteButton.value = id;
    rowData.id = id;
    usersData.appendChild(rowData);
    let deleteNode = document.getElementById(deleteButton.value);
    deleteButton.addEventListener("click", () => {
      console.log(deleteNode);
      usersData.removeChild(deleteNode);
    });
    editButton.addEventListener("click", () => {
      modalContainer.classList.remove("modal__off");
      const modalName = document.getElementById("modal__name");
      const modalGender = document.getElementById("gender__modal");
      const modalEmail = document.getElementById("email__modal");
      const modalPhone = document.getElementById("number__phone__modal");
      const formModal = document.querySelector(".form__modal");
      modalName.value = fullName.value
      modalEmail.value = email.value
      modalPhone.value = numberPhone.value
      formModal.addEventListener("submit",(event)=>{
        event.preventDefault()
        if (
            !(modalName.value.trim() === "") &&
            regexOnlyText.test(modalName.value) &&
            !(modalEmail.value.trim() === "") &&
            !(modalPhone.value.trim() === "")
          ) {
            rowName.textContent = modalName.value;
            rowEmail.textContent = modalEmail.value;
            rowPhone.textContent = modalPhone.value;
            rowGender.textContent = modalGender.value;
            modalContainer.classList.add("modal__off")
          }
          else{
            alert("Please complete all fields correctly");
          }
      })
      fullName.value = ""
      email.value = ""
      numberPhone.value = ""
    });
    id++;
  } else {
    alert("Please complete all fields correctly");
  }
});
