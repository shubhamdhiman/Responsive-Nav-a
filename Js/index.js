window.addEventListener('resize',function(){
    addRequiredClass();
})
function addRequiredClass(){
    if(window.innerWidth<860){
        document.body.classList.add('mobile')
    }else{
        document.body.classList.remove('mobile')
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

// Collecting all bars 
let bars = document.querySelectorAll('.hamburger span')

// Now we will check weather our navbar is open or closed
let isActive = false

hamburger.addEventListener('click',function(){
    mobileNav.classList.toggle('open')

    // if isActive is false then on onclick rotate the top and bottom bars by 45 deg
    // else 
    if(!isActive){
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    }else{
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    
})

//Theme Switch Script



// If there is nothing in local storage then local storage will return null and default theme will be applied

const themevar = document.querySelector('#theme');

const defaultTheme = localStorage.getItem('theme') || 'yellow';
changeTheme(defaultTheme);


themevar.addEventListener('change',(e) => {
    // console.log(e.target.value);
    changeTheme(e.target.value);
})

function changeTheme(theme){
    theme = theme || 'yellow';
    
    // console.log(theme);
    document.documentElement.className = theme;

    // Storing the previos value of theme in local storage
    localStorage.setItem('theme',theme);
    themevar.value = theme;
}