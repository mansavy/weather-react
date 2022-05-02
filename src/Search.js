import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="search">
      <form id="city-search">
        <input
          type="search"
          id="city-input"
          placeholder="Destination Unknown (enter city)"
          size="35"
        />
        <input type="submit" value="Compute" className="button" />
      </form>
    </div>
  );
}
