import React, { memo, useEffect, useMemo, useState } from "react";
import Card from "./component/Card";
import Page from "./component/Page";

export default function Pagination() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  console.log("redender");

  useEffect(() => {
    getProduct();
  }, []);

  // useEffect(() => {
  //   alert(activePage);
  // }, [activePage]);

  const getProduct = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const result = await data.json();
    setData(result.products);
  };

  // start = (currentPage - 1) * pageSize + 1;
  // end = start + pageSize - 1;
  let pageSize = 4;
  let totalProducts = data.length;
  let totalPage = Math.ceil(totalProducts / pageSize);
  let start = (activePage - 1) * pageSize + 1;
  let end = start + pageSize;

  console.log({ totalPage, totalProducts });

  return (
    <div>
      <h1>Pagination</h1>

      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.entries(data).length === 0  && <h1>No data found.</h1>}
        <Card data={data} start={start} end={end} />
        <Page
          page={[...Array(totalPage).keys()]}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}
