import React from "react";
import TopNav from "../../common/TopNav";
import Content from "./Content";
import "./search-result.css";

function SearchResult() {
  return (
    <>
      <section className="search-result">
        <div className="container">
          <TopNav />
          <Content />
        </div>
      </section>
    </>
  );
}

export default SearchResult;
