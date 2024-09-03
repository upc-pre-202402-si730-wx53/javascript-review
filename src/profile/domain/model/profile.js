import { v4 as uuid } from 'uuid';
import {Address} from "./address.js";

export class Profile{

    constructor({name, email, password}){
        this._id = uuid();
        this._name = name;
        this._email = email;
        this._password = password;
        this._address = [];
    }

    addAddress({street, city, state, zipCode}){
        this.address.push(new Address(
            {street, city, state, zipCode}
        ));
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get password(){
        return this._password;
    }

    get address(){
        return this._address;
    }

}