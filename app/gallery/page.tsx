import { client } from "@/sanity/lib/client";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery | Salman Kurt",
  description: "Visual archives and exclusive moments from Sea Drop Travel and global investments.",
};

export const revalidate = 60; 

async function getMainGallery() {
  const query = `*[_type == "mainGallery"] | order(order asc, _createdAt desc) {
    _id,
    title,
    category,
    image
  }`;
  return await client.fetch(query);
}

export default async function GalleryPage() {
  const galleryItems = await getMainGallery();

  const seoKeywords = [
    "Ephesus Private Tour",
    "Kusadasi Shore Excursions",
    "House of Virgin Mary",
    "House of Virgin Mary Ephesus",
    "Private Shore Excursion",
    "Cruise Excursions Turkey",
    "Biblical Ephesus Tour",
    "Christian Heritage Tour",
    "Temple of Artemis",
    "St. John Basilica",
    "Turkish Bath Experience",
    "Skip the Line",
    "Guaranteed Return to Ship",
    "Best Ephesus Tour",
    "Private Tour from Kusadasi Cruise Port",
    "Private Ephesus Tour from Kusadasi Cruise Port",
    "Best Ephesus Shore Excursion",
    "Ephesus and House of Virgin Mary Private Tour",
    "Kusadasi Cruise Excursions",
    "Biblical Ephesus Tour from Cruise Port",
    "Private Ephesus Tour with Turkish Bath",
    "Luxury Ephesus Shore Excursion",
    "Guaranteed Return to Ship Ephesus Tour"
  ];

  return <GalleryClient galleryItems={galleryItems} seoKeywords={seoKeywords} />;
}