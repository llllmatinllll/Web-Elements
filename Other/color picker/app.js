window.addEventListener("load", () => {
    const colorItems = document.querySelectorAll('.color-item');
    colorItems.forEach(item => {
        item.addEventListener('click', function() {
            const idSelector = this.id;
            document.body.className = idSelector;
        })
    })
})