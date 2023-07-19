'use client'

import { IProduct, products } from "@/data/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [productQuantity, setProductQuantity] = useState<Record<string, number>>({});
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    let price = 0;

    for (const productCode in productQuantity) {
      const productPrice = products.find((product: IProduct) => product.code === productCode)?.price || 0;

      count += productQuantity[productCode] === undefined ? 0 : productQuantity[productCode];
      price += productQuantity[productCode] === undefined ? 0 : productQuantity[productCode] * productPrice;
    }

    setTotalCount(count);
    setTotalPrice(price);
  }, [productQuantity])

  const incrementProductQuantity = (productCode: string) => {
    // Create a new key for the product and set the value to '1' if it doesn't exist
    if (productQuantity[productCode] === undefined) {
      setProductQuantity({
        ...productQuantity,
        [productCode]: 1
      })
    } else {
      setProductQuantity({
        ...productQuantity,
        [productCode]: productQuantity[productCode] + 1
      })
    }
  }

  const decrementProductQuantity = (productCode: string) => {
    // Create a new key for the product if it doesn't exist
    // and decrement only if the quantity is not 0
    if (productQuantity[productCode] === undefined) {
      setProductQuantity({
        ...productQuantity,
        [productCode]: 0
      })
    } else if (productQuantity[productCode] !== 0) {
      setProductQuantity({
        ...productQuantity,
        [productCode]: productQuantity[productCode] - 1
      })
    }
  }


  return (
    <div className="h-screen w-screen bg-[url('/background.jpg')] flex items-center justify-center">
      {/* Left panel */}
      <div className="h-[75%] w-[75%] flex">
        <div className="h-full w-[70%] bg-white flex flex-col items-center space-y-8">
          <p className="mt-8 pb-4 text-xl font-medium border-b-[2px] w-[90%]">Products</p>
          <table className="w-[90%] font-light">
            <thead>
              <tr>
                <th className="uppercase font-light text-xs text-gray-400 text-left">Product Details</th>
                <th className="uppercase font-light text-xs text-gray-400 text-center pr-8">Quantity</th>
                <th className="uppercase font-light text-xs text-gray-400 text-center pr-8">Price</th>
                <th className="uppercase font-light text-xs text-gray-400 text-center pr-8">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct) => (
                <tr key={product.code}>
                  <td className="flex items-center pt-8 space-x-4">
                    <img className="rounded-md border border-gray-300" src={product.thumb} />
                    <div className="flex flex-col">
                      <span className="text-[#734ffc]">{product.name}</span>
                      <span className="text-gray-400 text-xs">Product code {product.code}</span>
                    </div>
                  </td>
                  <td className="text-center pt-8 pr-8">
                    <div className="flex items-center justify-center">
                      <button className="text-[#734ffc] p-2 text-xl font-medium" onClick={() => { decrementProductQuantity(product.code) }}>-</button>
                      <div className="flex border border-gray-200 w-10 h-10 text-center justify-center items-center rounded-md">{productQuantity[product.code] || 0}</div>
                      <button className="text-[#734ffc] p-2 text-xl font-medium" onClick={() => { incrementProductQuantity(product.code) }}>+</button>
                    </div>
                  </td>
                  <td className="text-center pt-8 pr-8">{product.price} €</td>
                  <td className="text-center pt-8 pr-8">{
                    productQuantity[product.code] === undefined
                      ? 0
                      : productQuantity[product.code] * product.price
                  } €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right panel */}
        <div className="h-full w-[30%] bg-[#d9d9d9] flex flex-col justify-between font-light">
          <div className="w-full flex flex-col items-center">
            <p className="mt-8 pb-4 text-xl font-medium border-b-[2px] border-[#bbbbc0] w-[80%]">Products</p>
            <div className="flex w-[80%] py-8 justify-between border-b-[2px] border-[#bbbbc0]">
              <span>{totalCount} Items</span>
              <span>{totalPrice} €</span>
            </div>
            <div className="flex flex-col w-[80%] py-5 border-b-[2px] border-[#bbbbc0] space-y-4">
              <span className="uppercase font-light text-sm text-gray-500">Discounts</span>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span>x3 T-Shirt offer</span>
                  <span>- 0 €</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span>2x1 Cup offer</span>
                  <span>- 0 €</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex w-[80%] mb-2 py-4 justify-between border-t-[2px] border-[#bbbbc0] items-center">
              <span>Total</span>
              <span className="text-xl">{totalPrice} €</span>
            </div>
            <button className="bg-[#734ffc] w-[80%] mb-10 p-3 rounded-md shadow text-gray-200 font-medium">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
