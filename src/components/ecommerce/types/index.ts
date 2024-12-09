export interface ProductCardProps {
  title: string;
  department: string;
  price: {
    original: string;
    discounted: string;
  };
  colors: string[];
}

export interface FeaturedPostProps {
  image: string;
  isNew?: boolean;
  tags: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
}

export interface CategoryCardProps {
  image: string;
  label: string;
  height?: string;
}
