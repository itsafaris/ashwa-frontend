import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import UGC1 from "@images/user-video-1.mp4";
import UGC2 from "@images/user-video-2.mp4";
import UGC3 from "@images/user-video-3.mp4";
import UGC4 from "@images/video-ugc-4.mp4";

export type Review = {
  title: string;
  text: string;
  name: string;
  location: string;
  score: number;
  hoursAgo: number;
  img?: React.JSX.Element;
  productImg?: React.JSX.Element;
};

export const topReviews: Review[] = [
  {
    title: "Gone down to a size 8",
    text: "",
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
          height: "100%",
          width: "100%",
        }}
      ></video>
    ),
    productImg: <StaticImage width={100} src="./images/product-6-small.png" alt="" />,
    hoursAgo: 12,
  },
  {
    title: "In my 3rd month already!",
    text: "",
    name: "Clara S.",
    location: "Georgia",
    score: 4,
    img: (
      <video
        playsInline={true}
        loop={true}
        autoPlay={true}
        muted={true}
        src={UGC2}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></video>
    ),
    productImg: <StaticImage width={100} src="./images/product-3-small.png" alt="" />,
    hoursAgo: 13,
  },
  {
    title: "Enhances weight loss!",
    text: "",
    name: "Susie W.",
    location: "Virginia",
    score: 5,
    productImg: <StaticImage width={100} src="./images/product-1-small.png" alt="" />,
    img: (
      <video
        playsInline={true}
        loop={true}
        autoPlay={true}
        muted={true}
        src={UGC4}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></video>
    ),
    hoursAgo: 19,
  },
  {
    title: "Helps me manage stress",
    text: "",
    name: "Hazel V.",
    location: "Virginia",
    score: 4.7,
    productImg: <StaticImage width={100} src="./images/product-6-small.png" alt="" />,
    img: (
      <video
        playsInline={true}
        loop={true}
        autoPlay={true}
        muted={true}
        src={UGC3}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></video>
    ),
    hoursAgo: 19,
  },
];

export const reviews: Review[] = [
  {
    title: "Game changer for weight loss!",
    text: "OMG, I've been taking Sleep & Burn for a couple months and I've lost 21 pound so far. I feel healthier and more confident!",
    name: "Sarah J.",
    location: "Vermont",
    score: 4.8,
    img: <StaticImage width={400} src="./images/review1.jpg" alt="" />,
    hoursAgo: 12,
  },
  {
    title: "-34 pounds in 7 weeks",
    text: "Love it! FINALLY my weight is starting to slowly budge!",
    name: "Amanda B.",
    location: "Georgia",
    img: <StaticImage width={400} src="./images/review3.jpg" alt="" />,
    score: 4.7,
    hoursAgo: 22,
  },
  {
    title: "Sleep like a baby now",
    text: "Used to toss and turn all night, but since I started taking ashwagandha, I'm out like a light. Wake up feeling refreshed too. Win-win!",
    name: "Jane T.",
    location: "Georgia",
    score: 4.5,
    img: <StaticImage width={400} src="./images/review2.jpg" alt="" />,
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
    title: "Goodbye weight!",
    text: "Been dealing with overweight for years. This supplement has been a lifesaver. Not a magic pill, but it takes the edge off for sure.",
    name: "Emily R.",
    location: "Virginia",
    score: 4.7,
    img: <StaticImage width={400} src="./images/review4.jpg" alt="" />,
    hoursAgo: 15,
  },
  {
    title: "More energy",
    text: "So far so good. Second week. Seem to have more energy, sleeping better and less brain fog in the morning",
    name: "Ashley L.",
    location: "North Carolina",
    score: 4.9,
    img: <StaticImage width={400} src="./images/review5.jpg" alt="" />,
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
    title: "Feeling refreshed in the morning",
    text: "I wake up feeling sooooo much better since I started them (almost 2 months in). And I'm 11 pounds off. So far so good",
    name: "Susie W.",
    location: "Oregon",
    img: <StaticImage width={400} src="./images/review7.jpg" alt="" />,
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
    title: "Stress is a killer",
    text: "Taking care of your stress issues is probably the best thing you can do for your body. Everything else becomes so easy after...",
    name: "Lisa M.",
    location: "North Carolina",
    score: 4.6,
    img: <StaticImage width={400} src="./images/review6.jpg" alt="" />,
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
    title: "I was sceptical",
    text: "But it actually works! I'm less emotional and less tired. And I fall asleep much quicker",
    name: "Caroline P.",
    location: "Colorado",
    score: 4.2,
    hoursAgo: 23,
  },
];
