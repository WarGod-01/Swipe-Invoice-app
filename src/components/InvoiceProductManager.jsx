import React, { useState } from "react";
import Invoicefrom from "./Invoicefrom";
import Product from "./Product";

const InvoiceProductManager = () => {
  const [formData, setFormData] = useState([]);

  return (
    <div>
      <Invoicefrom setFormData={setFormData} />
      <Product formData={formData} />

    </div>
  );
};

export default InvoiceProductManager;
