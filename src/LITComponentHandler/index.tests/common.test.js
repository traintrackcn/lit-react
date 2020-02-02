import CommonHandler from './mock/CommonHandler';


it('get handler name', () => {
    const h = new CommonHandler();
    expect(h.className).toBe('CommonHandler');
})