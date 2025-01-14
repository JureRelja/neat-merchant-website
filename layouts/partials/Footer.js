import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import ImageFallback from "@components/ImageFallback";
import shopifyPartners from "public/images/Shopify-partners-logo-green.png";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
            <ImageFallback
            className="mt-4"
              width={300}
              height={50}
              src={shopifyPartners}
              alt={"Shopify Partners Logo"}
              priority
              style={{
                height: 50 + "px",
                width: 300 + "px",
              }}
            />
          </div>
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Shopify Apps</h3>
            <ul className="mt-5 leading-10">
              {menu.footerApps.map((app) => (
                <li key={app.name}>
                  <Link
                    href={app.url}
                    className=" hover:text-primary hover:underline flex justify-start gap-2 items-center"
                  >
                    <ImageFallback
                      width={25}
                      height={25}
                      src={app.image}
                      alt={app.imageAlt}
                      priority
                      style={{
                        height: 25 + "px",
                        width: 25 + "px",
                      }}
                    />
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
              
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Contact</h3>
            <ul className="mt-5 leading-10">
              {email && <Link className="hover:text-primary hover:underline" href={`mailto:${email}`}>{email}</Link>}
              {/* <li>{markdownify(location)}</li> */}
              {phone && (
                <li>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className=" py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
