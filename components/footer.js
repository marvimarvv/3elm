import FacebookIcon from "./facebookIcon";
import InfiniteLoopSlider from "./infiniteLoopSlider";
import InstagramIcon from "./instagramIcon";
import LinkedinIcon from "./linkedinIcon";
import TiktokIcon from "./tiktokIcon";
import TwitterIcon from "./twitterIcon";
import YoutubeIcon from "./youtubeIcon";

export default function Footer() {
  return (
    <>
      <footer className="rounded-t-3xl bg-orange p-10 md:p-20">
        <div className="flex flex-wrap gap-y-10 gap-x-20 md:gap-y-20">
          <blockquote className="flex basis-full flex-col font-cohead text-fluid-m font-bold">
            “To speak a language is to take on a world, a culture.”
            <span className="font-normal">Frantz Fanon</span>
          </blockquote>
          <div className="self-end ltr:mr-auto rtl:ml-auto">
            <a href="mailto:info@3elm.com">info@3elm.com</a>
            <p className="align-self-end mt-2 font-light opacity-80">
              &#169; 3elm GmbH, 2023.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-cohead text-fluid-m">Our Studio.</h3>
            <address className="font-light not-italic opacity-80">
              <p>Curschmannstraße 16</p>
              <p>20251 Hamburg</p>
              <p>Germany</p>
            </address>
          </div>
          <div className="">
            <h3 className="mb-4 font-cohead text-fluid-m">Find us.</h3>
            <div className="grid grid-cols-3 gap-6 md:gap-3">
              <FacebookIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              <TiktokIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              <YoutubeIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              <InstagramIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              <LinkedinIcon className={"md:h-3/5 md:w-auto"} fill="white" />
              <TwitterIcon className={"md:h-3/5 md:w-auto"} fill="white" />
            </div>
          </div>
        </div>
      </footer>
      <InfiniteLoopSlider />
    </>
  );
}
