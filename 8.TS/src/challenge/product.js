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
var _Product_instances, _Product_sku, _Product_name, _Product_unityPrice, _Product_calculatePrice;
export class Product {
    get sku() { return __classPrivateFieldGet(this, _Product_sku, "f"); }
    constructor(sku, name, unitaryPrice) {
        _Product_instances.add(this);
        _Product_sku.set(this, void 0);
        _Product_name.set(this, void 0);
        _Product_unityPrice.set(this, void 0);
        __classPrivateFieldSet(this, _Product_sku, sku, "f");
        __classPrivateFieldSet(this, _Product_name, name, "f");
        __classPrivateFieldSet(this, _Product_unityPrice, unitaryPrice, "f");
    }
    renderInvoiceLine(amount) {
        const result = ['', __classPrivateFieldGet(this, _Product_instances, "m", _Product_calculatePrice).call(this, amount)];
        result[0] = `
        ${__classPrivateFieldGet(this, _Product_name, "f")}: ${amount} unidades a ${__classPrivateFieldGet(this, _Product_unityPrice, "f")}€ Total.................. ${result[1]}€`;
        return result;
    }
}
_Product_sku = new WeakMap(), _Product_name = new WeakMap(), _Product_unityPrice = new WeakMap(), _Product_instances = new WeakSet(), _Product_calculatePrice = function _Product_calculatePrice(items) {
    return items * __classPrivateFieldGet(this, _Product_unityPrice, "f");
};
