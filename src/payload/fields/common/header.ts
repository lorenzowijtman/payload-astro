import { Field } from "payload/types";

export const headerField = (required = false) => {
  const field: Field = {
    name: "header",
    type: "text",
    required: required,
  };
  return field;
};

export default headerField;
