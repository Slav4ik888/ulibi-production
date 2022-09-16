import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { ThemeProvider } from "./theme/provider";


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// git add . && git commit -m "end lesson 8" && git push -u origin main
