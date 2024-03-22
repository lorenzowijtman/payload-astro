import { Block } from "payload/types";
import bodyField from "../../fields/common/body";
import { ctaRow } from "../../fields/common/ctaRow";
import headerField from "../../fields/common/header";
import MarginField from "../../fields/custom/marginField";

const Accordion: Block = {
  slug: "accordion",
  fields: [
    {
      name: "items",
      type: "array",
      fields: [headerField(true), bodyField(true), ctaRow()],
    },
    MarginField,
  ],
};

export default Accordion;
