export type ProductColorItem = {
  colour_name: string;
  hex_value: string;
};

export interface ProductInterface {
  id: number;
  raiting: number;
  image_link: string;
  name: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  product_type: string;
  product_colors: Array<ProductColorItem>;
  tag_list: Array<string>;
}

