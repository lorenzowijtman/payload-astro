import { Field } from "payload/types";

export const ctaField = (required = false) => {
  const field: Field = {
    name: "cta",
    type: "text",
    required: required,
  };
  return field;
};

export default ctaField;
