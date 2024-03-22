import Accordion from "./accordion";
import CTAButton from "./cta";
import FullWidthCard from "./fullWidthCard";
import Quote from "./quote";
import RichTextBlock from "./richText";
import Shuffle from "./shuffle";

// lowest level of abstraction for blocks, these are the building blocks for the layouts and templates
const CommonBlocks = [
  RichTextBlock,
  CTAButton,
  Accordion,
  FullWidthCard,
  Shuffle,
  Quote,
];

export default CommonBlocks;
