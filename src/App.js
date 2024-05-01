import React, { useState } from "react";
import "./App.css";

import DisplayProducts from "./components/DisplayProducts.tsx";
import AddProducts from "./components/AddProducts.tsx";

const productData = [
  {
    name: "iphone",
    description: "this  is the best product",
    price: "Rs 2000.00",
    quantity: "1",
  },
  {
    name: "Oppo",
    description: "this  is the best product",
    price: "Rs 4000.00",
    quantity: "1",
  },
];

function App() {
  const [showform, setShowform] = useState(false);

  return (
    <main>
      <DisplayProducts
        data={productData}
        showform={showform}
        setShowform={setShowform}
      />
      {showform && <AddProducts setShowform={setShowform} />}
    </main>
  );
}

export default App;
