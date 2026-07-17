import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // 1. BAŞLIK (Çift Dilli)
    defineField({
      name: 'title',
      title: 'Title (Başlık)',
      type: 'object',
      fields: [
        defineField({ name: 'tr', title: 'Türkçe', type: 'string' }),
        defineField({ name: 'en', title: 'İngilizce', type: 'string' }),
      ],
    }),
    
    // 2. SLUG (URL) - Türkçe başlığa göre otomatik oluşacak
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title.tr', 
        maxLength: 96,
      },
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    // 3. ÖZET EKLENDİ (Çift Dilli) - Kartlarda gösterilecek kısa yazı
    defineField({
      name: 'excerpt',
      title: 'Excerpt (Kısa Özet)',
      type: 'object',
      fields: [
        defineField({ name: 'tr', title: 'Türkçe Özet', type: 'text', rows: 3 }),
        defineField({ name: 'en', title: 'İngilizce Özet', type: 'text', rows: 3 }),
      ],
    }),

    // 4. İÇERİK (Çift Dilli) - Makalenin ana gövdesi
    defineField({
      name: 'body',
      title: 'Body (İçerik)',
      type: 'object',
      fields: [
        defineField({ name: 'tr', title: 'Türkçe İçerik', type: 'blockContent' }),
        defineField({ name: 'en', title: 'İngilizce İçerik', type: 'blockContent' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.tr', // Sanity listesinde TR başlığı göstersin
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return {
        ...selection, 
        title: selection.title || 'İsimsiz Yazı',
        subtitle: author && `by ${author}`
      }
    },
  },
})