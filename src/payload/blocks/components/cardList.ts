import { Block } from "payload/types";
import bodyField from "../../fields/common/body";
import { ctaRow } from "../../fields/common/ctaRow";
import headerField from "../../fields/common/header";
import MarginField from "../../fields/custom/marginField";

const CardList: Block = {
  slug: "card_list",
  labels: {
    singular: "Card list",
    plural: "Card list",
  },
  fields: [
    {
      name: "type",
      type: "radio",
      options: [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ],
    },
    {
      type: "array",
      name: "cards",
      fields: [headerField(true), bodyField(true), ctaRow()],
    },
    MarginField,
  ],
};

export default CardList;
