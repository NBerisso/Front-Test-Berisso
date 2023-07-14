import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
