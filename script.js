document.addEventListener("DOMContentLoaded", function() {
    const modelViewer = document.querySelector('model-viewer');
    const stopButton = document.querySelector('.stop');
    const rotateIcon = document.querySelector('.rotateI');

    stopButton.addEventListener('click', function() {
        if (modelViewer.hasAttribute('auto-rotate')) {
            modelViewer.removeAttribute('auto-rotate');
            rotateIcon.style.animationPlayState = 'paused';
            stopButton.title = "Iniciar a rotação automática";
        } else {
            modelViewer.setAttribute('auto-rotate', '');
            rotateIcon.style.animationPlayState = 'running';
            stopButton.title = "Parar a rotação automática";
        }
    });
});
