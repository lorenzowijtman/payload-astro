import { Field } from "payload/types";

export const bodyField = (required = false) => {
  const field: Field = {
    name: "body",
    type: "textarea",
    required: required,
  };
  return field;
};

export default bodyField;
