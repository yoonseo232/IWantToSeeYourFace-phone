function checkReset() {
    fetch('/reset-status')
        .then(response => response.json())
        .then(data => {
            if (data.reset) {
                 window.location.href = '/';
            }
        })
        .catch(error => console.error('Error:', error));
}
setInterval(checkReset, 5000);