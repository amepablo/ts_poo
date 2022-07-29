import { ProductHttpService } from './service/product-http.service';

(async() =>{

  const productService = new ProductHttpService();

  try {
    // get
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    // update
    console.log('---'.repeat(10));
    console.log('update');
    const produtId = products[0].id;
    await productService.update(produtId, {
      price: 10000,
      title: 'new title',
      description: 'new description'
    });

    // find
    console.log('---'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(produtId);
    console.log(product);

  } catch (error) {
    console.error(error);
  }



})()
