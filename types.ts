
export interface ServicePackage {
  id: string;
  title: string;
  price: string;
  features: string[];
  description: string;
  color: string;
  isPopular?: boolean;
}

export interface SingleService {
  name: string;
  priceRange: string;
}
