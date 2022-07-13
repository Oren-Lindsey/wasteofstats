/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const exceptions = ['wasteof.money', 'willy.', 'someonewithalongername']
    if (!exceptions.includes(param)) {
        return /^[a-z0-9_\\-]{1,20}$/.test(param);
    } else {
        return true
    }
}