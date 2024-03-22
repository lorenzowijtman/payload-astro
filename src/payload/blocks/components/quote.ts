import { Block } from "payload/types";
import MarginField from "../../fields/custom/marginField";

const Quote: Block = {
  slug: "quote",
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "quotee",
      type: "text",
    },
    MarginField,
  ],
};

export default Quote;
