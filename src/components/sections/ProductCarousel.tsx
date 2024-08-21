import * as React from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Container,
  AspectRatio,
  IconButton,
  Stack,
  Button,
  Grid,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Rating, Span } from "@components/components";
import { css, Global } from "@emotion/react";

import BlazeSlider, { BlazeConfig } from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import { Link } from "gatsby";

const TOTAL_NUMBER_OF_REVIEWS = 1247;

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

export const ProductCarouselSection = (props: {
  weightAvgMonthlyLoss: number;
  weightUnits: string;
}) => {
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
      src="../../images/carousel1.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../images/carousel2.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../images/carousel3.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../images/carousel4.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../images/carousel5.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
    <StaticImage
      src="../../images/carousel6.jpg"
      alt="Ashwagandha Supplement"
      height={500}
      width={500}
    />,
  ];

  return (
    <Box bg="white">
      <Global
        styles={css`
          .slider_thumbnail.active {
            border-color: var(--chakra-colors-primary-500);
            border-width: 2px;
          }
        `}
      />

      <Container maxW={["container.sm", null, "container.lg"]}>
        <Grid
          py={4}
          gridTemplateColumns={["auto", "auto", "1fr 1fr"]}
          gridTemplateAreas={['"headline" "image"', '"headline" "image"', '"image headline"']}
          gap={8}
          width={"full"}
          justifyContent={"space-between"}
        >
          <Box gridArea={"image"} minWidth={340} flex={1}>
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
              <Flex
                flex={1}
                gap={2}
                justifyContent={"start"}
                flexWrap={"wrap"}
                ref={thumbsContainer}
              >
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
          </Box>

          <Stack
            gridArea="headline"
            alignItems={["center", "center", "start"]}
            flex={1}
            minWidth={300}
          >
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              maxW={"container.sm"}
              textAlign={["center", "center", "left"]}
            >
              Lose an Average Of{" "}
              <Span color="primary.600" fontWeight={"bold"}>
                {Math.round(props.weightAvgMonthlyLoss * 3)}
                {props.weightUnits}
              </Span>{" "}
              In Only 90 Days*
            </Heading>

            <Flex alignItems={"center"} gap={2} py={[0, 0, 2]}>
              <Text fontSize={"sm"}>4.7</Text>
              <Rating />
              <a href="#reviews">
                <Text fontSize={"sm"} decoration={"underline"}>
                  {TOTAL_NUMBER_OF_REVIEWS} Reviews
                </Text>
              </a>
            </Flex>

            <Text
              mt={[2, 2, 4]}
              fontSize={["md", "md", "lg"]}
              textAlign={["center", "center", "left"]}
            >
              Introducing our <Span fontWeight={"bold"}>all-in-one fat burner</Span> designed to
              support stress reduction, and sleep quality. This formula contains metabolism-boosting
              ingredients for a comprehensive solution to{" "}
              <Span fontWeight={"bold"}>your weight management goals</Span>.*
            </Text>

            <Stack width={["full", "unset"]} alignItems="center" mt={6}>
              <Link to="/sleep-and-burn/#product-selection">
                <Button
                  size="lg"
                  mx="auto"
                  variant={"solid"}
                  borderRadius={"full"}
                  width={"100%"}
                  py={7}
                  px={10}
                  colorScheme={"pink"}
                  rightIcon={<Icon as={FaArrowRight} />}
                >
                  Get Sleep & Burn
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};
