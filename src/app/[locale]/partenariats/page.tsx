import ContentPage from "@/components/ContentPage";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <ContentPage params={params} slug="partenariats" />;
}
