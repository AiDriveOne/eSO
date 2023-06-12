function performTask(task, data) {
  fetch('/perform_task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task, data })
  })
  .then(response => response.json())
  .then(result => {
    // Handle the result
    console.log(result.result);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
}

// Example usage
const task = 'text_classification';
const data = 'This is a sample text';
performTask(task, data);
