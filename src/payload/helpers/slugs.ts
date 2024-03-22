import type { FieldHook } from 'payload/types'

export const toSlug = val =>
  val
    .trim()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w-\/]+/g, '')
    .toLowerCase()

export const formatSlug: FieldHook =
  (fallback: any) =>
  ({ value, originalDoc, data }) => {
    /* 
       Adding a check so that the possible second run doesn't overwrite the first run (valid/desired) slug
    */
    if (value == undefined && originalDoc?.slug != null) {
      return toSlug(originalDoc.slug)
    }

    if (typeof value === 'string' && value.length > 0) {
      return toSlug(value)
    }

    const fallbackData = data?.[fallback] || originalDoc?.[fallback]
    if (fallbackData && typeof fallbackData === 'string') {
      return toSlug(fallbackData)
    }

    return value
  }
