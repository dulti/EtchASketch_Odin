function initGrid(gridLength) {
    // make 16x16 grid of divs inside div.container
    const container = document.querySelector(".container");
    // set container properties
    container.style.setProperty("grid-template-columns", `repeat(${gridLength}, 1fr)`);
    container.style.setProperty("grid-template-rows", `repeat(${gridLength}, 1fr)`);

    for (let i = 0; i < Math.pow(gridLength, 2); i++) {
        const child = document.createElement("div");
        // add hovering
        child.addEventListener("mouseenter", (e) => {
            child.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)})`;
        });
        container.appendChild(child);
    };
};

initGrid(16);

const clearGridBtn = document.querySelector("#clear");
clearGridBtn.addEventListener('click', () => {
    const container = document.querySelector(".container");
    const cells = container.children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.removeProperty("background-color");
    }
    do {
        var newGridLength = parseInt(window.prompt("Please enter new grid length (no more than 100):", ""), 10);
    } while(isNaN(newGridLength) || newGridLength > 100 || newGridLength < 1);
    console.log(newGridLength);
    initGrid(newGridLength);
})