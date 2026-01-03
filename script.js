document.addEventListener('DomContentLoaded', () => {
    const autoRotateBtn = document.querySelector('.stopAutoRotate');
    const autoRotateBtnI = document.querySelector('.rotateI');
    const modelViewer = document.querySelector('model-viewer');

    autoRotateBtn.addEventListener('click', () => {
        if(modelViewer.hasAttribute('auto-rotate')) {
            modelViewer.removeAttribute('auto-rotate');
            autoRotateBtnI.style.animationPlayState = 'paused';
        } else {
            modelViewer.setAttribute('auto-rotate', '');
            autoRotateBtnI.style.animationPlayState = 'running';
        }
    });
})