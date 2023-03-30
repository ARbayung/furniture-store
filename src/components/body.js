import React from 'react';
import './body.css';

const ImageGallery = () => {
  return (
    <div className="img-gallery-2">
      <h2>Teva House Series</h2>
      
      <div className="container">
        <div className="gallery">
          <figure className="gallery__item-1">
            <img
              src="https://www.decorilla.com/online-decorating/wp-content/uploads/2014/07/modern-minimalist-style-living-room-decorating-with-shaggy-rug-best-interior-design-ideas.jpg"
              alt="Gallery 2 1"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item-2">
            <img
              src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/07/Contemporary-interior-design-and-decor-Urbanology-Designs.jpg"
              alt="Gallery 2 2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item-3">
            <img
              src="https://cdn.home-designing.com/wp-content/uploads/2019/01/bathroom-ideas-modern.jpg"
              alt="Gallery 2  3"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item-4">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/backyard-decorating-ideas-black-white-palette-1649788007.jpg"
              alt="Gallery 2  4"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item-5">
            <img
              src="https://www.ikea.com/ext/ingkadam/m/2bdd3a562a97322e/original/PH173612.jpg"
              alt="Gallery 2  5"
              className="gallery__img"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};


const CategorySection = () => {
  return (
    <div className="category-section">
      <h2>Categories</h2>
      <div className="category-gallery">
        <div className="category-card">
          <h3>Living Room</h3>
          <img src="https://clairemorandesigns.co.uk/wp-content/uploads/2022/07/Untitled-design-56.png" alt="Living Room" />
        </div>
        <div className="category-card">
          <h3>Bedroom</h3>
          <img src="https://havenly.com/blog/wp-content/uploads/2020/07/contemporary-bedroom-3.jpeg" alt="Bedroom" />
        </div>
        <div className="category-card">
          <h3>Dining Room</h3>
          <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2021/10/modern-farmhouse-dining-room-ideas-.jpeg" alt="Dining Room" />
        </div>
        <div className="category-card">
          <h3>Outdoor</h3>
          <img src="https://www.bravotv.com/sites/bravo/files/2019-07/best-outdoor-furniture-promote.jpg" alt="Outdoor" />
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div style={{ backgroundImage: "url('https://cdn.home-designing.com/wp-content/uploads/2020/08/dark-decor-living-room.jpg')", backgroundSize: "100%", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <p style={{ color: "white", fontSize: "1.5rem", maxWidth: "800px", textAlign: "center", margin: "0 20px 20px 20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales eros non orci tristique, sed hendrerit lectus tincidunt. Ut id augue vel metus auctor tempor. Sed ut metus ullamcorper, malesuada dolor in, laoreet mi.</p>
      <button style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: "5px", border: "none", color: "black", fontWeight: "bold", cursor: "pointer" }}>
        View Products
      </button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <CategorySection />
      <ImageGallery/>
      <Banner/>
    </div>
  );
};

export default Body;
