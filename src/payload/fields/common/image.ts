import { Field } from "payload/types";

export const headerField = (required = false) => {
  const field: Field = {
    name: "image",
    type: "upload",
    relationTo: "media",
    required,
  };
  return field;
};

export default headerField;
