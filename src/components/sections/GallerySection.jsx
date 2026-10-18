import { asset } from "./sectionData";

export default function GallerySection({ activeGallery, galleryRef, onSelectSlide }) {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">A PEEK INSIDE</span><h2>Your space, your pace</h2><p>A little look at the moments you can make your own.</p></div>
        <div className="gallery-track" ref={galleryRef}>
          {Array.from({ length: 12 }, (_, index) => <figure className={`gallery-slide ${activeGallery === index ? "gallery-active" : ""}`} key={index}><img src={`${asset}/app-gallery/app-gallery-${index + 1}.png`} alt={`Velora app screen ${index + 1}`} /></figure>)}
        </div>
        <div className="gallery-controls" aria-label="Choose a gallery image">
          {Array.from({ length: 12 }, (_, index) => <button type="button" key={index} aria-label={`Go to gallery image ${index + 1}`} aria-pressed={activeGallery === index} className={activeGallery === index ? "active" : ""} onClick={() => onSelectSlide(index)} />)}
        </div>
      </div>
    </section>
  );
}