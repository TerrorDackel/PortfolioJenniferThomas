import { routes } from './app.routes';

describe('app routes', () => {
    it('defines the expected route paths', () => {
        const paths = routes.map(route => route.path);

        expect(paths).toContain('');
        expect(paths).toContain('legal-notice');
        expect(paths).toContain('privacy-policy');
        expect(paths).toContain('**');
    });

    it('redirects unknown paths to the home route', () => {
        const wildcard = routes.find(route => route.path === '**');

        expect(wildcard?.redirectTo).toBe('');
    });
});
