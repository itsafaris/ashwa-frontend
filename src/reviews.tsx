import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import UGC1 from "@images/video-ugc-1.mp4";

export type Review = {
  title: string;
  text: string;
  name: string;
  location: string;
  score: number;
  hoursAgo: number;
  img?: React.JSX.Element;
};

export const topReviews: Review[] = [
  {
    title: "Boosts focus!",
    text: "I've been takin these pills every day and I gotta say they've really helped with my focus at work. They almost feel like a little boost for my brain. I'm really happy with them",
    name: "Amanda E.",
    location: "Vermont",
    score: 5,
    img: (
      <video
        playsInline={true}
        loop={true}
        autoPlay={true}
        muted={true}
        src={UGC1}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          height: "100%",
          width: "100%",
        }}
      ></video>
    ),
    hoursAgo: 12,
  },
  {
    title: "Helped me manage stress",
    text: "Really helped me manage my stress. After a few weeks of taking them, I started to feel calmer. Will be purchasing again",
    name: "Clara S.",
    location: "Georgia",
    score: 4,
    img: <StaticImage width={400} src="./images/review2.jpeg" alt="" />,
    hoursAgo: 13,
  },
  {
    title: "One of my favorites",
    text: "So much energy and better fallin a sleep",
    name: "Hazel V.",
    location: "Virginia",
    score: 4.7,
    img: <StaticImage width={400} src="./images/review4.jpeg" alt="" />,
    hoursAgo: 19,
  },
];

export const reviews: Review[] = [
  {
    title: "Game changer for stress!",
    text: "OMG, this stuff is amazing! I've been taking it for a month and I feel so much calmer. Work doesn't stress me out as much anymore",
    name: "Sarah J.",
    location: "Vermont",
    score: 4.8,
    img: <StaticImage width={400} src="./images/review1.jpeg" alt="" />,
    hoursAgo: 12,
  },
  {
    title: "Sleep like a baby now",
    text: "Used to toss and turn all night, but since I started taking ashwagandha, I'm out like a light. Wake up feeling refreshed too. Win-win!",
    name: "Jane T.",
    location: "Georgia",
    score: 4.5,
    img: <StaticImage width={400} src="./images/review2.jpeg" alt="" />,
    hoursAgo: 13,
  },
  {
    title: "Less stress",
    text: "I think it’s doing something. My mood is better, and I feel better when I wake up in the morning",
    name: "Rachel K.",
    location: "Flagstaff, Arizona",
    score: 4.0,
    hoursAgo: 13,
  },
  {
    title: "Goodbye anxiety!",
    text: "Been dealing with anxiety for years. This supplement has been a lifesaver. Not a magic pill, but it takes the edge off for sure.",
    name: "Emily R.",
    location: "Virginia",
    score: 4.7,
    img: <StaticImage width={400} src="./images/review4.jpeg" alt="" />,
    hoursAgo: 15,
  },
  {
    title: "More energy",
    text: "So far so good. Second week. Seem to have more energy, sleeping better and less brain fog",
    name: "Ashley L.",
    location: "North Carolina",
    score: 4.9,
    img: <StaticImage width={400} src="./images/review5.jpeg" alt="" />,
    hoursAgo: 17,
  },
  {
    title: "It's okay",
    text: "It's not bad, but not mind-blowing either. Feel a bit calmer I guess. Might need more time to see real results. Giving it 3.5 stars for now",
    name: "Sam K.",
    location: "Montana",
    score: 3.5,
    hoursAgo: 17,
  },
  {
    title: "Bye bye brain fog",
    text: "I feel sharper since I started taking this. Words come easier, and I'm killing it at work. Plus, no weird side effects. Love it!",
    name: "Susie W.",
    location: "Oregon",
    img: <StaticImage width={400} src="./images/review7.jpeg" alt="" />,
    score: 4.8,
    hoursAgo: 18,
  },
  {
    title: "Love the product",
    text: "Delivery very good always. Product excellent 👌",
    name: "Jessica H.",
    location: "Oregon",
    score: 5.0,
    hoursAgo: 19,
  },
  {
    title: "Focus on point",
    text: "WFH was killing my concentration. Since taking this, I'm way more productive",
    name: "Lisa M.",
    location: "North Carolina",
    score: 4.6,
    img: <StaticImage width={400} src="./images/review6.jpeg" alt="" />,
    hoursAgo: 19,
  },
  {
    title: "Good product, but pricey",
    text: "These pills definitely help with my stress levels, but man, they're not cheap.. I wish they'd offer a larger bottle for a better value. Still, they work, so 3.5 stars.",
    name: "Kaitlyn P.",
    location: "Burlington, Vermont",
    score: 3.5,
    hoursAgo: 19,
  },
  {
    title: "Helping with my mood swings",
    text: "I get pretty moody sometimes, but this stuff helps level me out. Hubby's noticed too. Feeling more like myself again",
    name: "Amanda B.",
    location: "Georgia",
    img: <StaticImage width={400} src="./images/review3.jpeg" alt="" />,
    score: 4.7,
    hoursAgo: 22,
  },
  {
    title: "I was sceptical",
    text: "But it actually works! I'm less emotional and less tired.",
    name: "Caroline P.",
    location: "Colorado",
    score: 4.2,
    hoursAgo: 23,
  },
];
