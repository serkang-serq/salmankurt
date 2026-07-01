import { defineField, defineType } from 'sanity'

export const aboutGallery = defineType({
  name: 'aboutGallery',
  title: 'About Page Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Photo Title / Location',
      type: 'string',
      description: 'Örn: Miami Real Estate Meeting veya Ephesus Tour 2025',
    }),
    defineField({
      name: 'image',
      title: 'Gallery Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (SEO)',
          description: 'Görme engelliler ve Google SEO için fotoğrafın açıklaması.',
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Fotoğrafların sıralaması (1, 2, 3 şeklinde numaralandır)',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})