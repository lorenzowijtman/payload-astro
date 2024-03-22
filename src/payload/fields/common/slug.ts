import { Field } from 'payload/types'
import { SlugField } from '../custom/slugField'
import { formatSlug } from '../../helpers/slugs'
import { titleField } from './title'

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  unique: true,
  admin: {
    position: 'sidebar',
    components: {
      Field: SlugField,
    },
  },
  hooks: {
    beforeValidate: [formatSlug((titleField as any).name)],
  },
}
