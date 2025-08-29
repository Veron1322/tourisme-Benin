 const info_box = document.querySelectorAll("i");
 info_box.forEach( i => {
    i.addEventListener("click", () => {
        i.classList.add("bounce");
        setTimeout(() =>{
            i.classList.remove("bounce");
        } ,500);
    });
 });