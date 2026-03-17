
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
}

export interface PricePlan {
  id: string;
  name: string;
  price: string;
  installment?: string;
  period: string;
  features: string[];
  highlight?: boolean;
}
