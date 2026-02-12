export let theme = "light";

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? "dark" : "light";
    console.log(theme);
};

const handleDialogMenu = (event) => {
    console.log("Click", event);
    const menuDialogElement = document.querySelector("#menu-dialog");
    if (event.target.localName === "svg") {
        event.preventDefault();
        menuDialogElement.showModal();
    } else {
        menuDialogElement.close();
    }
};

export function main() {
    console.log("Loaded main");
    // Theme
    const toggleElement = document.querySelector("#theme-toggle");
    toggleElement.addEventListener("change", handleChange);
    
    // Menu (Navegación)
    const menuIconElement = document.querySelector("#menu-icon");
    const closeDialogElement = document.querySelector("#menu-dialog button");
    const menuDialogElement = document.querySelector("#menu-dialog menu");
    menuIconElement.addEventListener("click", handleDialogMenu);
    closeDialogElement.addEventListener("click", handleDialogMenu);
    menuDialogElement.addEventListener("click", handleDialogMenu);
}
