document.addEventListener('DOMContentLoaded', () => {
    const autoRotateBtn = document.querySelector('.stopAutoRotate');
    const autoRotateBtnI = document.querySelector('.rotateI');
    const modelViewer = document.querySelector('model-viewer');

    if (autoRotateBtn && modelViewer) {
        autoRotateBtn.addEventListener('click', () => {
            if(modelViewer.hasAttribute('auto-rotate')) {
                modelViewer.removeAttribute('auto-rotate');
                if (autoRotateBtnI) autoRotateBtnI.style.animationPlayState = 'paused';
            } else {
                modelViewer.setAttribute('auto-rotate', '');
                if (autoRotateBtnI) autoRotateBtnI.style.animationPlayState = 'running';
            }
        });
    }
});
