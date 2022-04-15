const handleWeeklyForm = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target;
    // console.log(target.tagName);

    if (target.tagName === "BUTTON") {
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
        document.location.replace(`/`);
      } else {
        alert('Failed to add task.');
      }
    }

}

document.querySelector('.list-container').addEventListener('click', handleWeeklyForm);