
document.body.style.backgroundColor = "silver";
const title = document.getElementById("title").style.color = "green"


const heading3 = document.getElementsByTagName("h3");
for ( let i = 0; i < heading3.length; i++){
    heading3[i].style.textTransform = "uppercase"
};

const targetElement = document.getElementById("kiosk");
if (targetElement) {
  targetElement.style.color = "green"; 
  targetElement.style.fontSize = "5rem";
  targetElement.style.fontWeight = "normal" 
  targetElement.style.textAlign = "center"
  targetElement.style.top = "4vh"
}
const landingImage = document.getElementById("intro");
const imageElement = document.createElement("img");
imageElement.src = "images/veges.png";
landingImage.appendChild(imageElement);
imageElement.style.position = "absolute";
imageElement.style.bottom = "3vh";
imageElement.style.left = "9vw";

const fruits = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruits.appendChild(newFruit);

const vegetable = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
vegetable.appendChild(newVeg);


const footer = document.getElementsById('footer');
footer.style.backgroundColor = "black"








