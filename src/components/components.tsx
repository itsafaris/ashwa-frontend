import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { ComponentProps } from "react";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

export function Span(props: ComponentProps<typeof Text>) {
  return <Text as="span" {...props}></Text>;
}

export function Rating({
  rating = 5,
  ...rest
}: ComponentProps<typeof Flex> & { rating?: number }) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <Flex gap={1} {...rest} color={"orange.300"}>
      {[...Array(5)].map((_, idx) => {
        if (idx < fullStars) {
          return <Icon key={idx} boxSize={"12px"} as={FaStar} />;
        } else if (idx === fullStars && hasHalfStar) {
          return <Icon key={idx} boxSize={"12px"} as={FaStarHalfAlt} />;
        } else {
          return <Icon key={idx} boxSize={"12px"} as={FaRegStar} />;
        }
      })}
    </Flex>
  );
}
