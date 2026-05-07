import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";

const PartnerCard = ({ partner }) => {
  const { title, description, logo, cta_label, cta_url } = partner;

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,.05)]">
      {logo && (
        <div className="mb-6 flex h-16 items-center">
          <ImageFallback
            src={logo}
            alt={title}
            width={160}
            height={64}
            className="object-contain"
            style={{ height: "64px", width: "auto", maxWidth: "100%" }}
          />
        </div>
      )}
      <h3 className="h4">{title}</h3>
      <p className="mt-3">{description}</p>
      {cta_url && cta_label && (
        <div className="mt-auto pt-6">
          <Link
            href={cta_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            {cta_label}
          </Link>
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
