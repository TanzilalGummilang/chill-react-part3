import Button from "../../Elements/Button";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";

interface BannerWithActionProps {
  title: string;
  description: string;
  backgroundImage: string;
};

export const BannerWithAction = ({
  title,
  description,
  backgroundImage,
}: BannerWithActionProps) => {
  return (
    <div
      className="relative w-full h-56 lg:h-[590px] flex justify-center items-end bg-cover bg-[50%_50%]"
      style={{ 
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="container pb-4 lg:pb-16 relative z-[2] flex flex-col gap-2 lg:gap-4 text-left w-full">
        <Heading className="lg:max-w-2xl">{title}</Heading>
        <Paragraph 
          className="line-clamp-2 lg:!line-clamp-none text-xs lg:text-lg font-medium mb-2 lg:mb-3 lg:max-w-2xl"
        >
          {description}
        </Paragraph>
        <div className="flex gap-2">
          <Button 
            variant="primary"
            boxSize="sm"
            width="fit"
            className="lg:px-5.5"
          >
            Mulai
          </Button>
          <Button 
            variant="secondary"
            boxSize="sm"
            width="fit"
            className="btn flex items-center gap-1 lg:gap-2 lg:px-5.5"
          >
            <img src="/images/information-outline.svg" alt="Information" className="w-fit h-3 lg:h-5 filter invert" />
            Selengkapnya
          </Button>
          <Button
            variant="transparent"
            boxSize="sm"
            width="fit"
            className="!px-1.5 lg:!px-3 !rounded-full"
          >
            <img src="/images/adult.svg" alt="Adult" className="h-2.5 lg:h-4 w-fit" />
          </Button>
          <Button
            variant="transparent"
            boxSize="sm"
            width="fit"
            className="!rounded-full !p-0 aspect-square ml-auto flex justify-center items-center"
          >
            <img src="/images/volume.svg" alt="Volume" className="h-3 lg:h-4 w-fit" />
          </Button>
        </div>
      </div>
    </div>
  );
};

