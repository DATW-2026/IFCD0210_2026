export class Company {
    #nif: string;
    #name: string;
    #address: string
    #phone: string

    // setters & getters
    get nif() {
        return this.#nif.toLocaleUpperCase();
    }
    get name() {
        return this.#name;
    }
    get address() {
        return this.#address;
    }
    get phone() {
        return this.#phone;
    }

    constructor(name: string,  nif: string, address = '' , phone = '') {
        this.#nif = nif;
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
    }
}


