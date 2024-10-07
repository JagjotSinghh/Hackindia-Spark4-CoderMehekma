import React, { useState } from 'react';
import NFTCard from '../components/NFTCard';
import './Marketplace4.css';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const nftData = [
    { id: 1, image: '/images/nft1.png', name: 'NFT One', price: '0.5', creator: 'Alice' },
    { id: 2, image: '/images/nft2.png', name: 'NFT Two', price: '1.2', creator: 'Bob' },
    { id: 3, image: '/images/nft3.png', name: 'NFT Three', price: '0.8', creator: 'Charlie' },
    { id: 4, image: '/images/nft4.png', name: 'NFT Four', price: '1.5', creator: 'David' },
    { id: 5, image: '/images/nft5.png', name: 'NFT Five', price: '2.0', creator: 'Eve' },
    { id: 6, image: '/images/nft6.png', name: 'NFT Six', price: '1.0', creator: 'Frank' },
  ];

  // Filter the NFTs based on the search term
  const filteredNFTs = nftData.filter(nft =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="marketplace">
      {/* Search Bar */}
      <div className="search-bar">
        <input
        class = "search-bar1"
          type="text"
          placeholder="Where Creativity Meets AI: Own, Trade, and Vibe."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Marketplace Title */}
      <h2>Marketplace</h2>

      {/* NFT Grid */}
      <div className="nft-grid">
        {filteredNFTs.map(nft => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
