window.onload = function() {
    const buttons = document.querySelectorAll(".categoryBtn");
    
    // TODO: להוסיף את הקישור לקטגוריה
    buttons.forEach(button=>{
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            window.location.href = 'Recipe.html';
        })
    })
    
    
}