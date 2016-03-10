
function showArray() {
    document.getElementById('reset').style.visibility = 'visible';
    document.getElementById('nextStep').style.visibility = 'visible';
    var container = document.getElementById('container');
    container.style.visibility = 'visible';
    var newDiv;
    var currentX = 15;
    for (var i = 0; i < array.length; i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'div' + i);
        newDiv.setAttribute('style', 'left: ' + currentX + 'px;');
        newDiv.innerHTML = array[i];
        container.appendChild(newDiv);
        currentX += 55;
    }
    
}

function hideArray() {
    for (var i = 0; i < array.length; i++) 
        document.getElementById('div' + i).remove();
    document.getElementById('reset').style.visibility = 'hidden';
    document.getElementById('nextStep').style.visibility = 'hidden';
    document.getElementById('container').style.visibility = 'hidden';
}

function swipe() {
    var div1 = document.getElementById('div' + (j+1));
    var div2 = document.getElementById('div' + j);
    div1.style.backgroundColor = 'orange';
    div2.style.backgroundColor = 'orange';
    var val1 = div1.innerHTML;
    var val2 = div2.innerHTML;
    div1.innerHTML = val2;
    div2.innerHTML = val1;
}

function highlight() {
    for (var k = 0; k < array.length; k++)
        if (k == j || k == j+1)
            document.getElementById('div' + k).style.backgroundColor = 'yellow';
        else {
            document.getElementById('div' + k).style.backgroundColor = 'white';
        }
}
