/* Get a list of nodes with class name 'intro' */
articleNode = document.getElementsByClassName('intro');

/* Change value of paragraph tag which is a  child node of article tag */
articleNode[0].childNodes[1].innerHTML = "University is challenging but \
also rewarding. If obtaining a degree was easy then it definitely wasn't \
earned. I can change my self but only with the correct tools. I must make \
the commitment to succeed and proceed with my ambitions and overcome any \
hurdles that I will be found in my path during my journey through University.";

/* CHange all three images */
document.getElementById("firstImage").src = "images/Boxing_Modified.jpg";
document.getElementById("secondImage").src = "images/Sakura_Modified.jpg";
document.getElementById("thirdImage").src = "images/GamesWithFriends_Modified.jpg";

/* Get list of heading of each image */
imageHeadings = document.querySelectorAll(".content-title");

/* Change headings of each image */
imageHeadings[0].innerHTML = "Boxing Woman";
imageHeadings[1].innerHTML = "Sakura(Cherry Blossom)";
imageHeadings[2].innerHTML = "Gaming with friends";

/* Change information of each image */
document.getElementById("firstText").innerHTML = "Boxing is good for health. Also for self defence.";
document.getElementById("secondText").innerHTML = "Wild species of the cherry tree \
    are widely distributed, mainly in the Northern Hemisphere. They are \
    common in East Asia, especially in Japan.";
document.getElementById("thirdText").innerHTML = "Gaming with friends is \
    almost always so much fun.";

/* Get button elements by their ids */
firstButton = document.getElementById("ColorChanging");
secondButton = document.getElementById("ColorChanged");
thirdButton = document.getElementById("ColorChange");

/* Add event listener for mouse click to each button */
firstButton.addEventListener("click", firstButtonFunction);
secondButton.addEventListener("click", secondButtonFunction);
thirdButton.addEventListener("click", thirdButtonFunction);

/* Set background color to blue when first button is pressed */
function firstButtonFunction() {
    document.querySelector(".headings").style.backgroundColor = "blue";
}

/* Set background color to green when second button is pressed */
function secondButtonFunction() {
    document.querySelector(".headings").style.backgroundColor = "green";
}

/* Set background color to purple when third button is pressed */
function thirdButtonFunction() {
    document.querySelector(".headings").style.backgroundColor = "purple";
}


