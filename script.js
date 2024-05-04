function toggleTheme(){
    if (document.body.style.backgroundColor==="white"){
        document.body.style.color="white";
        document.body.style.backgroundColor="black";
        document.getElementById('mysecondbut').style.display="block";
        document.getElementById('mybut').style.display="none";
    }else{
        document.body.style.color="black";
        document.body.style.backgroundColor="white";
        document.getElementById('mysecondbut').style.display="none";
        document.getElementById('mybut').style.display="block";
    }
}

function switchLanguage(){
    if(document.getElementById('originalSection').style.display==="block"){
        document.getElementById('originalSection').style.display="none";
        document.getElementById('translatedSection').style.display="block";
    }else{
        document.getElementById('originalSection').style.display="block";
        document.getElementById('translatedSection').style.display="none";
    }
    
}

//For background slide of two images
/*let currentImage = "imgs/Flowers4.jpg";

function switchImg() {
    if (currentImage === "imgs/Flowers4.jpg") {
        document.getElementById('hero').style.backgroundImage = "url('imgs/Floweers1.jpg')";
        currentImage = "imgs/Floweers1.jpg";
    } else {
        document.getElementById('hero').style.backgroundImage = "url('imgs/Flowers4.jpg')";
        currentImage = "imgs/Flowers4.jpg";
    }
}*/

//For background slide of multiple images
let currentImage = "imgs/Flowers4.jpg";

function switchImg() {
    switch (currentImage) {
        case "imgs/Flowers4.jpg":
            document.getElementById('hero').style.backgroundImage = "url('imgs/Floweers1.jpg')";
            currentImage = "imgs/Floweers1.jpg";
            break;
        case "imgs/Floweers1.jpg":
            document.getElementById('hero').style.backgroundImage = "url('imgs/Flowers8.jpeg')";
            currentImage = "imgs/Flowers8.jpeg";
            break;
        case "imgs/Flowers8.jpeg":
            document.getElementById('hero').style.backgroundImage = "url('imgs/Flowers10.jpg')";
            currentImage = "imgs/Flowers10.jpg";
            break;
        case "imgs/Flowers10.jpg":
            document.getElementById('hero').style.backgroundImage = "url('imgs/Flowers4.jpg')";
            currentImage = "imgs/Flowers4.jpg";
            break;
    }
}

/*function navToggle(){
    if (document.querySelector('.navbar-collapse')) {
        if (!document.querySelector('.navbar-collapse').classList.contains('show')) {
            document.querySelector('.navbar-collapse').classList.add('show');
        }
    } else {
        if (document.querySelector('.navbar-collapse').classList.contains('show')) {
            document.querySelector('.navbar-collapse').classList.remove('show');
        }
    }
}*/

function navToggle() {
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (!navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.add('show');
    } else {
        navbarCollapse.classList.remove('show');
    }
}
