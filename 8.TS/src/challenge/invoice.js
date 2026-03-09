var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Invoice_instances, _a, _Invoice_brand, _Invoice_lastId, _Invoice_getID, _Invoice_id, _Invoice_client, _Invoice_items, _Invoice_iva, _Invoice_total, _Invoice_calculatePrice;
import { Company } from './company.js';
import { Product } from './product.js';
export class Invoice {
    // constructor
    constructor(client, product, amount, iva = 1.21) {
        _Invoice_instances.add(this);
        // declaración de propiedades preferiblemente privadas
        _Invoice_id.set(this, __classPrivateFieldGet(_a, _a, "m", _Invoice_getID).call(_a));
        _Invoice_client.set(this, void 0);
        _Invoice_items.set(this, void 0);
        _Invoice_iva.set(this, void 0);
        _Invoice_total.set(this, 0);
        __classPrivateFieldSet(this, _Invoice_items, [
            {
                product: product,
                amount: amount,
            },
        ], "f");
        __classPrivateFieldSet(this, _Invoice_iva, iva, "f");
        __classPrivateFieldSet(this, _Invoice_client, client, "f");
    }
    get client() {
        return __classPrivateFieldGet(this, _Invoice_client, "f");
    }
    addProduct(product, amount) {
        __classPrivateFieldGet(this, _Invoice_items, "f").push({
            product,
            amount,
        });
    }
    printInvoice() {
        const invoice = `
        =======================================================
        ${__classPrivateFieldGet(_a, _a, "f", _Invoice_brand).name}
        Nif: ${__classPrivateFieldGet(_a, _a, "f", _Invoice_brand).nif}

        Datos cliente
        Nombre: ${__classPrivateFieldGet(this, _Invoice_client, "f").name}
        Nif: ${__classPrivateFieldGet(this, _Invoice_client, "f").nif}

        Factura ${__classPrivateFieldGet(this, _Invoice_id, "f")}

        ${__classPrivateFieldGet(this, _Invoice_items, "f")
            .map((item) => {
            const tuple = item.product.renderInvoiceLine(item.amount);
            __classPrivateFieldGet(this, _Invoice_instances, "m", _Invoice_calculatePrice).call(this, tuple[1]);
            return tuple[0];
        })
            .join('\n')}
        
        ----------------------------------------------
        Total + IVA ........... ${__classPrivateFieldGet(this, _Invoice_total, "f")}
        ========================================================
        `;
        console.log(invoice);
    }
}
_a = Invoice, _Invoice_id = new WeakMap(), _Invoice_client = new WeakMap(), _Invoice_items = new WeakMap(), _Invoice_iva = new WeakMap(), _Invoice_total = new WeakMap(), _Invoice_instances = new WeakSet(), _Invoice_getID = function _Invoice_getID() {
    var _b;
    const year = new Date().getFullYear();
    const id = String(year) + '/' + String(__classPrivateFieldSet(this, _a, (_b = __classPrivateFieldGet(this, _a, "f", _Invoice_lastId), ++_b), "f", _Invoice_lastId));
    return id;
}, _Invoice_calculatePrice = function _Invoice_calculatePrice(price) {
    __classPrivateFieldSet(this, _Invoice_total, __classPrivateFieldGet(this, _Invoice_total, "f") + price * __classPrivateFieldGet(this, _Invoice_iva, "f"), "f");
};
// propiedades y métodos static
_Invoice_brand = { value: new Company('68323392y', 'Boracay') };
_Invoice_lastId = { value: 0 };
