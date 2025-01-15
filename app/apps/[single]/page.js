import GSAPWrapper from "@layouts/components/GSAPWrapper";
import {  getAppsPage } from "@lib/contentParser";
import AppSingle from "@layouts/AppSingle"
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/partials/SeoMeta";

// post single layout
const Article = async ({ params }) => {
  const { single } = params;

  const appContent = await getAppsPage(`${single}`);

  const { frontmatter } = appContent;

  const { title } = frontmatter;
  
  return (
    <GSAPWrapper>
      <SeoMeta title={title} />
      <AppSingle content={frontmatter} />
      <Cta />
    </GSAPWrapper>
  );
};


export default Article;
