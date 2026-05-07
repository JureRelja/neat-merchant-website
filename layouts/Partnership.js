import { markdownify } from "@lib/utils/textConverter";
import PartnerCard from "./partials/PartnerCard";

const Partnership = ({ hero, partners }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="animate text-center">
          {hero.subtitle && <p>{hero.subtitle}</p>}
          {markdownify(hero.title, "h1", "section-title mt-4")}
          {markdownify(hero.description, "p", "mx-auto mt-6 max-w-2xl")}
        </div>

        {partners.length > 0 && (
          <div className="row mt-16 justify-center">
            {partners.map((partner) => (
              <div
                key={partner.slug}
                className="animate mt-8 md:col-6 lg:col-4"
              >
                <PartnerCard partner={partner.frontmatter} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Partnership;
