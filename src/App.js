import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";//
import LoginPage from "./pages/LoginPage/LoginPage";//
import HomePage from "./pages/HomePage/HomePage";
import NoteSimplePage from "./pages/NotesPage/NoteSimplePage"
import CreateNotePage from "./pages/CreateNotePage/CreateNotePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/*EntriesPage */}
          <Route path="/notes/:id" element={<NoteSimplePage />} />  {/*EntryPage */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create/notes" element={<CreateNotePage />} /> {/*CreateEntryPage */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
