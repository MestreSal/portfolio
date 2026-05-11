import "./App.css";
import { Route, Routes } from "react-router";
import Feed from "./layouts/Feed";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Project from "./pages/Project";
import Groups from "./pages/Groups";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Feed />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/categories/:categoryId" element={<Details />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:groupId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
