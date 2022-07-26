import { ProductMemoryService } from './service/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'product 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: []
});

const products = productService.getAll();
const productsId = products[0].id;

productService.updateProduct(productsId, {
  title: 'cambiar nombre'
});

const rta = productService.findOne(productsId);
console.log(rta);
