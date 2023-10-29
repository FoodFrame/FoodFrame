function checkCircleBox(listName) {
    const selectionCircle = document.getElementById(`${listName}`);
    if (selectionCircle.classList.contains('selected-circle') == false) {
        selectionCircle.classList.add('selected-circle');
    }
    else {
        selectionCircle.classList.remove('selected-circle');
    }
    //Check for selection-circle class
        //if the selected-circle class exists (I still need to create this, go to figma)
            //remove the selected-circle class
        //else 
            //add the selected-circle class
    }       