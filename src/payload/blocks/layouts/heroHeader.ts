// ptional full width/ height hero headerimport { Block } from "payload/types";

import { Block } from 'payload/types'

import MarginField from '../../fields/custom/marginField'
import CommonBlocks from '../components'

const HeroHeader: Block = {
  slug: 'hero_header',
  labels: {
    singular: 'Hero header',
    plural: 'Hero header',
  },
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Title',
          value: 'title',
        },
        {
          label: 'Call To Action',
          value: 'cta',
        },
        {
          label: 'Content',
          value: 'content',
        },
      ],
      defaultValue: 'Title',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contentAlignment',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'justify-start',
        },
        {
          label: 'centered',
          value: 'justify-center',
        },
        {
          label: 'right',
          value: 'justify-end',
        },
      ],
      defaultValue: 'Title',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [...CommonBlocks],
      admin: {
        condition: (_data, siblingData) => (siblingData.type === 'content' ? true : false),
      },
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        condition: (_data, siblingData) =>
          siblingData.type === 'title' || siblingData.type === 'cta' ? true : false,
      },
    },
    {
      name: 'subtext',
      type: 'text',
      admin: {
        condition: (_data, siblingData) => (siblingData.type === 'cta' ? true : false),
      },
    },
    {
      name: 'cta',
      type: 'text',
      admin: {
        condition: (_data, siblingData) => (siblingData.type === 'cta' ? true : false),
      },
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_data, siblingData) => (siblingData.type === 'cta' ? true : false),
      },
    },
    MarginField,
  ],
}

export default HeroHeader
