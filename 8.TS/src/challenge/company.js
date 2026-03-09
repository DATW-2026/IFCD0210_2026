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
var _Company_nif, _Company_name, _Company_address, _Company_phone;
export class Company {
    // setters & getters
    get nif() {
        return __classPrivateFieldGet(this, _Company_nif, "f").toLocaleUpperCase();
    }
    get name() {
        return __classPrivateFieldGet(this, _Company_name, "f");
    }
    get address() {
        return __classPrivateFieldGet(this, _Company_address, "f");
    }
    get phone() {
        return __classPrivateFieldGet(this, _Company_phone, "f");
    }
    constructor(name, nif, address = '', phone = '') {
        _Company_nif.set(this, void 0);
        _Company_name.set(this, void 0);
        _Company_address.set(this, void 0);
        _Company_phone.set(this, void 0);
        __classPrivateFieldSet(this, _Company_nif, nif, "f");
        __classPrivateFieldSet(this, _Company_name, name, "f");
        __classPrivateFieldSet(this, _Company_address, address, "f");
        __classPrivateFieldSet(this, _Company_phone, phone, "f");
    }
}
_Company_nif = new WeakMap(), _Company_name = new WeakMap(), _Company_address = new WeakMap(), _Company_phone = new WeakMap();
