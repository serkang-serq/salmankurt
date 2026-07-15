import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title_tr', 
      type: 'string', 
      title: 'Galeri Başlığı (Türkçe)' 
    }),
    defineField({ 
      name: 'title_en', 
      type: 'string', 
      title: 'Galeri Başlığı (English)' 
    }),
    defineField({ 
      name: 'images', 
      type: 'array', 
      title: 'Fotoğraflar (Ortak Yükleme)',
      of: [{ type: 'image', options: { hotspot: true } }] 
    }),
  ],
  preview: {
    select: {
      title: 'title_tr', // Panelde Türkçe adıyla görünsün
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'İsimsiz Galeri Grubu',
      };
    },
  },
})