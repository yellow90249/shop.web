export interface Category {
  ID: number;
  Name: string;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
}
export interface ProductType {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  ImageURL: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: Category;
}

export interface CartItem {
  ID: number;
  UserID: number;
  ProductID: number;
  Quantity: number;
  UnitPrice: number;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface User {
  ID: number;
  Email: string;
  Name: string;
  Password: string;
  AvatarURL: string;
  Role: string;
  CreatedAt: string;
  UpdatedAt: string;
  CartItems: CartItem[];
}
