document.getElementById('add-button').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
  
    if (taskInput.value !== '') {
      var taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
  
      taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
      });
    }
  });
  