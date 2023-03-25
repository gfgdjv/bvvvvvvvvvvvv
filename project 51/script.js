let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let input = document.querySelector('#taskInput');

addBtn.addEventListener('click', function () {
    let elem = document.createElement('li');
    elem.classList.add("item");
    elem.textContent = input.value;
    list.append(elem);
    let div = document.createElement('div');
    elem.append(div);
    div.classList.add("item__btns");

    let doneTask = document.createElement('i');
    doneTask.className = 'fa-solid fa-square-check';
    div.append(doneTask);


    doneTask.addEventListener('click', function () {
        elem.classList.toggle('done');
    })

    let delte = document.createElement('i');
    delte.className = 'fa-solid fa-trash-can';
    div.append(delte);

    delte.addEventListener('click', function () {
        elem.remove();
    })
})

