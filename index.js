const originalAporteObjetivoDisplay = document.getElementById('aporteMensalObjetivo');
const cloneAporteObjetivoDisplay = document.getElementById('aporteMensalObjetivoDisplayClone');

if (originalAporteObjetivoDisplay && cloneAporteObjetivoDisplay) {
    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                cloneAporteObjetivoDisplay.textContent = originalAporteObjetivoDisplay.textContent;
            }
        }
    });
    observer.observe(originalAporteObjetivoDisplay, { characterData: true, childList: true, subtree: true });
    cloneAporteObjetivoDisplay.textContent = originalAporteObjetivoDisplay.textContent;
}