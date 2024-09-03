import {Profile} from "./profile.js";

export class NewProfile extends Profile{
    constructor(name, email, password, status) {
        super(name, email, password);
        this.status = status;
    }
}