
function changeNavbarElementColor(elementType) 
{
    console.log('Yes!');

    let element = document.querySelector(`#${elementType}`);
    element.classList.add('navbar-elements-hover');

    document.querySelector(`#${elementType}`).classList.remove('navbar-elements');
}

function changeNavbarNormal(elementType) {
    document.querySelector(`#${elementType}`).classList.add('navbar-elements');

    document.querySelector(`#${elementType}`).classList.remove('navbar-elements-hover');
}