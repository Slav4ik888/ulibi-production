import { ThemeProvider } from "app/providers/theme";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import "shared/config/i18n";


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// git add . && git commit -m "end lesson 17" && git push -u origin main
