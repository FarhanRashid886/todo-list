// Get the input field and button elements
const inputField = document.getElementById('inputField');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');

// Add an event listener to the add to do button
addToDoButton.addEventListener('click', function() {
    // Get the text from the input field
    const text = inputField.value;

    // Create a new paragraph element
    const paragraph = document.createElement('p');

    // Set the inner text of the paragraph to the text from the input field
    paragraph.innerText = text;

    // Add the paragraph element to the end of the to-do list container
    toDoContainer.appendChild(paragraph);

    // Clear the input field
    inputField.value = '';
});
