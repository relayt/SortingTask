var array = [6, 2, 3, 1, 7, 4, 8, 5]

function SelectionSort(array) {
    var n = array.length;
    for (var i = 0; i < n-1; i++)
    { 
        var min = i;
        for (var j = i+1; j < n; j++)
        { 
            if (array[j] < array[min]) min = j;
        } 
       var t = array[min]; 
       array[min] = array[i]; 
       array[i] = t;
    }
    return array;
}

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}

SelectionSort(array);
DrawArray();