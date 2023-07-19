export interface IProduct {
    code: string;
    name: string;
    price: number;
    thumb: string;
    image: string;
}

export const products: IProduct[] = [
    {
        code: "TSHIRT",
        name: "T-Shirt",
        price: 20,
        thumb: "/TSHIRT_thumb.png",
        image: "/TSHIRT.jpg",
    },
    {
        code: "MUG",
        name: "Coffee Mug",
        price: 7.5,
        thumb: "/MUG_thumb.png",
        image: "/MUG.jpg",
    },
    {
        code: "CAP",
        name: "Cap",
        price: 5,
        thumb: "/CAP_thumb.png",
        image: "/CAP.jpg",
    },
];
