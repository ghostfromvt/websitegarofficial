let imag=[
    `images/hands.jpeg`, `images/tagstudio.jpg`, `images/adrielEndmarry.jpg`
]
var num =0;
function changeImageRight () {
    document.getElementById(`floatingpics`).src = imag[1];
    document.getElementById(`floatingpicsbackleft`).src = imag[2];
    document.getElementById(`floatingpicsbackright`).src = imag[0];
}
function changeImageLeft () {
    document.getElementById(`floatingpics`).src = imag[0];
    document.getElementById(`floatingpicsbackleft`).src =imag[1];
    document.getElementById(`floatingpicsbackright`).src = imag[2];
}
function changeImageBack () {
    document.getElementById(`floatingpics`).src = imag[2];
    document.getElementById(`floatingpicsbackright`).src = imag[1];
    document.getElementById(`floatingpicsbackleft`).src = imag[0];
}
function changeImageBothLeft () {
    if (num == 0) {
        changeImageRight();
        num++;
    }
    else if (num == 1) {
        changeImageLeft();
        num++;
    }
    else if (num==2){
        changeImageBack();
        num=0;
    }
}
function changeImageBothRight () {
    if (num == 0) {
        changeImageBack();
        num++;
    }
    else if (num == 1) {
        changeImageRight();
        num++;
    }
    else if (num==2){
        changeImageLeft();
        num=0;
    }
}

function changePage (cleck) {
    switch (cleck){
        case 1: 
            hidePages();
            document.getElementById(`updatescreen`).style.display=`block`;
        break;
        case 2: 
            hidePages();    
            document.getElementById(`gamesscreen`).style.display=`block`;
        break;
        case 3:
            hidePages();
            document.getElementById(`contributorsscreen`).style.display=`block`;
        break;
        case 4:
            hidePages();
            document.getElementById(`supportscreen`).style.display=`block`;
        break;    
        case 5:
            hidePages();
            document.getElementById(`mainscreen`).style.display=`block`;
        break;
        }
}
function hidePages(){
    document.getElementById(`mainscreen`).style.display=`none`;
    document.getElementById(`updatescreen`).style.display=`none`;
    document.getElementById(`gamesscreen`).style.display=`none`;
    document.getElementById(`contributorsscreen`).style.display=`none`;
    document.getElementById(`supportscreen`).style.display=`none`;
}