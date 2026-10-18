import { asset, showcaseItems } from "./sectionData";

export default function ShowcaseSection() {
  return (
    <section className="section showcase-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">YOUR EVERYDAY, A LITTLE LIGHTER</span><h2>More ease in the little things</h2><p>Thoughtful tools that make your day feel more like your own.</p></div>
        <div className="showcase-grid">
          {showcaseItems.map((item, index) => <article className="showcase-card" key={item.title}><img src={`${asset}/${item.image}`} alt="" className={`showcase-image image-${index + 1}`} /><div className="showcase-copy"><span className="card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}