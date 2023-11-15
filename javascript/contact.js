function checkCircleBox(listName) {
    const selectionCircle = document.querySelectorAll(`#${listName}`);
    if (selectionCircle[0].classList.contains('selected-circle') == false) {
        for (let i = 0; i < selectionCircle.length; i++) {
            selectionCircle[i].classList.add('selected-circle');
        }   
    }
    else {
        for (let i = 0; i < selectionCircle.length; i++) {
            selectionCircle[i].classList.remove('selected-circle');
        }     
    }
    /*Check for selection-circle class
        if the selected-circle class exists (I still need to create this, go to figma)
            remove the selected-circle class
        else 
            add the selected-circle class*/
    }       