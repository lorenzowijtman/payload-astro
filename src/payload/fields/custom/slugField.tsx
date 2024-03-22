import React, { Fragment } from 'react'
import { toSlug } from '../../helpers/slugs'
import { Text, useField, useFormFields } from 'payload/components/forms'

export const SlugField = (props) => {
  const { value, setValue } = useField<string>(props.path)
  const title = useFormFields(([fields]) => fields.title)

  let slug = ''

  if (value && value.length) {
    slug = toSlug(value)
  } else if (title.value && (title.value as string).length) {
    slug = toSlug(title.value)
    setValue(slug)
  }

  return (
    <Fragment>
      <Text
        {...props}
        admin={{
          ...props.admin,
          ...(slug.length && { placeholder: slug }),
        }}
      />
    </Fragment>
  )
}
