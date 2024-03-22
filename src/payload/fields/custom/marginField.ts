import { Field } from "payload/types";

const MarginField: Field = {
  name: "margins",
  type: "array",
  maxRows: 3,
  minRows: 1,
  fields: [
    {
      name: "type",
      type: "radio",
      options: [
        {
          label: "Mobile",
          value: "mobile",
        },
        {
          label: "Tablet",
          value: "tablet",
        },
        {
          label: "Desktop",
          value: "desktop",
        },
      ],
      defaultValue: "mobile",
      admin: {
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "top",
          type: "number",
          min: 0,
          max: 10,
        },
        {
          name: "right",
          type: "number",
          min: 0,
          max: 10,
        },
        {
          name: "bottom",
          type: "number",
          min: 0,
          max: 10,
        },
        {
          name: "left",
          type: "number",
          min: 0,
          max: 10,
        },
      ],
    },
  ],
  validate: (val) => {
    let selectedOptions = [];
    if (val?.length) selectedOptions = val?.map(({ type }) => type);

    const optionsAreUnique = (options) =>
      new Set(options).size === options?.length;

    if (optionsAreUnique(selectedOptions)) {
      return true;
    }

    return `Duplicate options found (${selectedOptions}). Please make them unique`;
  },
};

export default MarginField;
