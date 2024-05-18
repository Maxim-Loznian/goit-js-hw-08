document.querySelector('#name-input').addEventListener('input', function() {
            const nameInput = document.querySelector('#name-input').value.trim();
            const nameOutput = nameInput === '' ? 'Anonymous' : nameInput;
            document.querySelector('#name-output').textContent = nameOutput;
        });