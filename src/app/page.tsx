import { IProduct, products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url('/background.jpg')] flex items-center justify-center">
      <div className="h-[75%] w-[75%] flex">
        <div className="h-full w-[70%] bg-white flex flex-col items-center space-y-8">
        </div>
        <div className="h-full w-[30%] bg-[#d9d9d9]">
        </div>
      </div>
    </div>
  )
}
