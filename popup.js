document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');

    if (button && message) {
        button.addEventListener('click', () => {
            message.textContent = "Hello from Chrome Extension!";
        });
    }
});