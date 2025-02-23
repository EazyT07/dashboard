import React, { useEffect, useState } from "react";
import { OData } from "@odata/client";
import CategoryCard from "./CategoryCard";

export default function CategoryCollection() {
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
        console.log(result.value);
      } catch (error) {
        console.error("Error fetching OData:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOData();
  }, []);

  function convertImage(byteArray) {
    let trimmedBytes = byteArray.slice(104);
    let imgSrc = `data:image/svg;base64,${trimmedBytes}`;
    return imgSrc;
  }

  return (
    console.log(data),
    (
      <div className="container-cards">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.map((category) => (
              <CategoryCard
                key={category.CategoryID}
                title={category.CategoryName}
                image={convertImage(category.Picture)}
                description={category.Description}
              />
            ))}
          </>
        )}
      </div>
    )
  );
}
