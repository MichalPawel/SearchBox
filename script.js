const listElements = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const input = document.querySelector('input');


const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [...listElements]
    tasks = tasks.filter(task => task.innerText.toLowerCase().includes(searchText))
    ul.textContent = '';
    tasks.forEach(task => ul.appendChild(task))
}

input.addEventListener('keyup', searchTask)