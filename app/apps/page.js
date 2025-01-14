import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import {  getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import config from "@config/config.json";
const { blog_folder } = config.settings;

const Home = async ({ params }) => {
    const { regular } = params;
    const pageData = await getSinglePage("apps/" + regular);
    const { title, meta_title, description, image, noindex, canonical, layout } =
    pageData.frontmatter;
    const { content } = pageData;

  return (
    <GSAPWrapper>
      <SeoMeta title="Shopify Apps page" />
    </GSAPWrapper>
  );
};

export default Home;
