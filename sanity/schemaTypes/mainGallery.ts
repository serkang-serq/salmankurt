export const mainGallery = {
    name: 'mainGallery',
    title: 'Main Gallery',
    type: 'document',
    fields: [
      {
        name: 'title_tr',
        title: 'Photo Title (Türkçe)',
        type: 'string',
        description: 'Örn: Efes\'te Gün Batımı'
      },
      {
        name: 'title_en',
        title: 'Photo Title (English)',
        type: 'string',
        description: 'E.g., Sunset at Ephesus'
      },
      {
        name: 'category_tr',
        title: 'Category (Türkçe)',
        type: 'string',
        description: 'Örn: Turizm, Gayrimenkul, VIP Hizmet...'
      },
      {
        name: 'category_en',
        title: 'Category (English)',
        type: 'string',
        description: 'E.g., Tourism, Real Estate, VIP Service...'
      },
      {
        name: 'image',
        title: 'Image (Ortak Görsel)',
        type: 'image',
        options: {
          hotspot: true, 
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'order',
        title: 'Order / Sıra',
        type: 'number',
        description: 'Fotoğrafların hangi sırayla çıkacağını belirler (Örn: 1, 2, 3...)',
      }
    ],
    preview: {
      select: {
        title: 'title_tr', // Panelin önizlemesinde Türkçe başlığı göstersin
        subtitle: 'category_tr',
        media: 'image',
      },
      prepare(selection: any) {
        const { title, subtitle, media } = selection;
        return {
          title: title || 'İsimsiz Fotoğraf',
          subtitle: subtitle,
          media: media,
        };
      },
    },
  };