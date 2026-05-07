import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Partnership from "@layouts/Partnership";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";

const PartnershipPage = async () => {
  const indexPage = await getListPage("content/partners/_index.md");
  const { frontmatter } = indexPage;
  const { title, meta_title, description, image, noindex, canonical } =
    frontmatter;

  const partners = getSinglePage("content/partners");
  const sortedPartners = partners.sort((a, b) => {
    const aw = a.frontmatter.weight ?? 9999;
    const bw = b.frontmatter.weight ?? 9999;
    if (aw !== bw) return aw - bw;
    return (a.frontmatter.title || "").localeCompare(
      b.frontmatter.title || ""
    );
  });

  return (
    <GSAPWrapper>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />
      <Partnership hero={frontmatter} partners={sortedPartners} />
      <Cta />
    </GSAPWrapper>
  );
};

export default PartnershipPage;
