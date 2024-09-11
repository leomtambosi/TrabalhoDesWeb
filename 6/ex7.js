document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Adiciona uma nova tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        addTask(taskText);
        taskInput.value = '';
    });

    // Adiciona tarefa ao DOM
    function addTask(text) {
        const li = document.createElement('li');
        li.textContent = text;

        // Botão de deletar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        li.draggable = true;

        // Manipuladores de arrastar e soltar
        li.addEventListener('dragstart', () => {
            li.classList.add('dragging');
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
        });

        taskList.appendChild(li);
    }

    // Permite arrastar e soltar os itens da lista
    taskList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(taskList, e.clientY);
        if (afterElement == null) {
            taskList.appendChild(draggingItem);
        } else {
            taskList.insertBefore(draggingItem, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
});
