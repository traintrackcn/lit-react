import { LITPath, LITHandler, s, store } from './index';
it('test imports', ()=>{
    expect(LITPath).toBeTruthy();
    expect(s).toBeTruthy();
    expect(store).toBeTruthy();
    expect(LITHandler).toBeTruthy();
    
});