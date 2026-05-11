export interface Project {
  id: number;
  name: string;
  img: string;
  group: Group;
  category: Category;
  description: string;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  img: string;
  icon: string;
  description: string;
}

export interface Group {
  id: number;
  name: string;
  img: string;
  icon: string;
  description: string;
}
