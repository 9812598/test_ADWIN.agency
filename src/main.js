console.log("js works");

async function loadComponent(selector, path, callback) {
  try {
    const container = document.querySelector(selector);
    if (!container) throw new Error(`Container ${selector} not found`);

    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to fetch ${path}`);

    const html = await response.text();
    container.innerHTML = html;

    if (typeof callback === "function") callback();
  } catch (error) {
    console.error("Ошибка загрузки компонента:", error);
  }
}
await loadComponent("#header", "/src/components/header.html");

await loadComponent("#hero", "/src/components/hero.html");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#modalBtn");
const closeButton = document.querySelector("#closeModal");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

window.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog?.close();
  }
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// burger logic

const dialogBurger = document.querySelector("#dialogBurger");

const showBurger = document.querySelector("#burger");
const closeBurger = document.querySelector("#closeBurger");

const callFromMenu = document.querySelector("#modalBtnMobile");

// "Show the dialog" button opens the dialog modally
showBurger.addEventListener("click", () => {
  dialogBurger.showModal();
});

window.addEventListener("click", (e) => {
  if (e.target === dialogBurger) {
    dialogBurger?.close();
  }
});

// "Close" button closes the dialog
closeBurger.addEventListener("click", () => {
  dialogBurger.close();
});

callFromMenu.addEventListener("click", () => {
  dialogBurger.close();
  dialog.showModal();
});

console.log("Script loaded and executed");
