import { Block } from 'payload/types'

import MarginField from '../../fields/custom/marginField'
import CommonBlocks from '../components'

const ContentBanner: Block = {
  slug: 'content_banner',
  labels: {
    singular: 'Content Banner',
    plural: 'Content Banner',
  },
  fields: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'alignment',
      label: 'Content position',
      type: 'radio',
      options: [
        { value: 'justify-start', label: 'Left' },
        { value: 'justify-center', label: 'Center' },
        { value: 'justify-right', label: 'Right' },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [...CommonBlocks],
    },
    MarginField,
  ],
}

export default ContentBanner
