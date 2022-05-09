// bouton dans home.html
const button = document.querySelectorAll(".btn");
const btn2 = document.querySelector(".button2");


for (let b of button){
    let a = window.getComputedStyle(b, null)["color"];
    let x = window.getComputedStyle(b, null)["backgroundColor"];
    
    b.addEventListener("mouseover", (ad) => {
        ad.preventDefault();
        b.style.color = x;
        b.style.backgroundColor = a;
        b.style.border = `1px solid ${x}`;
        b.style.boxShadow = `0px 3px 3px 3px ${x}`;
    });
    
    btn2.addEventListener("mouseover", (ad) => {
        ad.preventDefault();
        btn2.style.color = "#b11313";
        btn2.style.backgroundColor = "#ffffff";
        btn2.style.boxShadow = " 0px 3px 3px 3px #ffffff "
    });

    b.addEventListener("mouseout", (ad) => {
        ad.preventDefault();
        b.style.color = a;
        b.style.backgroundColor = x;
        b.style.border = `1px solid ${a}`;
        b.style.boxShadow = "none";
    });
}

