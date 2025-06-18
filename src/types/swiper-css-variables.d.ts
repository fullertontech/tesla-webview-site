// src/types/swiper-css-variables.d.ts

import 'react'; // 確保引入 'react' 命名空間

declare module 'react' {
  interface CSSProperties {
    // Swiper Pagination 相關的變數
    '--swiper-pagination-color'?: string;
    '--swiper-pagination-bullet-inactive-color'?: string;
    '--swiper-pagination-bottom'?: string;
    '--swiper-pagination-top'?: string;
    '--swiper-pagination-left'?: string;
    '--swiper-pagination-right'?: string;
    '--swiper-pagination-bullet-size'?: string;
    '--swiper-pagination-bullet-horizontal-gap'?: string;
    '--swiper-pagination-transform'?: string; // 如果你用來置中

    // 其他 Swiper 相關的變數 (例如 Navigation 或 Progressbar)
    '--swiper-navigation-color'?: string;
    '--swiper-navigation-size'?: string;
    '--swiper-navigation-top-offset'?: string;
    '--swiper-navigation-sides-offset'?: string;
    '--swiper-navigation-next-el-text-color'?: string;
    '--swiper-navigation-prev-el-text-color'?: string;

    '--swiper-theme-color'?: string; // Swiper 的主要主題色變數
    // ... 其他你可能會用到的 Swiper 變數
  }
}