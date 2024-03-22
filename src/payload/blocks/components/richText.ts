import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload/types'

import { ctaRow } from '../../fields/common/ctaRow'

export const afterReadHook = async ({
  req, // full express request
}) => {
  // do not return the rich text structure field in API calls
  if (req.user == null) {
    return null
  }
}

const RichTextBlock: Block = {
  slug: 'rich_text',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text',
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      required: true,
      hooks: {
        afterRead: [afterReadHook],
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers. If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({}),
        ],
      }),
    },
    // TODO remove ctaROW, preferably no components nested on other blocks nested in low level blocks (components)
    ctaRow(),
    lexicalHTML('richText', { name: 'richText_html' }),
  ],
}

export default RichTextBlock
