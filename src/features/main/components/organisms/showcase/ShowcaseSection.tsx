// ShowcaseSection.tsx
import { ProductShowcase } from "./ProductShowcase";
import type { ShowcaseProduct } from "../../molecules/showcase/ShowcaseCard";

const productsData: ShowcaseProduct[] = [
  { id: 1, title: "계절에 구애받지 않고", secondaryTitle: "편하게 입을 수 있는 아노락", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 2, title: "가볍고 뛰어난 보온성을", secondaryTitle: "자랑하는 방한조끼", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/homeperson.png" },
  { id: 3, title: "포근한 따뜻함이", secondaryTitle: "필요할 때 플리스", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 4, title: "계절에 구애받지 않고", secondaryTitle: "편하게 입을 수 있는 아노락", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 5, title: "가볍고 뛰어난 보온성을", secondaryTitle: "자랑하는 방한조끼", description: "카테고리명 카테고리명 카테고리명명", image: "/assets/images/maingstock.png" },
  { id: 6, title: "가볍고 뛰어난 보온성을", secondaryTitle: "자랑하는 방한조끼", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/homeperson.png" },
  { id: 7, title: "포근한 따뜻함이", secondaryTitle: "필요할 때 플리스", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 8, title: "가볍고 뛰어난 보온성을", secondaryTitle: "자랑하는 방한조끼", description: "카테고리명 카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  
];

export default function ShowcaseSection() {
  return <ProductShowcase products={productsData} />;
}
