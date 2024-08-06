import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, ExhibitionPage, FundsPage, HomePage, ProjectsPage, BusinessPage } from "./pages";
import { Footer, Header, NavigationTop } from "./components";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <NavigationTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
