import { Field } from "payload/types";

export const urlField = (required = false) => {
  const field: Field = {
    name: "url",
    type: "text",
    required: required,
  };
  return field;
};

export default urlField