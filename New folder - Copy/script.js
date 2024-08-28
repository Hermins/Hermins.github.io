document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    let attempts = 0;
    let alertShown = false; // To track if the alert has been shown

    const successPage = 'success.html'; // Placeholder for the success page URL

    function handleCommand(command) {
        if (command.startsWith('bypass.key ')) {
            const inputKey = command.split(' ')[1];
            if (inputKey === '7652') {
                window.location.href = successPage;
            } else {
                attempts++;
                if (attempts === 3 && !alertShown) {
                    alertShown = true; // Set the flag to true to prevent repeated alerts
                    showAlert();
                } else {
                    output.innerHTML += `<div>STOP</div>`;
                    input.value = '';
                }
            }
        }
    }

    function showAlert() {
        // Show a single alert message
        alert('HAVE A GOOD DAY');
    }

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            output.innerHTML += `<div>> ${command}</div>`;
            handleCommand(command);
            input.value = '';
            event.preventDefault();
        }
    });
});
