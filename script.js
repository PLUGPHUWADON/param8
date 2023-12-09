let body = document.getElementById("body");
let div1 = document.querySelector(".box-left form > div:nth-of-type(1)");
let div1_input = document.querySelector(".box-left form > div:nth-of-type(1) input");
let div1_span = document.querySelector(".box-left form > div:nth-of-type(1) span");
let inputtext = document.getElementById("inputtext");
let texttitle = document.getElementById("texttitle");
let fontsize = document.getElementById("fontsize");
let x = document.getElementById("x");
let y = document.getElementById("y");
let colortext = document.getElementById("colortext");
let shadowtext = document.getElementById("shadowtext");
let download = document.getElementById("download");


body.addEventListener("click",(event) => {
    let node = event.target;
    if (node !== div1 && node !== div1_input) {
        div1_span.classList.remove("adddiv1_scale");
    }
});

div1.addEventListener("click",() => {
    div1_span.classList.add("adddiv1_scale");
});

texttitle.innerHTML = inputtext.value;
inputtext.addEventListener("input",() => {
    texttitle.innerHTML = inputtext.value;
});

texttitle.style.fontSize = `${parseInt(fontsize.value)}px`;
fontsize.addEventListener("input",() => {
    texttitle.style.fontSize = `${parseInt(fontsize.value)}px`;
});

texttitle.style.left = `${parseInt(x.value)}%`;
x.addEventListener("input",() => {
    texttitle.style.left = `${parseInt(x.value)}%`;
});

texttitle.style.top = `${parseInt(y.value)}%`;
y.addEventListener("input",() => {
    texttitle.style.top = `${parseInt(y.value)}%`;
});

colortext.value = "#f3d512";
texttitle.style.color = `${colortext.value}`;
colortext.addEventListener("input",() => {
    texttitle.style.color = `${colortext.value}`;
});

shadowtext.value = "#efd425";
texttitle.style.textShadow = `0 0 10px ${shadowtext.value}`;
shadowtext.addEventListener("input",() => {
    texttitle.style.textShadow = `0 0 10px ${shadowtext.value} , 0 0 15px ${shadowtext.value}, 0 0 20px ${shadowtext.value}`;
});
