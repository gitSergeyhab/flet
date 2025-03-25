import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import PostPage from "./pages/PostPage/PostPage";
import AlternativePage from "./pages/AlternativePage/AlternativePage";
import FirstVersionPage from "./pages/FirstVersionPage/FirstVersionPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:userId/posts" element={<UserPostsPage />} />
        <Route path="/:userId/posts/:postId" element={<PostPage />} />
        <Route path="/var1" element={<FirstVersionPage />} />
        <Route path="/var2" element={<AlternativePage />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
