export interface Project {
  id: string;
  name: string;
  img: string;
  group: Group;
  category: Category;
  description: string;
  link: string;
}

export interface Category {
  id: string;
  name: string;
  img: string;
  icon: string;
  description: string;
}

export interface Group {
  id: string;
  name: string;
  img: string;
  icon: string;
  description: string;
}
