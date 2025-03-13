import React from "react";
import Header from "./header";
import ProductList from "./product-list";
import ProductDetail from "./product-detail";
import { IProduct } from "@/actions/products";

export default function StorePage({ products }: { products: IProduct[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-950 px-8 py-8">
      <div className="bg-blue-100 mx-auto rounded-lg min-h-screen">
        <Header />
        <main className="grid grid-cols-12 bg-gray-50 min-h-screen">
          <aside className="col-span-full md:col-span-4 pt-3">
            <ProductList products={products} />
          </aside>
          <div className="col-span-full md:col-span-8 bg-gray-100">
            <ProductDetail />
          </div>
        </main>
      </div>
    </div>
  );
}
