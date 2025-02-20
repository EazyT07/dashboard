import React, { useEffect, useState } from "react";
import { OData } from "@odata/client";

function ODataTable() {
  const fetchOData = async () => {
    try {
      const response = await fetch(
        "https://services.odata.org/V4/Northwind/Northwind.svc/Categories"
      );
      const data = await response.json();
      console.log(data.value); // OData results are usually in the "value" field
    } catch (error) {
      console.error("Error fetching OData:", error);
    }
  };

  fetchOData();

  return (
    <>
      <div class="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button class="btn btn-primary">Primary button</button>
      </div>
    </>
  );
}

export default ODataTable;
