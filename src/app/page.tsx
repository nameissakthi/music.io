import Artists from "@/components/Artists";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="gap-6 flex flex-col">
      <Banner />
      <Artists />
    </div>
  );
}
