import { Block } from "payload/types";
import bodyField from "../../fields/common/body";
import { ctaRow } from "../../fields/common/ctaRow";
import headerField from "../../fields/common/header";
import MarginField from "../../fields/custom/marginField";

const Shuffle: Block = {
  slug: "shuffle",
  fields: [
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        headerField(true),
        bodyField(true),
        ctaRow(),

        {
          name: "secondary_cta",
          type: "text",
        },
        {
          name: "secondary_url",
          type: "text",
        },
      ],
    },
    MarginField,
  ],
};

export default Shuffle;
