import { getProducts } from "@/actions/products";
import StorePage from "@/components/store-page";

export default async function Home() {
  const products = await getProducts() || [];

  return (
    <div className="">
      {products && products.length > 0 ? (
        <StorePage products={products} />

      ) : (
        <div className="">
          <h2>No Products...</h2>
        </div>
      )}
    </div>
  );
}
