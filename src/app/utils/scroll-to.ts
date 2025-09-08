export function scrollUp(targetId: string, offset: number = 100, ensureRoot: boolean = false): void {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        return;
    }

    if (ensureRoot && window.location.pathname !== '/') {
        sessionStorage.setItem('return-anchor', targetId);
        window.location.href = '/';
    }
}
