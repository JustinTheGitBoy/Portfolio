window.onkeydown = function(event) {
    if (event.keyCode == '32') {
        event.preventDefault();
        play();
    }
}
let selectedIndex = 0;
let count = 0;
let selector;
let isPlaying = false;

function play() {
    let items = document.getElementsByClassName('item');
    count = 0;
    let itemSize = items.length;

    if (isPlaying) {
        isPlaying = false;
        clearInterval(selector);

    } else {
        isPlaying = true;
        items[selectedIndex].style.backgroundColor = "white";

        selector = setInterval(function() {
            selectedIndex = count;


            if (count > 0) {
                items[count - 1].style.backgroundColor = "white";
            } else if (count == 0) {
                items[itemSize - 1].style.backgroundColor = "white";
            }
            items[count].style.backgroundColor = "yellow";
            if (count == itemSize - 1) {
                count = 0;
            } else {
                count += 1;
            }
        }, 50);
    }
}

function applyList() {
    let list = document.getElementById('list');
    let items = list.value.split('\n');

    let itemList = document.getElementById('item_list');
    itemList.innerHTML = '';
    isPlaying = false;
    clearInterval(selector);
    count = 0;
    selectedIndex = 0;

    for (let item of items) {
        let newItem = document.createElement('div');
        newItem.innerText = item;
        newItem.className = 'item';

        itemList.appendChild(newItem);

    }
}