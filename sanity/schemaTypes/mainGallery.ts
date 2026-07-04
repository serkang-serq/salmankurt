export const mainGallery = {
    name: 'mainGallery',
    title: 'Main Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Photo Title',
        type: 'string',
        description: 'E.g., Sunset at Ephesus, Luxury Villa...'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'E.g., Tourism, Real Estate, VIP Service...'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Fotoğrafı kırparken odak noktasını seçmeni sağlar
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
        title: 'title',
        subtitle: 'category',
        media: 'image',
      },
    },
  };