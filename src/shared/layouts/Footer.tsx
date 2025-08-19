import { InstagramIcon } from "../../../public/assets/icons/icons/InstagramIcon";
import { FacebookIcon } from "../../../public/assets/icons/icons/FacebookIcon";
import { YouTubeIcon } from "../../../public/assets/icons/icons/YouTubeIcon";

const companyInfo = [
  "대표이사 : 장창진",
  "사업자등록번호 : 201-86-15245",
  "서울특별시 중구 다산로 139 (랜더스빌딩) 6층",
  "통신판매업신고 : 중구 제0575호",
  "개인정보보호책임자 : 최주연",
];

const serviceInfo = [
  "평일 : 09:00 ~ 18:00",
  "기관 : 기업은행",
  "계좌번호 : 213-111127-04-035",
  "예금주 : (주)랜더스",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#161616] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        {/* GRID: Left = brand + company, Middle = contact/AS, Right = policy + socials */}
        <div className="grid grid-cols-1 xs:gap-4 md:grid-cols-12">
          {/* Left */}
          <section className="md:col-span-7">
            <h3 className="text-2xl font-extrabold tracking-wide text-[var(--brand)]">
              LANDAS
            </h3>

            <ul className="mt-5 space-y-2 text-sm leading-6">
              {companyInfo.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          {/* Middle */}
          <section className="md:col-span-3">
            <p className="text-[15px] text-lg font-semibold text-gray-200">
              대표 번호 및 AS 문의
            </p>
            <a
              href="tel:16616244"
              className="mt-2 block font-extrabold tracking-wide text-white text-2xl"
            >
              1661-6244
            </a>

            <ul className="mt-5 space-y-2 text-sm leading-6">
              {serviceInfo.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          {/* Right */}
          <aside className="md:col-span-2 flex flex-col items-start gap-4 md:items-end text-[var(--grey-text)]">
            {/* Policy links */}
            <nav className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white">
                이용약관
              </a>
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-3 text-white/80">
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
              >
                <InstagramIcon />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
              >
                <FacebookIcon />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
              >
                <YouTubeIcon />
              </a>
            </div>
          </aside>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-[var(--grey-text)] md:text-left">
          Copyright © WWW.ldsb2bmall.com All rights reserved
        </div>
      </div>
    </footer>
  );
}
