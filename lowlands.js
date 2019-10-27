/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* categorieen openklappen */

var openKlap = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < openKlap.length; i++) {
    openKlap[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/* hamburger codepen les*/

var button = document.querySelector('#knop');
var nav = document.querySelector('.hamburger');
var afbeelding = document.querySelector('#knop > img')


function hierbenik() {
    nav.classList.toggle('verschijn');
}

button.addEventListener('click', hierbenik)

/*hamburger naar kruis */
/* bronnen: https://www.w3schools.com/jsref/met_element_getattribute.asp & https://www.w3schools.com/js/js_if_else.asp */

function verander() {
    if (afbeelding.getAttribute('src') == "img/hamburger.png") {
        afbeelding.src = "img/close.png";

    } else {
        afbeelding.src = "img/hamburger.png"
    }
}

button.addEventListener('click', verander);
