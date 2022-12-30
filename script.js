document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Insira uma tarefa');
  } else {
    document.querySelector('#tasks').innerHTML += `
    <span class="line">
    <div class="task">
      <span id="taskname" class="taskname">
        ${document.querySelector('#newtask input').value}
      </span>
      <button class="delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;
    var current_tasks = document.querySelectorAll('.delete');
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
