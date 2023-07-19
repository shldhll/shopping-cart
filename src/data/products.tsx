import { Amount } from "@/utils/amount";

export interface IProduct {
    code: string;
    name: string;
    price: Amount;
    thumb: string;
    image: string;
}

export const products: IProduct[] = [
    {
        code: "TSHIRT",
        name: "T-Shirt",
        price: new Amount(2000, 2),
        thumb: "/TSHIRT_thumb.png",
        image: "/TSHIRT.jpg",
    },
    {
        code: "MUG",
        name: "Coffee Mug",
        price: new Amount(750, 2),
        thumb: "/MUG_thumb.png",
        image: "/MUG.jpg",
    },
    {
        code: "CAP",
        name: "Cap",
        price: new Amount(500, 2),
        thumb: "/CAP_thumb.png",
        image: "/CAP.jpg",
    },
];
