import LITStateHandler from "..";
import p from '../mock/p';
import s from '../../s';

it('', () => {
    const h = new AutoshipHandler(p);
    h.s = s;

    expect(h.date.getStateStore()).toBeTruthy();
    expect(h.frequency.s).toBeTruthy();
})




class AutoshipHandler extends LITStateHandler {
    constructor(path) {
        super(path);

        this.date = new LITStateHandler(this.p.date);
        this.push(this.date);

        this.frequency = new LITStateHandler(this.p.frequency);
        this.push(this.frequency);
    }

}