import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // 1. YENİ EKLENEN ALAN: DİL SEÇİMİ
    defineField({
      name: 'language',
      title: 'Language (Dil)',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Turkish (Türkçe)', value: 'tr' },
        ],
        layout: 'radio', // Panelde radyo butonu olarak görünmesi için
        direction: 'horizontal', // Yan yana dursunlar
      },
      initialValue: 'en', // Varsayılan İngilizce başlasın
      validation: (Rule) => Rule.required().error('Bir dil seçmek zorunludur.'),
    }),
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
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
    defineField({
      name: 'body',
      title: 'Body (Content)',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      language: 'language', // Dil bilgisini önizleme için çekiyoruz
    },
    prepare(selection) {
      const { author, language } = selection
      // Sanity listesinde başlığın yanında (EN) veya (TR) yazmasını sağlıyoruz
      const langBadge = language === 'tr' ? '(TR) 🇹🇷' : '(EN) 🇺🇸'
      return {
        ...selection, 
        title: `${langBadge} ${selection.title || 'İsimsiz'}`,
        subtitle: author && `by ${author}`
      }
    },
  },
})