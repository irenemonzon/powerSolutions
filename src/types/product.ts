export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  anchor: string;
  name: string;
  output: string;
  battery: string;
  setting: string;
  tagline: string;
  description: string;
  image: string;
  bg: 'page' | 'surface';
  imageOrder: 0 | 1;
  specs: ProductSpec[];
}
