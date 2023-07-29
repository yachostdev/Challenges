import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-12 md:mb-0">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Imagen del articulo principal" />
      </picture>
      <div className="sm:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">The Bright Future of Web 3.0?</h2>
        </div>
        <div className="flex-1 sm:py-6">
          <p className="text-[13px] mb-10 sm:text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] text-OffWhite hover:bg-VeryDarkBlue uppercase">Read more</button>
        </div>
      </div>
    </section>
  );
};
