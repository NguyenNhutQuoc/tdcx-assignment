// src/types/index.ts
export interface Item {
  id: number;
  name: string;
  category: string;
  price: string;
}

export interface SearchFilterProps {
  items: Item[];
  searchKeys?: (keyof Item)[];
  debounceMs?: number;
}
