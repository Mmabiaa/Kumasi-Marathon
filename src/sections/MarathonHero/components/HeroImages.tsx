export type HeroImagesProps = {
  containerVariant: string;
  imageWrapperVariant: string;
  imageSrc: string;
  imageAlt: string;
  badgeVariant: string;
  iconSrc: string;
  iconAlt: string;
};

export const HeroImages = (props: HeroImagesProps) => {
  return (
    <div
      className={`box-border caret-transparent col-end-[span_2] min-h-[auto] min-w-[auto] outline-[3px] self-center ${props.containerVariant}`}
    >
      <div
        className={`relative aspect-[3/4] bg-emerald-900 box-border caret-transparent outline-[3px] rounded-[20px] w-full after:accent-auto after:bg-center after:bg-no-repeat after:bg-contain after:box-border after:caret-transparent after:text-emerald-900 after:block after:absolute after:outline-[3px] after:pointer-events-auto after:border-separate ${props.imageWrapperVariant}`}
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="absolute inset-0 box-border caret-transparent h-full max-w-full object-cover outline-[3px] align-baseline w-full border-emerald-900 rounded-[20px] border-2 border-solid"
        />
        <div
          className={`absolute aspect-square box-border caret-transparent outline-[3px] z-10 ${props.badgeVariant}`}
        >
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            className="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
          />
        </div>
      </div>
    </div>
  );
};