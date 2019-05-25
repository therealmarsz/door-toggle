let doorIsOpen = true;


function testPurposes() {
    const door = document.getElementById('door');
    
    if (doorIsOpen) {
        door.src='img/closed.jpg.PNG';
        doorIsOpen= false;
    }
    else {
        door.src='img/open.jpg.PNG';
        doorIsOpen= true;
    }

}

