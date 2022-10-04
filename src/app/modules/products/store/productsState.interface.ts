import { ProductInterface } from "src/app/interfaces/product.interface";

export interface ProductsStateinterface {
  isLoading: boolean;
  products: ProductInterface[]
  error: string | null;
}
