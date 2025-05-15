export function scrollUp(targetId: string, offset: number = 100): void {
    const targetElement = document.getElementById(targetId)

    if (!targetElement) return

    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })
}
