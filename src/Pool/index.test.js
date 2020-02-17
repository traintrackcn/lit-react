import Pool from './index';


it('', () => {
    const pool = new Pool();
    const instance = pool.get(TestHandler, 1, 2, 3);
    expect(instance.a).toBe(1);
    expect(instance.b).toBe(2);
    expect(instance.c).toBe(3);

    const keys = Object.keys(pool._getCache());
    expect(keys[0]).toBe('TestHandler');
    expect(pool.get(TestHandler)).toBe(instance);
})



class TestHandler {
    
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

}