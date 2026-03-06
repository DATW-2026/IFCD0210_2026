export class Product {

    #sku //string;
    #name //string;
    #unityPrice //number;
    constructor(sku, name, unitaryPrice) {
        this.#sku = sku;
        this.#name = name;
        this.#unityPrice = unitaryPrice;
    }

    #calculatePrice(items) {
        return items * this.#unityPrice;
    }

    renderInvoiceLine(amount) {
        const result = ['', this.#calculatePrice(amount)];
        result[0] = `
        ${this.#name}: ${amount} unidades a ${
            this.#unityPrice
        }€ Total.................. ${result[1]}€`;
        return result;
    }
}
