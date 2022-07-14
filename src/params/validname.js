/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const exceptions = ['wasteof.money', 'willy.', 'someonewithalongername', 'wwwwwwwwwwwwwwwwwwwww', 'david (admin)']
    if (!exceptions.includes(param.toLowerCase())) {
        return /^[a-z0-9_\\-]{1,20}$/.test(param.toLowerCase());
    } else {
        return true
    }
}