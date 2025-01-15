import { markdownify } from "@lib/utils/textConverter";
import Circle from "./components/Circle";
import AppCta from "./components/AppCta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";
import Link from "next/link";
import shopifyInstallLogo from "public/images/badge-shopify-app-store-dark.png";

const AppSingle = ({ content }) => {

  return (
      <section className="section pt-0 pb-0">
        {/* App */}
        <div className="section container">
           <div className="animate flex justify-center items-center flex-col mb-10">
            {markdownify(content.headline, "h2", "")}
            {markdownify(content.subtitle, "p", "mt-10")}
            </div>

          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={content.main_image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4">
              <p>SHOPIFY APP</p>
              {markdownify(content.title, "h2", "section-title bar-left mt-4")}
              {markdownify(content.long_description, "p", "mt-10")}
              <Link href={content.link} target="_blank" className="hover:opacity-80 mt-10 flex gap-2 justify-end items-center">
                <ImageFallback
                    width={320}
                    height={80}
                    src={shopifyInstallLogo}
                    alt={"Shopify Badge logo"}
                    priority
                    style={{
                      height: 80 + "px",
                      width: 320 + "px",
                    }}
                  />
              </Link>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="container-xl relative">
          <div className="bg-theme absolute left-0 top-0 w-full">
            <Circle
              className="left-[7%] top-[21%]"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="left-[30%] top-[10%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="bottom-[35%] left-[4%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="bottom-[11%] left-[10%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="bottom-[48%] left-[44%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="bottom-[22%] left-[35%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="right-[32%] top-[2%]"
              width={47}
              height={47}
              fill={false}
            />
          </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>{content.video_subtitle}</p>
                {markdownify(content.video_title, "h2", "mt-4 section-title bar-left")}
                {markdownify(content.video_description, "p", "mt-10")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <VideoPopup
                  id={content.youtube_video_id}
                  thumbnail={content.youtube_video_tumbnail}
                  width={540}
                  height={585}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p>{content.features.subtitle}</p>
            {markdownify(content.features.title, "h2", "section-title mt-4")}
            {markdownify(content.features.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {content.features.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        

       
        <AppCta  title={content.cta_title} content={content.cta_content} enable={content.enable} link={content.link} />
      </section>
  );
};

export default AppSingle;
