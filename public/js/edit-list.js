//get post id using window.location
const pathLength = window.location.pathname.split('/').length;
const listId = window.location.pathname.split('/')[pathLength - 1];

const handleForm = async(event) => {
    event.preventDefault();
    event.stopPropagation();

    // console.log(event.target.className)

    const target = event.target;

    if (event.target.className === "deletetask") {
      delTask(target);
    } else if (event.target.className === "updatetask") {
      updateTask(target);
    } else if (event.target.className === "addtask") {
      addTask(target);
    }
}

const addTask = async (target) => {
    const task = target.previousElementSibling.value;

    console.log(task)

    if (task) {
      const response = await fetch(`/api/lists/${listId}`, {
        method: 'POST',
        body: JSON.stringify({ task }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/weekly/list/${listId}`);
      } else {
        alert('Failed to add task.');
      }
    }

}



const updateTask = async (target) => {
    console.log(target.dataset.id);
    const task = target.previousElementSibling.value;

    if (task) {
      const response = await fetch(`/api/lists/${listId}/${target.dataset.id}`, {
        method: 'PUT',
        body: JSON.stringify({ task }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/weekly/list/${listId}`);
      } else {
        alert('Failed to update task.');
      }
    }

}


const delTask = async (target) => {

    console.log(listId);
    console.log(target.id);

    const response = await fetch(`/api/lists/${listId}/${target.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace(`/weekly/list/${listId}`);
    } else {
      alert('Failed to delete task.');
    }

}

document.querySelector('#editlist').addEventListener('click', handleForm);