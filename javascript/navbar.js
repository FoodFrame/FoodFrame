function changeNavbarElementColor(elementType) //add a class to the list item in order to change its css
{
    console.log('Yes!');

    let element = document.querySelector(`#${elementType}`);
    element.classList.add('navbar-elements-hover');

    document.querySelector(`#${elementType}`).classList.remove('navbar-elements');
}

function changeNavbarNormal(elementType) //removes the class that was added with the changeNavbarElementColor() function
{
    document.querySelector(`#${elementType}`).classList.add('navbar-elements');

    document.querySelector(`#${elementType}`).classList.remove('navbar-elements-hover');
}


function resetNavOnResize() {
    const navToggle = document.querySelector('#nav_dropdown')


    if (navToggle && navToggle.checked && window.innerWidth > 730) {
        navToggle.checked = false;  
    }
}

window.addEventListener('resize', resetNavOnResize);

resetNavOnResize();

