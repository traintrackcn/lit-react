import Collection from '.';

describe('', () => {

    it('test key to value', () => {
        const c = new Collection();
        c.set('a', 'a');
        c.set('b', 'b');

        const value = JSON.stringify(c.get_values());
        const eValue = JSON.stringify(['a', 'b']);
        expect(value).toBe(eValue);
        expect(c.get('a')).toBe('a');
    });

    it('test key to values', () => {
        const c = new Collection(true);
        c.set('a', 'a');
        c.set('a', 'aa');

        const value = JSON.stringify(c.get('a'));
        const eValue = JSON.stringify(['a', 'aa']);
        expect(value).toBe(eValue);
    });

})