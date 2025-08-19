import Collection from "../../features/main/components/organisms/product/Collection";
import ShowcaseSection from "../../features/main/components/organisms/showcase/ShowcaseSection";

export default function Home() {
  return (
    <div className="container w-full px-4">
      <div className="w-full"><ShowcaseSection /></div>
      <div className="w-full"><Collection /></div>
    </div>
  );
}