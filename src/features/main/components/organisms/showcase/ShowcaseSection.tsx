import { ProductShowcase } from "./ProductShowcase";
import type { ShowcaseProduct } from "../../molecules/showcase/ShowcaseCard";

const productsData: ShowcaseProduct[] = [
  { id: 1, title: "계절에 구애받지 않고 편하게 입을 수 있는 아노락", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 2, title: "가볍고 뛰어난 보온성을 자랑하는 방한조끼", description: "카테고리명 카테고리명", image: "/assets/images/homeperson.png" },
  { id: 3, title: "포근한 따뜻함이 필요할 때 플리스", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 4, title: "쌀쌀한 바람이 부는 가을에 입기 좋은 자켓", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 5, title: "편안한 착용감의 데일리 스웨터", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 6, title: "활동적인 라이프스타일을 위한 트레이닝 팬츠", description: "카테고리명 카테고리명", image: "/assets/images/homeperson.png" },
  { id: 7, title: "스타일리시한 핏의 슬림 청바지", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
  { id: 8, title: "클래식한 디자인의 캐시미어 코트", description: "카테고리명 카테고리명", image: "/assets/images/maingstock.png" },
];

export default function ShowcaseSection() {
  return <ProductShowcase products={productsData} desktopItemsPerPage={4} />;
}
