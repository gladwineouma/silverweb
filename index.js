
document.body.style.backgroundColor = "silver";
const title = document.getElementById("title").style.color = "#03AC13"

const heading3 = document.getElementsByTagName("h3");
for ( let i = 0; i < heading3.length; i++){
    heading3[i].style.textTransform = "uppercase"
};

const fruits = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruits.appendChild(newFruit);

const vegetable = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
vegetable.appendChild(newVeg);

function resizeAllImages(){
    const images = document.getElementById("display")
    for (img of images){
        img.width = 250
        img.height = 250
    }
}

// const img = document.querySelectorAll("display");
//     img.width = 250
//     img.height = 250

// for (let i = 0; i < img.length; i++){
//     img.width = 250
//     img.height = 250
// }



