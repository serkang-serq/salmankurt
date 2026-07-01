import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { galleryType } from './gallery'
import { aboutGallery } from './aboutGallery' // 1. Dosyayı içeri aktardık

export const schemaTypes = [
  blockContentType,
  categoryType,
  postType,
  authorType,
  galleryType, 
  aboutGallery, // 2. Şema listesine ekledik
]