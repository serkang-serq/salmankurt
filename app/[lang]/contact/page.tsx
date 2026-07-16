import { getDictionary } from "../../../dictionaries/get-dictionary";
import ContactClient from "./ContactClient";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dict = await getDictionary(lang as "en" | "tr");

  return <ContactClient dict={dict} />;
}