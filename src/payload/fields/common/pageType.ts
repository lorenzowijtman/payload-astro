import { Field } from 'payload/types'

export const pageTypeField = (options: any = {}) => {
  const { admin, ...restOptions } = options

  const newOptions = {
    ...restOptions,
    admin: {
      ...admin,
      position: 'sidebar',
    },
  }

  const field: Field = {
    name: 'pageType',
    type: 'select',
    options: [
      { value: 'default', label: 'Default' },
      { value: 'restaurant', label: 'Restaurant' },
      { value: 'transparentHeader', label: 'Transparent Header' },
    ],
    defaultValue: 'default',
    ...newOptions,
  }
  return field
}
