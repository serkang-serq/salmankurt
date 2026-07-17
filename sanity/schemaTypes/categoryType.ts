import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title (Çoklu Dil)',
      type: 'object', // 1. DEĞİŞİKLİK: String yerine obje yaptık
      fields: [
        defineField({
          name: 'tr',
          title: 'Türkçe',
          type: 'string',
          validation: (Rule) => Rule.required().error('Kategori için Türkçe isim zorunludur.'),
        }),
        defineField({
          name: 'en',
          title: 'İngilizce',
          type: 'string',
          validation: (Rule) => Rule.required().error('Kategori için İngilizce isim zorunludur.'),
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'title.tr', // 2. DEĞİŞİKLİK: URL'i Türkçe başlığa göre otomatik oluşturacak
        maxLength: 96,
      },
    }),
  ],
})