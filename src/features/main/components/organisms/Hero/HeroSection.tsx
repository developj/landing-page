import HeroSwipe, {type HeroSlide } from "./Hero";

const slides: HeroSlide[] = [
  {
    image: "/assets/images/hero.png",
  },
  {
    image: "/assets/images/hero.png",
  },
  {
    image: "/assets/images/hero.png",
  },
];

export default function HeroSection() {
  return <HeroSwipe slides={slides} className="h-[76vh] md:h-[84vh]" />;
}
