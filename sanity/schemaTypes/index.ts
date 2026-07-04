import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { galleryType } from './gallery'
import { aboutGallery } from './aboutGallery' 
import { mainGallery } from './mainGallery' // 1. Yeni ana galeri şemasını içeri aktardık

export const schemaTypes = [
  blockContentType,
  categoryType,
  postType,
  authorType,
  galleryType, 
  aboutGallery, 
  mainGallery, // 2. Şema listesine ekledik
]