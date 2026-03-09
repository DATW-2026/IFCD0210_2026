export class Product {

    #sku: string;
    #name: string;
    #unityPrice: number;
    
    get sku() {return this.#sku}
    
    constructor(sku: string, name: string, unitaryPrice: number) {
        this.#sku = sku;
        this.#name = name;
        this.#unityPrice = unitaryPrice;
    }

    #calculatePrice(items: number) {
        return items * this.#unityPrice;
    }

    renderInvoiceLine(amount: number) {
        const result: [string, number] = ['', this.#calculatePrice(amount)];
        result[0] = `
        ${this.#name}: ${amount} unidades a ${
            this.#unityPrice
        }€ Total.................. ${result[1]}€`;
        return result;
    }
}

