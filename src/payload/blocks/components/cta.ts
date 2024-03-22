import { Block } from "payload/types";
import { ctaRow } from "../../fields/common/ctaRow";
import MarginField from "../../fields/custom/marginField";

const CTAButton: Block = {
  slug: "cta_button",
  labels: {
    singular: "CTA Button",
    plural: "CTA Button",
  },
  fields: [ctaRow(true), MarginField],
};

export default CTAButton;
