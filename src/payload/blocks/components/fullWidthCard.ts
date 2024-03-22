import { Block } from "payload/types";
import bodyField from "../../fields/common/body";
import { ctaRow } from "../../fields/common/ctaRow";
import headerField from "../../fields/common/header";
import MarginField from "../../fields/custom/marginField";

const FullWidthCard: Block = {
  slug: "full_width_card",
  labels: {
    singular: "Full Width Card",
    plural: "Full Width Card",
  },
  fields: [headerField(true), bodyField(true), ctaRow(), MarginField],
};

export default FullWidthCard;
