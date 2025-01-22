import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import { markdownify } from "@lib/utils/textConverter";
import {getAuthorPage} from "@lib/contentParser";
import MDXContent from "app/helper/MDXContent";
import Image from "next/image";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import DisqussEmbed from "./partials/DisqussEmbed";
import Post from "./partials/Post";
import SeoMeta from "./partials/SeoMeta";

const PostSingle = async ({ frontmatter, content, recentPosts }) => {
  let { description, title, date, image, author, youtubeVideoID } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const { disqus } = config;

  // Author data
  const authorContent = await getAuthorPage(`${author}`);
  const authorName = authorContent.frontmatter.name
  const authorDescription = authorContent.frontmatter.description
  const avatar = authorContent.frontmatter.avatar

  return (
    <>
      <SeoMeta title={title} description={description} image={image} />
      <section className="section pt-0">
        <div className="container flex flex-col max-w-[900px]">
          <article>
            <div className="row justify-center">
              {/* <div className="lg:col-10">
                {image && (
                  <Image
                    src={image}
                    height="700"
                    width="1120"
                    alt={title}
                    priority={true}
                    className="fade w-full rounded-lg "
                  />
                )}
              </div> */}
           { youtubeVideoID &&  (
            <div className="lg:col-10">
                <iframe src={`https://www.youtube.com/embed/${youtubeVideoID}`} 
                    title={title} frameborder="0" allowfullscreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    >
              </iframe>
            </div>
           )}
                <div className="lg:col-10">
                  {markdownify(title, "h1", "h1 mt-4")}
                  <div className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
                      <ImageFallback
                        src={avatar}
                        width={50}
                        height={50}
                        alt="author"
                      />
                    </div>
                    <div className="pl-5">
                      <p className="font-medium text-dark">{authorName}</p>
                      <p>
                        {dateFormat(date)} - {readingTime(content)}
                      </p>
                    </div>
                  </div>
                  <div className="content mb-16 mt-10 text-left">
                    <MDXContent content={content} />
                  </div>
                </div>
            </div>
          </article>
         
        <div className="section lg:row justify-center  ">
          <div className="lg:col-10 flex flex-col border-2  shadow-[0_0_0_2px] shadow-[#FFF7F2] rounded-lg p-4">
            <p className="font-medium text-lg text-dark">About the author</p>
            <div className="flex flex-col md:flex-row items-center mt-4">
              <div className="overflow-hidden rounded-full border-2 border-white ">
                <ImageFallback
                  src={avatar}
                  width={150}
                  height={150}
                  alt="author"
                />
              </div>
              <div className="flex flex-col mt-2 pl-6 gap-2">
                <p className="font-medium text-dark">{authorName}</p>
                <p className="font-light text-dark">{authorDescription}</p>
              </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title text-center">Recent Articles</h2>
            <div className="row justify-center">
              {recentPosts.slice(0, 2).map((post, index) => (
                <div key={"post-" + index} className="animate mt-16 lg:col-5">
                  <Post post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default PostSingle;
