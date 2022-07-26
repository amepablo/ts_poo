import axios  from "axios";

import { Product } from './models/product.model';

(async () => {

  async function getProducts(): Promise<Product[]> {
    const { data }= await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products/');
    // const data = rta.data as Product[]; // Forzado
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));

})();
