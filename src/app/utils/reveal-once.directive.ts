import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[revealOnce]',
    standalone: true
})
export class RevealOnceDirective implements OnInit, OnDestroy {
    @Input('revealOnce') animClass: string = 'reveal-from-left';
    @Input() revealDelay: string | number = '0ms';
    private observer?: IntersectionObserver;

    constructor(private el: ElementRef<HTMLElement>, private r: Renderer2) {}

    ngOnInit(): void {
        const node = this.el.nativeElement;
        this.r.addClass(node, 'reveal-init');
        this.r.addClass(node, this.animClass);
        const delay = typeof this.revealDelay === 'number' ? `${this.revealDelay}ms` : this.revealDelay;
        this.r.setStyle(node, '--reveal-delay', delay);

        if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.r.addClass(node, 'in-view');
            return;
        }

        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.r.addClass(node, 'in-view');
                this.observer?.disconnect();
            }
        }, { threshold: 0.25 });
        this.observer.observe(node);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
