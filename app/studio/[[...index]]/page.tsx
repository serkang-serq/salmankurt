"use client";
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config'; // @ sembolü ile en kök dizindeki config'i hedefliyoruz

export default function StudioPage() {
  return <NextStudio config={config} />;
}