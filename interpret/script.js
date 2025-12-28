document.addEventListener('DOMContentLoaded', function () {
    // Track training progress
    const currentPage = window.location.pathname.split('/').pop();
    const progressMap = {
        '': 0,
        'index.html': 0,
        'step1.html': 20,
        'step2.html': 40,
        'step3.html': 60,
        'practice.html': 80,
        'summary.html': 100
    };
    const pageProgress = progressMap[currentPage];
    if (pageProgress !== undefined) {
        localStorage.setItem('chemTrainingProgress', pageProgress);
    }

    // Update header progress if needed
    const header = document.querySelector('chem-header');
    if (header) {
        const progress = localStorage.getItem('chemTrainingProgress') || '0';
        header.setAttribute('progress', progress);
    }
});
