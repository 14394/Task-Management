const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function createTaskItem(text) {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
}
