export class Invoice {
    #brand;
    #client;

    constructor(brand, client) {
        this.#brand = brand;
        this.#client = client;
    }

     printInvoice() {
        const invoice = `
        =======================================================
        ${this.#brand.name}
        Nif: ${this.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}`
        console.log(invoice)
     }

}

