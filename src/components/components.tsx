import { Flex, Icon, Text, TextProps } from "@chakra-ui/react";
import React, { ComponentProps, useEffect, useState } from "react";
import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { useGlobalState } from "../RootWrapper";

export function Span(props: ComponentProps<typeof Text>) {
  return <Text as="span" {...props}></Text>;
}

export function Rating({
  size = "normal",
  rating = 5,
  ...rest
}: ComponentProps<typeof Flex> & { rating?: number; size?: "normal" | "small" }) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <Flex gap={size === "normal" ? 1 : 0} {...rest} color={"orange.300"}>
      {[...Array(5)].map((_, idx) => {
        if (idx < fullStars) {
          return <Icon key={idx} boxSize={size === "normal" ? "14px" : "9px"} as={FaStar} />;
        } else if (idx === fullStars && hasHalfStar) {
          return <Icon key={idx} boxSize={size === "normal" ? "14px" : "9px"} as={FaStarHalfAlt} />;
        } else {
          return <Icon key={idx} boxSize={size === "normal" ? "14px" : "9px"} as={FaRegStar} />;
        }
      })}
    </Flex>
  );
}

export function Timer({
  timestamp = 1000 * 60 * 324,
  ...rest
}: TextProps & { timestamp?: number }) {
  const global = useGlobalState();

  const [timeRemaining, setTimeRemaining] = useState(
    timestamp - (Date.now() - global.pageLoadedAt)
  );

  useEffect(() => {
    const i = setInterval(() => {
      setTimeRemaining((v) => {
        const nextValue = v - 1000;
        if (nextValue < 0) {
          clearInterval(i);
          return 0;
        }
        return nextValue;
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const readableTime = formatTimestamp(timeRemaining);

  return (
    <Text {...rest}>
      {readableTime.hours}:{readableTime.minutes}:{readableTime.seconds}
    </Text>
  );
}

function formatTimestamp(timestamp: number): {
  hours: string;
  minutes: string;
  seconds: string;
} {
  const hours = Math.floor(timestamp / (60000 * 60));
  timestamp = timestamp - hours * 60000 * 60;

  const minutes = Math.floor(timestamp / 60000);
  timestamp = timestamp - minutes * 60000;

  const seconds = Math.floor(timestamp / 1000);

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}
