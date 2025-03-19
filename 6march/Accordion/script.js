document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingTop = 0;
            content.style.paddingBottom = 0;
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.style.paddingTop = 0;
                item.style.paddingBottom = 0;
            });

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingTop = "5px";
            content.style.paddingBottom = "5px";
        }
    });
});