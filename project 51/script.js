let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let input = document.querySelector('#taskInput');

addBtn.addEventListener('click', function() {
    let elem = document.createElement('li');
    elem.classList.add("item");
    elem.textContent = input.value;
    list.append(elem);
    let div = document.createElement('div')
})

