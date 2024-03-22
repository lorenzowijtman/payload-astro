import { Field } from "payload/types";
import CommonBlocks from "../../blocks/components";

export const CommonBlocksField = (options: {} = {}) => {
  const field: Field = {
    name: "blocks",
    type: "blocks",
    blocks: [...CommonBlocks],
    ...options,
  };
  return field;
};

export default CommonBlocksField;
