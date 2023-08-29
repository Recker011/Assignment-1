import React from "react";

function SearchFilterSection() {
    return (
        <section className="search-filter">
            <input type="text" placeholder="Search assets..." />
            <select name="filter">
                <option value="type">Type</option>
                <option value="popularity">Popularity</option>
                {/* ... other filter options */}
            </select>
            <button className="search-btn">Search</button>
        </section>
    );
}

export default SearchFilterSection;