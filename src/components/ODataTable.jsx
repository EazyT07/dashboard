import React, { useEffect, useState } from "react";
import { OData } from "@odata/client";
import CategoryCard from "./CategoryCard";

function ODataTable() {
  //let category = [];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOData = async () => {
      try {
        const response = await fetch(
          "https://services.odata.org/V4/Northwind/Northwind.svc/Categories"
        );
        const result = await response.json();
        setData(result.value);
      } catch (error) {
        console.error("Error fetching OData:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOData();
  }, []);

  return (
    console.log("Loading:", loading),
    console.log(data),
    (
      <>
        <div>
          <h2>OData Categories</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.map((category) => (
                <li key={category.CategoryID}>{category.CategoryName}</li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  );
}

export default ODataTable;
