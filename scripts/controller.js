function makeArray() {
    array = [];
    var tempArr = document.forms.form.values.value.split(' ');
    for (var i = 0; i < tempArr.length; i++)
        array[i] = tempArr[i];
    showArray();
}

function resetArray() {
    i = 0;
    j = 0;
    hideArray();
    array = [];
}

function nextStep() {
    var temp;
    if (i < array.length - 1) {
        highlight();
        if (parseInt(array[j]) > parseInt(array[j + 1])) {
            temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
            swipe();
        }
        if(j < array.length - i - 1)
            j++;
        else {
            i++;
            j = 0;
        }
    }
    else {
        alert("Сортировка окончена!");
    }
}