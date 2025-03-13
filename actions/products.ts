'use server';

const API = 'https://inventory-app-ten-gilt.vercel.app/api/v1/products';

export interface IProduct {
  id: string;
  imageUrl: string;
  stock: number;
  name: string;
  price: number;
}

export async function getProducts() {
  try {
    const res = await fetch(API);
    const result = await res.json();
    const products = result.data.map((item: any) => {
      return {
        id: item.id,
        imageUrl: item.productThumbnail,
        stock: item.stockQty,
        name: item.name,
        price: item.productPrice,
      };
    });
    return products as IProduct[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
