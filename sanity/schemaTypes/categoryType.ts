import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories', // Panelde "Categories" görünecek
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
  ],
})