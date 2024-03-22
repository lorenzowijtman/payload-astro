/* eslint-disable import/extensions */
import type { CollectionConfig } from 'payload/types'

import Blocks from '../blocks'
import { pageTypeField } from '../fields/common/pageType'
import { slugField } from '../fields/common/slug'
import { titleField } from '../fields/common/title'

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  // access: {
  //   create: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: "editor",
  //       collectionString: "pages",
  //     }),
  //   update: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: "editor",
  //       collectionString: "pages",
  //     }),
  //   delete: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: "editor",
  //       collectionString: "pages",
  //     }),
  //   read: ({ req }) =>
  //     collectionAccess({
  //       req: req,
  //       allowedRole: "editor",
  //       collectionString: "pages",
  //       apiAccess: true,
  //     }),
  // },
  // admin: {
  //   useAsTitle: "title",
  //   defaultColumns: ["title", "slug"],
  //   enableRichTextRelationship: false,
  //   enableRichTextLink: false,
  // },
  fields: [
    titleField,
    slugField,
    pageTypeField(),
    //   seoField,
    //   socialsField,
    //   themeField(),
    {
      name: 'blocks',
      type: 'blocks',
      blocks: Blocks,
    },
  ],
}

export default Pages
