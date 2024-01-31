document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('question-input').value;
    // TODO: Send question to server and get an answer
    console.log('Question asked:', question);
});

document.getElementById('file-upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.getElementById('csv-file-input').files[0];
    // TODO: Upload file to server and handle it
    console.log('File uploaded:', file.name);
});
