import { IProduct } from "@/actions/products";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: IProduct }) {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-3 hover:bg-blue-100 rounded-md px-4 py-2 transition-all hover:-translate-y-1 duration-500 shadow-md"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="w-16 h-16 rounded-lg"
      />
      <div className="">
        <h2 className="text-blue-700">
          {product.name}
        </h2>
        <div className="flex items-center justify-between">
          <p>
            <span>Price :</span> {product.price}
          </p>
          <p>Stock : {product.stock} items</p>
        </div>
      </div>
    </Link>
  );
}
