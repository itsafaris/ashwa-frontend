import * as React from "react";
import { Box, Flex, Icon, AspectRatio, IconButton, Stack } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { css, Global } from "@emotion/react";
import BlazeSlider, { BlazeConfig } from "blaze-slider";
import "blaze-slider/dist/blaze.css";

function useBlazeSlider(config: BlazeConfig) {
  const sliderRef = React.useRef<BlazeSlider>();
  const elRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current!, config);
    }
  }, []);

  return { elRef, sliderRef };
}

export function Gallery() {
  const thumbsContainer = React.useRef<HTMLDivElement>(null);
  const { elRef, sliderRef } = useBlazeSlider({
    all: {
      slidesToShow: 1,
      loop: true,
    },
  });

  React.useEffect(() => {
    const s = sliderRef.current!;

    addActive(s.stateIndex);

    function removeActive() {
      thumbsContainer.current?.childNodes.forEach((it) => {
        let a = it as HTMLDivElement;
        a.classList.remove("active");
      });
    }

    function addActive(idx: number) {
      const it = thumbsContainer.current?.children.item(idx);
      it!.classList.add("active");
    }

    const unsub = s.onSlide((a) => {
      removeActive();
      addActive(a);
    });

    return () => {
      unsub();
    };
  }, []);

  const images = [
    <StaticImage
      src="../../../images/carousel1.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../../images/carousel2.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../../images/carousel3.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../../images/carousel4.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../../images/carousel5.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../../images/carousel6.jpg"
      alt="Sleep & Burn Supplement"
      height={500}
      width={500}
    />,
  ];

  return (
    <Stack gridArea={"gallery"} flex={1}>
      <Global
        styles={css`
          .slider_thumbnail.active {
            border-color: var(--chakra-colors-primary-500);
            border-width: 2px;
          }
        `}
      />

      <Box className="blaze-slider" ref={elRef} position={"relative"}>
        <IconButton
          aria-label="arrow left"
          variant={"ghost"}
          icon={<Icon as={FaArrowLeft} />}
          position={"absolute"}
          top={"50%"}
          transform={"translateY(-50%)"}
          left={0}
          zIndex={1}
          onClick={() => sliderRef.current?.prev()}
        />

        <IconButton
          aria-label="arrow right"
          variant={"ghost"}
          icon={<Icon as={FaArrowRight} />}
          position={"absolute"}
          top={"50%"}
          transform={"translateY(-50%)"}
          right={0}
          zIndex={1}
          onClick={() => sliderRef.current?.next()}
        />

        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              {images.map((it, idx) => (
                <AspectRatio className="keen-slider__slide" key={idx} ratio={1} mx="auto">
                  {it}
                </AspectRatio>
              ))}
            </div>
          </div>
        </div>
      </Box>

      <Flex alignItems={"center"} gap={3} mt={2}>
        <Flex flex={1} gap={2} justifyContent={"start"} flexWrap={"wrap"} ref={thumbsContainer}>
          {images.map((it, idx) => (
            <AspectRatio
              key={idx}
              ratio={1}
              w={"60px"}
              border={"1px solid"}
              borderColor={"bg.200"}
              borderRadius={"md"}
              overflow={"hidden"}
              className="slider_thumbnail"
              onClick={() => {
                const offset = sliderRef.current!.stateIndex;

                if (offset === idx) {
                  return;
                }

                const direction = idx > offset ? 1 : -1;

                if (direction === 1) {
                  sliderRef.current?.next(idx - offset);
                } else {
                  sliderRef.current?.prev(Math.abs(idx - offset));
                }
              }}
            >
              {it}
            </AspectRatio>
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
}
