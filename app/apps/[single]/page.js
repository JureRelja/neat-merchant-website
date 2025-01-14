import config from "@config/config.json";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import AppSingle from "@layouts/AppSingle"
const { blog_folder } = config.settings;

// post single layout
const Article = async ({ params }) => {
  const { single } = params;

  const appContent = await getSinglePage(`content/${blog_folder}`);

  return (
    <GSAPWrapper>
      <AppSingle content={appContent} />
    </GSAPWrapper>
  );
};

// get post single slug
export async function generateStaticParams() {
  const allSlug = await getSinglePage(`content/${blog_folder}`);
  return allSlug.map((item) => ({
    single: item.slug,
  }));
}

export default Article;
