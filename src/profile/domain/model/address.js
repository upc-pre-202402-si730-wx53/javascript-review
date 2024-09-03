export class Address{
    constructor({street, city, state, zipCode}){
        this._street = street;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
    }

    get street(){
        return this._street;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zipCode(){
        return this._zipCode;
    }
}