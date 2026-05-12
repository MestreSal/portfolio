import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/*export const add = async () => {
  await addDoc(collection(db, "categories"), {
    id: 1,
    name: "Figma",
    img: "",
    icon: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
  });
  await addDoc(collection(db, "groups"), {
    id: 1,
    name: "Featured",
    img: "",
    icon: "",
    description:
      "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
  });
  await addDoc(collection(db, "projects"), {
    id: 1,
    name: "E-commerce Platform",
    img: "",
    group: {
      id: 1,
      name: "Featured",
      img: "",
      icon: "",
      description:
        "Projetos e conteúdos em destaque com maior prioridade visual e distribuição mais ampla na interface.",
    },
    category: {
      id: 2,
      name: "React",
      img: "",
      icon: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.",
    },
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    link: "/projects/1",
  });
};*/
