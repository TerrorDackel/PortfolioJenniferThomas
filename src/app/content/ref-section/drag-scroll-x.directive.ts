import { Directive, ElementRef, HostListener, Renderer2, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[dragScrollX]',
    standalone: true
})
export class DragScrollXDirective {
    private platformId = inject(PLATFORM_ID);
    private dragging = false;
    private startX = 0;
    private startScrollLeft = 0;
    private pointerId: number | null = null;

    constructor(private el: ElementRef<HTMLElement>, private r: Renderer2) {}

    @HostListener('pointerdown', ['$event'])
    onPointerDown(ev: PointerEvent) {
        if (!isPlatformBrowser(this.platformId)) return;
        if (ev.button !== 0 || ev.pointerType === 'touch') return;

        this.dragging = true;
        this.pointerId = ev.pointerId;
        this.startX = ev.clientX;
        this.startScrollLeft = this.el.nativeElement.scrollLeft;
        this.el.nativeElement.setPointerCapture(this.pointerId);
        this.r.addClass(this.el.nativeElement, 'dragging');
    }

    @HostListener('pointermove', ['$event'])
    onPointerMove(ev: PointerEvent) {
        if (!isPlatformBrowser(this.platformId)) return;
        if (!this.dragging) return;
        ev.preventDefault();
        const dx = ev.clientX - this.startX;
        this.el.nativeElement.scrollLeft = this.startScrollLeft - dx;
    }

    @HostListener('pointerup', ['$event'])
    @HostListener('pointercancel', ['$event'])
    @HostListener('pointerleave', ['$event'])
    onPointerEnd(_ev: PointerEvent) {
        if (!isPlatformBrowser(this.platformId)) return;
        if (!this.dragging) return;
        this.dragging = false;
        if (this.pointerId !== null) {
            try { this.el.nativeElement.releasePointerCapture(this.pointerId); } catch {}
        }
        this.pointerId = null;

        this.r.removeClass(this.el.nativeElement, 'dragging');
        this.snapToNearestCard();
    }

    private snapToNearestCard() {
        if (!isPlatformBrowser(this.platformId)) return;
        const container = this.el.nativeElement;
        const cards = Array.from(container.querySelectorAll<HTMLElement>('.ref-card'));
        if (!cards.length) return;

        const current = container.scrollLeft;
        const padLeft = this.getContainerPaddingLeft(container);
        const targets = cards.map(card => card.offsetLeft - padLeft);

        let nearest = targets[0];
        let minDist = Math.abs(current - nearest);
        for (let i = 1; i < targets.length; i++) {
            const d = Math.abs(current - targets[i]);
            if (d < minDist) { minDist = d; nearest = targets[i]; }
        }

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        container.scrollTo({ left: nearest, behavior: prefersReduced ? 'auto' : 'smooth' });
    }

    private getContainerPaddingLeft(el: HTMLElement): number {
        const cs = getComputedStyle(el);
        const pad = parseFloat(cs.paddingLeft || '0');
        return isNaN(pad) ? 0 : pad;
    }
}