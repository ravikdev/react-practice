import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Button1 />} />
          <Route path="contact" element={<Button2 />} />
          <Route path="*" element={<Button3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);