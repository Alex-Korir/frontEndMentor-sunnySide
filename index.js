const toggleBtn = document.querySelector("#toggle-btn");
const menu = document.querySelector("#toggle");

toggleBtn.addEventListener('click', function openMenu(e){
    menu.classList.toggle("more");
    e.preventDefault;
    console.log("mrman");
});