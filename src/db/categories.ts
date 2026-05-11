import categoryPlaceholder from "../assets/icons/category-placeholder.svg";
import pencilLine from "../assets/icons/pencil-line.svg";
import shape2Line from "../assets/icons/shape-2-line.svg";
import layoutLine from "../assets/icons/layout-line.svg";
import settings3Line from "../assets/icons/settings-3-line.svg";
import type { Category } from "../types";

const categories: Category[] = [
  {
    id: 1,
    name: "Figma",
    img: categoryPlaceholder,
    icon: pencilLine,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  },
  {
    id: 2,
    name: "React",
    img: categoryPlaceholder,
    icon: shape2Line,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  },
  {
    id: 3,
    name: "HTML + CSS",
    img: categoryPlaceholder,
    icon: layoutLine,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  },
  {
    id: 4,
    name: "C#",
    img: categoryPlaceholder,
    icon: settings3Line,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  },
];

export default categories;
