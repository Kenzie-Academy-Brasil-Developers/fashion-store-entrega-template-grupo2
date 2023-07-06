export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export interface IAdminProviderProps {
    children: React.ReactNode;
  }
  
  export interface IAdminContext {
    productList: IProduct[];
    addProduct: (formData: IProduct) => Promise<void>
    deleteProduct: (productId: number) => Promise<void>
    editProduct: (formData: IProduct) => Promise<void>
  }