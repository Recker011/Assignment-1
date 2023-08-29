import React from "react";

function AssetShowcase() {
    // Placeholder data. In a real-world scenario, this data would be fetched from a database.
    const assets = [
        { id: 1, name: 'Asset A', description: 'Description for Asset A' },
        { id: 2, name: 'Asset B', description: 'Description for Asset B' },
        // ... other assets
    ];

    return (
        <section className="asset-showcase">
            {assets.map(asset => (
                <div key={asset.id} className="asset-item">
                    <img src={`path_to_images/${asset.name}.jpg`} alt={asset.name} />
                    <h2>{asset.name}</h2>
                    <p>{asset.description}</p>
                </div>
            ))}
            <button className="view-all-btn">View All</button>
        </section>
    );
}

export default AssetShowcase;