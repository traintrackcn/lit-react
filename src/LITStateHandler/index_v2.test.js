import LITStateHandlerV2 from "./index_v2";
import p from "../__mock__/p";
import s from "../s";

it('test set,get,del state', () => {
    const h = new GuestHandler(p.guest);
    const value = 'abc@email.com';
    h.setStateStore(s);
    h.setEmail(value);

    expect(h.getEmail()).toBe(value);

    h.delEmail();
    expect(h.getEmail()).toBe();

});


class GuestHandler extends LITStateHandlerV2 {

    setEmail(value) {
        this.setKey(this.p.email, value);
    }

    getEmail() {
        return this.getKey(this.p.email);
    }

    delEmail() {
        this.delKey(this.p.email);
    }

}





