export interface Recipe {
  title: string;
  desc: string;
  category: { title: string; }
  subcategory: { title: string; }
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
