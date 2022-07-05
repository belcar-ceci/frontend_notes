import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";//
import LoginForm from "./components/LoginForm/LoginForm";//
import HomePage from "./pages/HomePage/HomePage";
import NoteSimplePage from "./pages/NotesPage/NoteSimplePage"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/:id" element={<NoteSimplePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
