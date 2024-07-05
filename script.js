document.addEventListener('DOMContentLoaded', () => {
    const projectsLink = document.getElementById('projects-link');
    const projectsSection = document.getElementById('projects');

    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        projectsSection.classList.toggle('hidden');
        projectsLink.textContent = projectsSection.classList.contains('hidden') ? 'Projetos' : 'Esconder Projetos';
    });

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    setInterval(createStar, 100);
});
