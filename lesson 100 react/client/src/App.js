import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes/Router";
import Layout from "./layout/main/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SnackbarProvider } from "./providers/SnackbarProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
