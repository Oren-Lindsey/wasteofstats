/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const exceptions = ['wasteof.money', 'willy.', 'someonewithalongername', 'wwwwwwwwwwwwwwwwwwwww', 'david (admin)', 'name with a space in it', 'banned-user.1', 'banned-user.2', 'banned-user.3', 'banned-user.4', 'banned-user.5', 'banned-user.6', 'banned-user.7', 'banned-user.8', 'banned-user.9', 'banned-user.10', 'banned-user.11', 'banned-user.12']
    if (!exceptions.includes(param.toLowerCase())) {
        return /^[a-z0-9_\\-]{1,20}$/.test(param.toLowerCase());
    } else {
        return true
    }
}