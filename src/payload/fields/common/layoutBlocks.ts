import { Field } from "payload/types";
import LayoutBlocks from "../../blocks/layouts";

export const LayoutBlocksField = (options: {} = {}) => {
  const field: Field = {
    name: "blocks",
    type: "blocks",
    blocks: [...LayoutBlocks],
    ...options,
  };
  return field;
};

export default LayoutBlocksField;
