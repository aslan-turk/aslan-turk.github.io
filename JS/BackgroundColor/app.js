const colorBtn = document.getElementsByClassName("change-button")[0]
const htmlBody = colorBtn.closest("body")
const randomNumGenerator = () => Math.floor(Math.random()*255)
const randomNumGeneratorV2 = () => Math.floor(Math.random()*360)
colorBtn.addEventListener("click", ()=>{
    // htmlBody.style.backgroundColor = `rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()})`
    htmlBody.style.background = `linear-gradient(${randomNumGeneratorV2()}deg,rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}),rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}),rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}),rgb(${randomNumGenerator()},${randomNumGenerator()},${randomNumGenerator()}))`
    console.log(randomNumGenerator());
})



