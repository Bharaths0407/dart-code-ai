// constant of url
const BASE_URLS = {
    LOCAL: 'http://localhost:5173',
    PROD: 'https://dartcode-ai.netlify.app',
};

export const BASE_URL =
    import.meta.env.MODE === 'production' ? BASE_URLS.PROD : BASE_URLS.LOCAL;

//route URLs
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    PRICING: '/pricing',
    EARLY_ACCESS: '/early-access',
    THANK_YOU: '/thank-you',
};
