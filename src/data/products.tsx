export interface IProduct {
    code: string;
    name: string;
    price: number;
    thumb: string;
    image: string;
}

export const products: IProduct[] = [
    {
        code: "X7R2OPX",
        name: "Shirt",
        price: 20,
        thumb: "/TSHIRT_thumb.png",
        image: "/TSHIRT.jpg",
    },
    {
        code: "X2G2OPZ",
        name: "Mug",
        price: 5,
        thumb: "/MUG_thumb.png",
        image: "/MUG.jpg",
    },
    {
        code: "X3W2OPY",
        name: "Cap",
        price: 10,
        thumb: "/CAP_thumb.png",
        image: "/CAP.jpg",
    },
];
