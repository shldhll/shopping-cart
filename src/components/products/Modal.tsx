import { IProduct } from "@/data/products";

interface IProps {
    product: IProduct;
    setIsModalOpen: Function;
    addToCart: Function;
}

const Modal = ({ product, setIsModalOpen, addToCart }: IProps) => {
    return (
        <div className="h-[75%] w-[75%] flex bg-white transition-all ease-in-out">
            {/* Left panel */}
            <img src={product.image} alt={product.name} className="h-full w-[70%] object-cover" />

            {/* Right panel */}
            <div className="h-full w-[30%] flex flex-col font-light items-center">
                <div className="w-full text-right px-8 py-5 tracking-widest font-semibold text-gray-500" >
                    <button onClick={() => { setIsModalOpen(false) }}>X</button>
                </div>
                <div className="w-[80%] flex items-center justify-between border-b-[2px] border-gray-200 mt-8 pb-4 text-xl font-medium">
                    <span>{product.name}</span>
                    <span>{product.price} €</span>
                </div>
                <p className="text-sm w-[80%] my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales ante nibh, sed malesuada risus blandit vel. Nulla nec ante pretium, molestie quam in, porttitor lacus. Mauris risus velit, feugiat eget felis eget, congue convallis justo.</p>
                <span className="mt-8 pt-4 border-t w-[80%] text-sm text-gray-600">Product code {product.code}</span>
                <button className="mt-10 bg-[#734ffc] w-[80%] mb-10 p-3 rounded-md shadow text-white font-medium" onClick={() => { addToCart() }}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Modal;