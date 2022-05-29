import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import BookListPage from "./pages/BookListPage/BookListPage";
import BookPage from "./pages/BookPage/BookPage";
import Page404 from "./pages/Page404/Page404";
import Header from "./layout/Header";
import theme from "./utils/Theme";
import AuthorListPage from "./pages/AuthorListPage/AuthorListPage";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/book" element={<BookListPage />} />
          <Route path="/book/:bookId" element={<BookPage />} />
          <Route path="/author" element={<AuthorListPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
