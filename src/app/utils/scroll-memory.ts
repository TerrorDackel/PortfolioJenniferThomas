export function saveScrollPosition(key: string): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0
    sessionStorage.setItem(`scroll-position-${key}`, scrollY.toString())
}

export function restoreScrollPosition(key: string, offset: number = 0): void {
    const stored = sessionStorage.getItem(`scroll-position-${key}`)
    if (stored) {
        const position = parseInt(stored, 10) - offset
        window.scrollTo({
            top: position >= 0 ? position : 0,
            behavior: 'smooth'
        })
    }
}

export function clearScrollPosition(key: string): void {
    sessionStorage.removeItem(`scroll-position-${key}`)
}
