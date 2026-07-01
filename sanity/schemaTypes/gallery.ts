import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Galeri Başlığı' }),
    defineField({ 
      name: 'images', 
      type: 'array', 
      title: 'Fotoğraflar',
      of: [{ type: 'image', options: { hotspot: true } }] 
    }),
  ],
})