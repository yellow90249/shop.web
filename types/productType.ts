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
