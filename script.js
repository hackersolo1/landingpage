document.addEventListener('DomContentLoaded', () => {
    const autoRotateBtn = document.querySelector('.stopAutoRotate');
    const modelViewer = document.querySelector('model-viewer');

    autoRotateBtn.addEventListener('click', () => {
        if(modelViewer.hasAttribute('auto-rotate')) {
            modelViewer.removeAttribute('auto-rotate');
            autoRotateBtn.textContent = 'Iniciar rotação automática';
        } else {
            modelViewer.setAttribute('auto-rotate', '');
            autoRotateBtn.textContent = 'Parar rotação automática';
        }
    });
})