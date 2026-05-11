import categoryPlaceholder from "../assets/icons/category-placeholder.svg";
import pencilLine from "../assets/icons/pencil-line.svg";
import shape2Line from "../assets/icons/shape-2-line.svg";
import layoutLine from "../assets/icons/layout-line.svg";
import settings3Line from "../assets/icons/settings-3-line.svg";
import type { Group } from "../types";

const groups: Group[] = [
  {
    id: 1,
    name: "Featured",
    img: categoryPlaceholder,
    icon: pencilLine,
    description:
      "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
  },
  {
    id: 2,
    name: "Recent",
    img: categoryPlaceholder,
    icon: shape2Line,
    description:
      "Itens adicionados ou atualizados recentemente para manter a página com conteúdo atual.",
  },
  {
    id: 3,
    name: "Pinned",
    img: categoryPlaceholder,
    icon: layoutLine,
    description:
      "Grupos fixados para acesso rápido, com presença constante na navegação principal.",
  },
  {
    id: 4,
    name: "Archived",
    img: categoryPlaceholder,
    icon: settings3Line,
    description:
      "Conteúdo histórico mantido apenas para referência e organização do acervo.",
  },
];

export default groups;
