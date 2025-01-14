import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import { getListPage, getSinglePage } from "@lib/contentParser";
import Post from "@layouts/partials/Post";
import { sortByDate } from "@lib/utils/sortFunctions";
import config from "@config/config.json";
const { blog_folder } = config.settings;

const Home = async ({ params}) => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;

     const { single } = params;
      const posts = await getSinglePage(`content/${blog_folder}`);
      const post = posts.filter((p) => p.slug == single);
      const recentPosts = sortByDate(posts).filter((post) => post.slug !== single);

  return (
    <GSAPWrapper>
      <SeoMeta title="Home" />
      <HomeBanner banner={banner} brands={brands} />
      <Features features={features} />
      {/* <ShortIntro intro={intro} /> */}
      <SpecialFeatures speciality={speciality} />
      {/* <Testimonial testimonial={testimonial} /> */}
      <div className="section mt-16">
            <h2 className="section-title text-center">Recent Articles</h2>
            <div className="row justify-center">
              {recentPosts.slice(0, 2).map((post, index) => (
                <div key={"post-" + index} className="animate mt-16 lg:col-5">
                  <Post post={post} />
                </div>
              ))}
            </div>
          </div>
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;
