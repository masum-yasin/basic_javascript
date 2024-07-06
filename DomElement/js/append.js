// const importantPlaces = document.getElementById("country-list")[0];
// const li = document.createElement("li");
// li.innerText = "gorer Dim er bon";
// importantPlaces.appendChild(li)

const container = document.getElementsByClassName("mainContainer")[0];
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My favorite Food";
section.appendChild(h1);
const li1 = document.createElement('li');
li1.innerText = "Birani";
section.appendChild(li1);
const li2= document.createElement('li');
li2.innerText = "Borhani";
section.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = "kacchi";
section.appendChild(li3);
container.appendChild(section);



