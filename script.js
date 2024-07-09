document.addEventListener('DOMContentLoaded', function() {
    const editableCell = document.getElementById('editableCell');
    const editInput = document.getElementById('editInput');

    editableCell.addEventListener('click', function() {
        editInput.value = editableCell.textContent;
        editableCell.style.display = 'none';
        editInput.style.display = 'inline-block';
        editInput.focus();
    });

    editInput.addEventListener('blur', function() {
        editableCell.textContent = editInput.value;
        editableCell.style.display = 'inline-block';
        editInput.style.display = 'none';
    });

    editInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            editInput.blur();
        }
    });
});