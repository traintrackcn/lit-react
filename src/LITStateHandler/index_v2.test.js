import LITStateHandlerV2 from "./index_v2";
import p from "../__mock__/p";
import s from "../s";

it('test set,get,del state', () => {
    const h = new GuestHandler(p.guest);
    const value = 'abc@email.com';
    h.setStateStore(s);
    h.setEmail(value);

    expect(h.getEmail()).toBe(value);

    const state = s.get(['r']);
    expect(JSON.stringify(state)).toBe('{\"guest\":{\"email\":\"abc@email.com\"}}');

    h.delEmail();
    expect(h.getEmail()).toBe();

});

it.only('test getPath', () => {
    const h = new LITStateHandlerV2(p.a);
    expect( JSON.stringify(h.getPath()) ).toBe("[\"r\",\"a\"]");
    expect( JSON.stringify(h.getPath('a1')) ).toBe("[\"r\",\"a\",\"a1\"]");
});


class GuestHandler extends LITStateHandlerV2 {

    setEmail(value) {
        this.setKey(k.EMAIL, value);
    }

    getEmail() {
        return this.getKey(k.EMAIL);
    }

    delEmail() {
        this.delKey(k.EMAIL);
    }

}


const k = {
    EMAIL: 'email'
}





