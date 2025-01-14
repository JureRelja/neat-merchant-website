import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section className="section">
      <div className="container ">
        <div className="row items-center justify-center  mb-20 lg:mb-32">
          <div className="animate lg:col-6 lg:order-2 pb-5 lg:pb-0">
            <ImageFallback
              className="mx-auto"
              src={speciality.primary.image}
              width={575}
              height={511}
              alt="primary speciality"
              style= {{ width: 575 + "px", height: 511 + "px"}}
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>{speciality.primary.subtitle}</p>
            {markdownify(
              speciality.primary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.primary.description, "p", "mt-10")}
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6 pb-5 lg:pb-0">
            <ImageFallback
              className="mx-auto"
              src={speciality.secondary.image}
              width={636}
              height={486}
              alt="secondary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>{speciality.secondary.subtitle}</p>
            {markdownify(
              speciality.secondary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.secondary.description, "p", "mt-10")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
