export interface ProductReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: ProductReview[];
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface APIMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: null | number;
  nextPage: null | number;
  pageCount: number;
  totalCount: number;
}

export interface ProductFetch {
  data: Product;
  meta: APIMeta;
}

export interface ProductsFetch {
  data: Product[];
  meta: APIMeta;
}

export type HTTPMethods = "put" | "patch" | "post" | "get" | "Delete";

export interface RequestError {
  errors: [
    {
      message: string;
    }
  ];
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type DeviceVariant = "mobile" | "desktop";
