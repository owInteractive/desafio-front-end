export default class ProductsModel {
  ProductsModel: Array<string>;
  id = 0;
  quantity = 0;

  constructor(products: Array<string>) {
    this.ProductsModel = products;
  }
}
