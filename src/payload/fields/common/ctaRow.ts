import { Field } from "payload/types";
import ctaField from "./cta";
import urlField from "./url";

export const ctaRow = (required = false) => {
  const row: Field = {
    type: "row",
    fields: [ctaField(required), urlField(required)],
  };

  return row;
};

export default ctaField;
