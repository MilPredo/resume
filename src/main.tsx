import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Font, PDFViewer } from "@react-pdf/renderer";

Font.register({
  family: 'Hedvig Letters Serif',
  src: 'https://fonts.gstatic.com/s/hedviglettersserif/v2/OD5puN2I2mekHmyoU1Kj2AXOd5_7v7gIDlX8quj7viQ_N1HixEApeL3d.woff2',
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <PDFViewer width={window.innerWidth} height={window.innerHeight}>
        <App />
      </PDFViewer>
  </React.StrictMode>
);
