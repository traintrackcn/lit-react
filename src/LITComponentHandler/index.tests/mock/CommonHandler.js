import LITBaseHandler from "../../../LITBaseHandler";

export default class CommonHandler extends LITBaseHandler {


    getCustomHandler() {
        return this.getHandler('getCustomHandler');
    }
}