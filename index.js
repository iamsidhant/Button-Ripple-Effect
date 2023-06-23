const btnEl = document.querySelector(".btn");
btnEl.addEventListener("mouseover",(event)=>{
    const x = (event.PageX - btnEl.offsetLeft);
    const y = (event.PageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});
