const width = document.querySelector('.width')
const height = document.querySelector('.height');
const avalHeight = document.querySelector('.availHeight');
const avalWidth = document.querySelector('.availWidth');
const cDepth = document.querySelector('.cDepth');
const pDepth = document.querySelector('.pDepth');
const innerw = document.querySelector('.innerw');
const innerh = document.querySelector('.innerh');
const createWindow = document.querySelector('.cr');

width.textContent = `Width: ${screen.width}px`;
height.textContent = `Height: ${screen.height}px`;
avalHeight.textContent = `Available Height: ${screen.availHeight}px`;
avalWidth.textContent = `Available Width: ${screen.availWidth}px`;
cDepth.textContent = `Color Depth: ${screen.colorDepth}`;
pDepth.textContent = `Pixel Depth: ${screen.pixelDepth}`;
innerw.textContent = `Inner Width: ${innerWidth}px`;
innerh.textContent = `Inner Height: ${innerHeight}px`;
createWindow.addEventListener('click', () => {
    if (document.fullscreenEnabled) {
        let newScreenHeight = screen.availHeight - 300;
        let marginHeight = newScreenHeight / 2;
        let newScreenWidth = innerWidth - 400;
        let marginWidth = newScreenWidth / 2;
        open("localhost", "fat", `height = 300px, width = 400px, left = ${marginWidth}, top = ${marginHeight}`)
    }
    else if (!document.fullscreenElement) {        
        let newScreenHeight = innerHeight - 300;
        let marginHeight = newScreenHeight / 2;
        let extraHeight = outerHeight - innerHeight;
        let newScreenWidth = innerWidth - 400;
        let marginWidth = newScreenWidth / 2;
        // let extraHeight = (outerHeight - innerHeight) / 2;
    open("localhost", "fat", `height = 300px, width = 400px, left = ${marginWidth}, top = ${marginHeight}`)
    }
}
)

const dropleftButtons = document.getElementsByClassName('dlb');
const dropleftcontent = document.getElementsByClassName('dlc')
console.log(dropleftButtons);

// const SizeMenu = dropleftButtons[0]

// console.log(SizeMenu);

// const bitsMenu = dropleftButtons[1]

// console.log(bitsMenu);

// const pageMenu = dropleftButtons[2]

// console.log(pageMenu);

// const betaMenu = dropleftButtons[3]

// console.log(betaMenu);

for (let i = 0; i < dropleftButtons.length; i++) {
    dropleftButtons[i].addEventListener('click', (e) => {
        for (let j = 0; j < dropleftButtons.length; j++) {
        dropleftButtons[j].style.backgroundColor = "rgba(0, 0, 0, 0)"
        dropleftcontent[j].style.display = "none"
    }
    e.target.style.backgroundColor = "rgb(64, 48, 100)"
    dropleftcontent[i].style.display = "block"
    });
}

