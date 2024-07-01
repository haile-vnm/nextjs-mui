export interface Recipe {
  id: string;
  title: string;
  desc: string;
  category: {
    id: string;
    title: string;
  };
  subcategory: {
    id: string;
    title: string;
  };
  coverImage: string;
  yield: {
    amount: number;
    title: string;
  }[];
  steps: {
    title: string;
    durationMin: number[];
  }[];
}
