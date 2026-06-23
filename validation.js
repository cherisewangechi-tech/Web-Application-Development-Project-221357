document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            const handicapInput = document.getElementById('handicapIndex');
            const handicapValue = parseFloat(handicapInput.value);

            if (handicapValue < -10 || handicapValue > 54) {
                event.preventDefault();
                alert('Please enter a valid amateur Handicap Index between -10 and 54.');
                handicapInput.focus();
                return;
            }

            alert('Processing entry registration... Success!');
        });
    }
});