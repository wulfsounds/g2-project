const handleWeeklyForm = async (event) => {
    const target = event.target;

    if (target.tagName === "BUTTON") {
      event.preventDefault();
      event.stopPropagation();

      addTask(target);
    }
    
}

const addTask = async (target) => {
    const task = target.previousElementSibling.value;

    console.log(task)

    if (task) {
      const response = await fetch(`/api/lists/${target.id}`, {
        method: 'POST',
        body: JSON.stringify({ task }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/weekly`);
      } else {
        alert('Failed to add task.');
      }
    }

}

document.querySelector('.list-container').addEventListener('click', handleWeeklyForm);