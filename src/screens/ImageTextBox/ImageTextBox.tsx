import { useWindowWidth } from "../../breakpoints";

const contentData = {
  mainHeadline:
    "Zwölf Boxkämpfer jagen Viktor über den Deich.",
  subHeadline: "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.",
  paragraphTablet:
    "Manchmal werden auch Sätze verwendet, die alle Buchstaben des Alphabets enthalten – man nennt diese Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut.",
  paragraphDesktop:
    "Manchmal werden auch Sätze verwendet, die alle Buchstaben des Alphabets enthalten – man nennt diese Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige Satzteile eingebaut.",
  buttonText: "Button",
  images: {
    mobile:
      "https://c.animaapp.com/5ng0CHTD/img/-vancado-template-bildplatzhalter-quer-5-4-1@2x.png",
    tablet:
      "https://c.animaapp.com/5ng0CHTD/img/-vancado-template-bildplatzhalter-quer-2-1.png",
    desktop:
      "https://c.animaapp.com/5ng0CHTD/img/-vancado-template-bildplatzhalter-quer-2-1-1.png",
  },
  imageAlt: "Vancado template",
};

export const ImageTextBox = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <article
      className={`flex flex-col items-center gap-6 relative ${screenWidth < 888 ? "min-w-[360px]" : (screenWidth >= 888 && screenWidth < 1024) ? "min-w-[888px]" : screenWidth >= 1024 ? "min-w-[1024px]" : ""}`}
      data-model-id="9126:82811"
    >
      <section
        className={`w-full flex self-stretch relative ${screenWidth < 1024 ? "flex-col" : ""} ${screenWidth < 1024 ? "items-start" : screenWidth >= 1024 ? "items-start" : ""} ${screenWidth < 888 ? "flex-[0_0_auto]" : ""} ${screenWidth >= 888 ? "gap-2" : ""} ${(screenWidth >= 888 && screenWidth < 1024) ? "px-[100px] py-5" : screenWidth >= 1024 ? "p-20" : ""} ${(screenWidth >= 888 && screenWidth < 1024) ? "h-[512px]" : screenWidth >= 1024 ? "h-[960px]" : ""} ${(screenWidth >= 888 && screenWidth < 1024) ? "justify-center" : screenWidth >= 1024 ? "justify-start" : ""}`}
      >
        <figure
          className={`flex flex-col items-start gap-2 ${screenWidth < 1024 ? "w-full" : screenWidth >= 1024 ? "w-full" : ""} ${screenWidth >= 888 ? "left-0" : ""} ${screenWidth < 888 ? "self-stretch" : ""} ${(screenWidth >= 888 && screenWidth < 1024) ? "top-[calc(50.00%_-_256px)]" : screenWidth >= 1024 ? "top-0" : ""} ${screenWidth < 888 ? "flex-[0_0_auto]" : ""} ${screenWidth < 888 ? "relative" : screenWidth >= 888 ? "absolute" : ""}`}
        >
          <img
            className={`w-full self-stretch relative ${screenWidth < 888 ? "aspect-[1.25]" : screenWidth >= 888 ? "aspect-[2]" : ""}`}
            alt={contentData.imageAlt}
            src={
              screenWidth < 888
                ? contentData.images.mobile
                : screenWidth >= 888 && screenWidth < 1024
                  ? contentData.images.tablet
                  : screenWidth >= 1024
                    ? contentData.images.desktop
                    : undefined
            }
          />
        </figure>

        <div
          className={`flex flex-col items-start gap-2 bg-[#e6e6e6] relative ${screenWidth < 888 ? "w-full" : (screenWidth >= 888 && screenWidth < 1024) ? "w-[624px]" : screenWidth >= 1024 ? "w-[732px]" : ""} ${screenWidth < 888 ? "self-stretch" : ""} ${screenWidth < 1024 ? "flex-[0_0_auto]" : ""} ${screenWidth < 888 ? "px-3 py-4" : (screenWidth >= 888 && screenWidth < 1024) ? "px-4 py-8" : screenWidth >= 1024 ? "px-6 py-16" : ""} ${screenWidth >= 888 ? "justify-center" : ""} ${screenWidth >= 1024 ? "ml-[80px]" : ""}`}
        >
          <div
            className={`flex flex-col items-start gap-6 flex-[0_0_auto] relative ${screenWidth < 888 ? "w-full" : screenWidth >= 888 ? "w-full" : ""} ${screenWidth >= 888 ? "self-stretch" : ""}`}
          >
            <header
              className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${screenWidth >= 888 ? "gap-4" : screenWidth < 888 ? "gap-6" : ""}`}
            >
              {screenWidth >= 888 && (
                <>
                  <h1
                    className={`self-stretch mt-[-1.00px] text-black relative font-[number:var(--project-headlines-small-h1-XL-font-weight)] tracking-[var(--project-headlines-small-h1-XL-letter-spacing)] [font-style:var(--project-headlines-small-h1-XL-font-style)]`}
                    style={
                      screenWidth >= 1024
                        ? {
                            fontSize: `clamp(36px, ${36 + ((screenWidth - 1024) / (1920 - 1024)) * (64 - 36)}px, 64px)`,
                            lineHeight: `clamp(48px, ${48 + ((screenWidth - 1024) / (1920 - 1024)) * (80 - 48)}px, 80px)`,
                          }
                        : {
                            fontSize: 'var(--project-headlines-small-h1-XL-font-size)',
                            lineHeight: 'var(--project-headlines-small-h1-XL-line-height)',
                          }
                    }
                  >
                    {contentData.mainHeadline}
                  </h1>

                  <h2
                    className={`self-stretch text-black relative font-[number:var(--project-headlines-small-h4-s-font-weight)] tracking-[var(--project-headlines-small-h4-s-letter-spacing)] [font-style:var(--project-headlines-small-h4-s-font-style)]`}
                    style={
                      screenWidth >= 1024
                        ? {
                            fontSize: `clamp(20px, ${20 + ((screenWidth - 1024) / (1920 - 1024)) * (24 - 20)}px, 24px)`,
                            lineHeight: `clamp(24px, ${24 + ((screenWidth - 1024) / (1920 - 1024)) * (32 - 24)}px, 32px)`,
                          }
                        : {
                            fontSize: 'var(--project-headlines-small-h4-s-font-size)',
                            lineHeight: 'var(--project-headlines-small-h4-s-line-height)',
                          }
                    }
                  >
                    {contentData.subHeadline}
                  </h2>

                  <p
                    className={`self-stretch text-black relative font-[number:var(--project-paragraphs-small-p4-s-font-weight)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] [font-style:var(--project-paragraphs-small-p4-s-font-style)]`}
                    style={
                      screenWidth >= 1024
                        ? {
                            fontSize: `clamp(16px, ${16 + ((screenWidth - 1024) / (1920 - 1024)) * (18 - 16)}px, 18px)`,
                            lineHeight: `clamp(22px, ${22 + ((screenWidth - 1024) / (1920 - 1024)) * (24 - 22)}px, 24px)`,
                          }
                        : {
                            fontSize: 'var(--project-paragraphs-small-p4-s-font-size)',
                            lineHeight: 'var(--project-paragraphs-small-p4-s-line-height)',
                          }
                    }
                  >
                    {screenWidth >= 888 &&
                      screenWidth < 1024 &&
                      contentData.paragraphTablet}
                    {screenWidth >= 1024 && contentData.paragraphDesktop}
                  </p>
                </>
              )}

              {screenWidth < 888 && (
                <>
                  <div className="gap-4 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative self-stretch mt-[-1.00px] font-project-headlines-small-h1-XL font-[number:var(--project-headlines-small-h1-XL-font-weight)] text-black text-[length:var(--project-headlines-small-h1-XL-font-size)] tracking-[var(--project-headlines-small-h1-XL-letter-spacing)] leading-[var(--project-headlines-small-h1-XL-line-height)] [font-style:var(--project-headlines-small-h1-XL-font-style)]">
                      {contentData.mainHeadline}
                    </h1>

                    <h2 className="relative self-stretch font-project-headlines-small-h4-s font-[number:var(--project-headlines-small-h4-s-font-weight)] text-black text-[length:var(--project-headlines-small-h4-s-font-size)] tracking-[var(--project-headlines-small-h4-s-letter-spacing)] leading-[var(--project-headlines-small-h4-s-line-height)] [font-style:var(--project-headlines-small-h4-s-font-style)]">
                      {contentData.subHeadline}
                    </h2>

                    <p className="relative self-stretch font-project-paragraphs-small-p4-s font-[number:var(--project-paragraphs-small-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-small-p4-s-font-size)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] leading-[var(--project-paragraphs-small-p4-s-line-height)] [font-style:var(--project-paragraphs-small-p4-s-font-style)]">
                      {contentData.paragraphTablet}
                    </p>
                  </div>

                  <button className="all-[unset] box-border inline-flex h-12 items-center justify-center px-8 py-0 relative bg-[#101010]">
                    <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                      {contentData.buttonText}
                    </span>
                  </button>
                </>
              )}
            </header>

            {screenWidth >= 888 && (
              <button className="all-[unset] box-border inline-flex items-center px-8 py-0 h-12 justify-center bg-[#101010] relative">
                <span className="font-project-headlines-large-h5-XS w-fit tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-large-h5-XS-font-style)] text-[length:var(--project-headlines-large-h5-XS-font-size)] text-white font-[number:var(--project-headlines-large-h5-XS-font-weight)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap relative">
                  {contentData.buttonText}
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};
