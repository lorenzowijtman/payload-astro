import { Block, Field } from 'payload/types'

import CommonBlocks from '../components'

// eslint-disable-next-line @typescript-eslint/array-type
const FlexFields: Array<Field> = [
  {
    name: 'flexDirection',
    type: 'select',
    options: [
      { label: 'Row', value: 'row' },
      { label: 'Row Reverse', value: 'row-reverse' },
      { label: 'Column', value: 'col' },
      { label: 'Column Reverse', value: 'col-reverse' },
    ],
    defaultValue: 'row',
  },
  {
    name: 'flexWrap',
    type: 'select',
    options: [
      { label: 'No Wrap', value: 'nowrap' },
      { label: 'Wrap', value: 'wrap' },
      { label: 'Wrap Reverse', value: 'wrap-reverse' },
    ],
    defaultValue: 'nowrap',
  },
  {
    name: 'justifyContent',
    type: 'select',
    options: [
      { label: 'Flex Start', value: 'justify-start' },
      { label: 'Flex End', value: 'justify-end' },
      { label: 'Center', value: 'justify-center' },
      { label: 'Space Between', value: 'justify-between' },
      { label: 'Space Around', value: 'justify-around' },
      { label: 'Space Evenly', value: 'justify-evenly' },
    ],
    defaultValue: 'start',
  },
  {
    name: 'alignItems',
    type: 'select',
    options: [
      { label: 'Stretch', value: 'items-stretch' },
      { label: 'Flex Start', value: 'items-start' },
      { label: 'Flex End', value: 'items-end' },
      { label: 'Center', value: 'items-center' },
      { label: 'Baseline', value: 'items-baseline' },
    ],
    defaultValue: 'stretch',
  },
  {
    name: 'gap',
    label: 'Gap between children (px)',
    type: 'number',
    defaultValue: 0,
  },
  {
    name: 'childWidth',
    label: 'Child Width (%)',
    type: 'number',
    defaultValue: 100,
  },
]

const FlexSizeOptions: Field = {
  name: 'flexSizes',
  type: 'array',
  fields: [
    {
      name: 'size',
      type: 'select',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Small',
          value: 'sm',
        },
        {
          label: 'Medium',
          value: 'md',
        },
        {
          label: 'Large',
          value: 'lg',
        },
        {
          label: 'Extra Large',
          value: 'xl',
        },
      ],
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'group',
      fields: FlexFields,
    },
  ],
}

const FlexLayout: Block = {
  slug: 'flex_layout',
  labels: { singular: 'Flex Layout', plural: 'Flex Layouts' },
  fields: [FlexSizeOptions, { name: 'blocks', type: 'blocks', blocks: [...CommonBlocks] }],
}

export default FlexLayout
