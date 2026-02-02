import { isPlatformBrowser } from '@angular/common';

export function observeAnimationReveal(className: string, delay: number = 0, platformId?: object) {
    if (platformId && !isPlatformBrowser(platformId)) {
        return;
    }
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    el.classList.add('in-view');
                    el.style.setProperty('--reveal-delay', `${delay}ms`);
                    observer.unobserve(el); // nur einmalig
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
}
