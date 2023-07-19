export class Amount {
    constructor(public value: number, public exp: number) {
        this.value = value;
        this.exp = exp;
    }

    add(b: Amount) {
        const a2 = b.rescale(this.exp);
        return new Amount(this.value + a2.value, this.exp);
    }

    subtract(b: Amount) {
        const a2 = b.rescale(this.exp);
        return new Amount(this.value - a2.value, this.exp);
    }

    multiply(b: Amount) {
        const v = (this.value * b.value) / Math.pow(10, b.exp);
        return new Amount(Math.round(v), this.exp);
    }

    divide(b: Amount) {
        const v = (this.value * Math.pow(10, b.exp)) / b.value;
        return new Amount(Math.round(v), this.exp);
    }

    rescale(exp: number) {
        if (this.exp > exp) {
            const e = this.exp - exp;
            const v = this.value / Math.pow(10, e);
            return new Amount(Math.round(v), exp);
        }
        if (this.exp < exp) {
            const e = exp - this.exp;
            const v = this.value * Math.pow(10, e);
            return new Amount(v, exp);
        }
        return this;
    }

    str() {
        if (this.exp === 0) {
            return `${this.value}`;
        }
        if (this.exp > 1000) {
            return "NA";
        }
        const p = Math.pow(10, this.exp);
        const v1 = Math.floor(this.value / p);
        const v2 = this.value - v1 * p;
        return `${v1}.${v2.toString().padStart(this.exp, "0")}`;
    }
}