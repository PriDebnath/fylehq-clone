import { Component } from '@angular/core';
import { BlogNav } from '../../../../models/nav.model';

@Component({
  selector: 'app-dropdown-content-resources',
  templateUrl: './dropdown-content-resources.component.html',
  styleUrl: './dropdown-content-resources.component.css',
})
export class DropdownContentResourcesComponent {
  learn_list = [
    {
      title: 'Blog',
      link: 'https://www.fylehq.com/blog',
      svg: `
<svg  style="overflow: visible"  width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.979614" y="0.986816" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <g clip-path="url(#clip0_1355_392)">
  <path d="M11.3046 15.75H30.7366" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M32.1366 37.9118V34.1738" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M32.1366 24.92V11.312H11.3046" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M11.3046 12.7119V37.9119H32.1366" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M20.0546 19.6699H14.9166V24.1079H20.0546V19.6699Z" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M14.9166 28.4897H25.3046" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M14.9166 32.7739H23.7086" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M14.6926 14.1677C15.0405 14.1677 15.3226 13.8857 15.3226 13.5377C15.3226 13.1898 15.0405 12.9077 14.6926 12.9077C14.3446 12.9077 14.0626 13.1898 14.0626 13.5377C14.0626 13.8857 14.3446 14.1677 14.6926 14.1677Z" fill="#2172E8"/>
  <path d="M17.2406 14.1677C17.5885 14.1677 17.8706 13.8857 17.8706 13.5377C17.8706 13.1898 17.5885 12.9077 17.2406 12.9077C16.8927 12.9077 16.6106 13.1898 16.6106 13.5377C16.6106 13.8857 16.8927 14.1677 17.2406 14.1677Z" fill="#2172E8"/>
  <path d="M19.7746 14.1677C20.1225 14.1677 20.4046 13.8857 20.4046 13.5377C20.4046 13.1898 20.1225 12.9077 19.7746 12.9077C19.4267 12.9077 19.1446 13.1898 19.1446 13.5377C19.1446 13.8857 19.4267 14.1677 19.7746 14.1677Z" fill="#2172E8"/>
  <path d="M25.3046 24.1079H23.1346" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M30.2046 32.1437L27.4886 32.7737L28.1186 30.0577L35.8186 21.5737L37.9046 23.6597L30.2046 32.1437Z" stroke="#ED3868" stroke-linejoin="round"/>
  <path d="M33.8866 23.5059L35.9726 25.5919" stroke="#ED3868" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_1355_392">
  <rect width="28" height="28" fill="white" transform="translate(10.6046 10.6118)"/>
  </clipPath>
  </defs>
</svg>

`,
    },
    {
      title: 'Help center',
      link: 'https://help.fylehq.com/?_gl=1*1ds71h2*_gcl_au*MTQ2NjY4OTkyMC4xNzIzNjM1ODcw',
      svg: `
<svg  style="overflow: visible"
  width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.979614" y="0.986816" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M18.0524 13.4197V13.0286C18.0506 12.8048 18.0929 12.5829 18.1771 12.3754C18.2612 12.168 18.3855 11.9791 18.5428 11.8195C18.7001 11.66 18.8873 11.5329 19.0939 11.4456C19.3004 11.3583 19.5221 11.3124 19.7464 11.3105" stroke="#ED3868" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.0045 18.8252V37.8497H25.9205" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M21.4547 13.4199H30.3727V19.3424" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M15.3507 13.4199H20.2927" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M30.3727 29.6367V34.2322" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M31.0307 34.2322H15.3507V16.2134" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M19.1864 20.4312H23.7224" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M19.1864 23.7974H22.6024" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M19.1864 27.1499H22.6024" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M19.7467 11.3105C20.201 11.3142 20.6354 11.4969 20.9553 11.8187C21.2752 12.1405 21.4547 12.5754 21.4547 13.0286V13.6013" stroke="#ED3868" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.4548 12.9165V16.2269C21.4548 16.4825 21.3531 16.7277 21.1719 16.9085C20.9907 17.0892 20.745 17.1907 20.4888 17.1907V17.1907C20.2326 17.1907 19.9869 17.0892 19.8058 16.9085C19.6246 16.7277 19.5228 16.4825 19.5228 16.2269V15.7101" stroke="#ED3868" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.5646 28.1133L36.9106 31.4796" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M30.4566 29.4128C32.8767 29.4128 34.8386 27.4366 34.8386 24.9989C34.8386 22.5611 32.8767 20.585 30.4566 20.585C28.0365 20.585 26.0746 22.5611 26.0746 24.9989C26.0746 27.4366 28.0365 29.4128 30.4566 29.4128Z" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
</svg>

`,
    },
    {
      title: 'Guides & EBooks',
      link: 'https://www.fylehq.com/resources/guide',
      svg: `
<svg  style="overflow: visible"
    width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.979614" y="0.986816" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M29.9002 37.2256H16.3084C16.0143 37.2238 15.7234 37.1652 15.4524 37.0531C15.1813 36.941 14.9354 36.7777 14.7287 36.5723C14.522 36.367 14.3586 36.1238 14.2477 35.8565C14.1369 35.5892 14.0807 35.3031 14.0826 35.0146V18.5142" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M33.7537 29.2412V33.6632" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M26.8256 12.4268H20.2176C19.9234 12.4285 19.6325 12.4872 19.3615 12.5992C19.0904 12.7113 18.8445 12.8747 18.6378 13.08C18.4312 13.2853 18.2677 13.5285 18.1568 13.7958C18.046 14.0631 17.9898 14.3492 17.9917 14.6377V31.4521" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M34.9501 29.2411V12.4268H32.1677" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M34.9501 33.6632H20.2176C19.923 33.6632 19.6312 33.6058 19.3593 33.4944C19.0875 33.3829 18.8408 33.2196 18.6338 33.014C18.4267 32.8083 18.2633 32.5643 18.1531 32.2962C18.0429 32.0281 17.9881 31.7412 17.9918 31.4522V31.4522C17.9899 31.1636 18.046 30.8775 18.1569 30.6103C18.2678 30.343 18.4312 30.0997 18.6379 29.8944C18.8446 29.6891 19.0905 29.5258 19.3616 29.4137C19.6326 29.3016 19.9235 29.243 20.2176 29.2412H34.9501" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M32.1678 18.1184L30.081 16.6308L27.9943 18.1184V11.2944H32.1678V18.1184Z" stroke="#ED3868" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
    },
  ];

  customers_list = [
    {
      title: 'Customer success',
      link: 'https://www.fylehq.com/customer-success',
      svg: `
<svg  style="overflow: visible" 
    width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.18433" y="1.31445" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M20.189 29.4199L21.309 28.8599C22.429 28.2999 23.129 27.1799 23.409 26.0599L24.109 22.1399C24.109 21.7199 24.529 21.4399 24.949 21.5799C25.929 21.8599 26.629 22.6999 26.769 23.6799L27.049 27.5999C27.049 28.0199 27.329 28.2999 27.749 28.2999H31.389C32.509 28.2999 33.209 29.2799 33.069 30.2599L31.949 36.6999C31.809 37.5399 31.109 38.2399 30.129 38.2399H23.969C23.549 38.2399 23.269 38.2399 22.989 38.0999" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M16.4095 38.2397H19.6295C20.0495 38.2397 20.3295 37.9597 20.3295 37.5397V29.4197C20.3295 28.9997 20.0495 28.7197 19.6295 28.7197H16.4095C16.1295 28.7197 15.8495 28.9997 15.8495 29.2797V37.5397C15.7095 37.9597 15.9895 38.2397 16.4095 38.2397Z" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M24.8091 11.6401L25.6491 13.4601C25.7891 13.7401 26.0691 14.0201 26.4891 14.0201L28.4491 14.1601L26.9091 15.4201C26.6291 15.7001 26.4891 15.9801 26.6291 16.4001L27.0491 18.3601L25.3691 17.2401C25.0891 17.1001 24.6691 17.1001 24.3891 17.2401L22.5691 18.5001L22.9891 16.5401C23.1291 16.1201 22.9891 15.8401 22.7091 15.5601L21.1691 14.3001L23.1291 14.1601C23.5491 14.1601 23.8291 13.8801 23.9691 13.6001L24.8091 11.6401Z" stroke="#2172E8" stroke-miterlimit="10" stroke-linejoin="round"/>
  <path d="M34.469 15.8389L35.449 18.2189L38.109 18.4989L36.149 20.1789L36.709 22.6989L34.469 21.2989L32.229 22.6989L32.929 20.1789L30.829 18.4989L33.489 18.2189L34.469 15.8389Z" stroke="#FF3366" stroke-miterlimit="10" stroke-linejoin="round"/>
  <path d="M15.1492 15.8389L16.1292 18.2189L18.7892 18.4989L16.6892 20.1789L17.3892 22.6989L15.1492 21.2989L12.9092 22.6989L13.4692 20.1789L11.5092 18.4989L14.1692 18.2189L15.1492 15.8389Z" stroke="#69A6FF" stroke-miterlimit="10" stroke-linejoin="round"/>
</svg>


`,
    },
    {
      title: 'Customer reviews',
      link: 'https://www.fylehq.com/customers/reviews',
      svg: `
<svg  style="overflow: visible"" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.18433" y="1.19385" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M24.8093 30.3353C26.4794 30.3353 27.8333 28.9939 27.8333 27.3393C27.8333 25.6846 26.4794 24.3433 24.8093 24.3433C23.1392 24.3433 21.7853 25.6846 21.7853 27.3393C21.7853 28.9939 23.1392 30.3353 24.8093 30.3353Z" stroke="#69A6FF" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M30.6193 38.0635V34.6755C30.6193 33.7095 29.8773 32.9395 28.9673 32.9395H20.6513C19.7413 32.9395 18.9993 33.7235 18.9993 34.6755V38.0635" stroke="#343493" stroke-width="1.08" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M35.1973 11.519H14.1833C12.7833 11.519 11.6493 12.653 11.6493 14.053V18.291C11.6493 19.9479 12.9924 21.291 14.6493 21.291H15.7893L17.8769 23.7113L19.9181 21.291H35.1973C36.8073 21.291 38.1093 19.989 38.1093 18.379V14.431C38.1093 12.821 36.8073 11.519 35.1973 11.519Z" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M18.1059 14.1162L18.7579 15.7264L20.5012 15.8595L19.1705 16.9906L19.583 18.6939L18.1059 17.7757L16.6155 18.6939L17.028 16.9906L15.7106 15.8595L17.4405 15.7264L18.1059 14.1162Z" fill="#FF3366"/>
  <path d="M24.8793 14.1162L25.5447 15.7264L27.2746 15.8595L25.9439 16.9906L26.3564 18.6939L24.8793 17.7757L23.4022 18.6939L23.8014 16.9906L22.484 15.8595L24.214 15.7264L24.8793 14.1162Z" fill="#FF3366"/>
  <path d="M31.6528 14.1162L32.3181 15.7264L34.0481 15.8595L32.7307 16.9906L33.1299 18.6939L31.6528 17.7757L30.1757 18.6939L30.5882 16.9906L29.2574 15.8595L30.9874 15.7264L31.6528 14.1162Z" fill="#FF3366"/>
</svg>


`,
    },
    {
      title: 'Implementation',
      link: 'https://www.fylehq.com/implementation',
      svg: `
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.18433" y="0.493652" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <g clip-path="url(#clip0_1358_534)">
  <path d="M30.38 26.7704C30.95 26.0204 30.97 25.2304 30.97 25.2304L32.66 24.8504L32.61 22.3904L30.92 22.1104C30.76 21.3604 30.25 20.6204 30.25 20.6204L31.15 19.1504L29.34 17.4504L27.92 18.4204C27.44 18.1604 26.92 17.9604 26.37 17.8304L25.98 16.1704L23.48 16.2204L23.17 17.8904C23.17 17.8904 22.15 18.1604 21.52 18.7404L19.71 17.7104L18.03 19.4304L19.74 21.4604" stroke="#69A6FF" stroke-miterlimit="10"/>
  <path d="M19.74 20.8203C19.31 21.3103 18.99 22.5403 18.99 22.5403L17.15 22.7203L17.2 25.1803L18.9 25.4903C19.05 26.0203 19.28 26.5203 19.56 26.9703L18.65 28.4203L20.46 30.1203L21.89 29.1603C22.37 29.4203 22.88 29.6203 23.43 29.7503L23.83 31.4103L26.33 31.3603L26.65 29.6803C27.19 29.5303 27.69 29.3103 28.16 29.0303L29.93 30.1503L31.55 28.6503L29.99 26.4803" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M36.81 27.2101C35.65 31.1501 32.5 34.4301 28.2 35.6101C21.58 37.4301 14.71 33.6201 12.86 27.0801" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M12.89 20.3602C14.06 16.4202 17.2 13.1402 21.5 11.9602C28.12 10.1402 34.99 13.9502 36.84 20.4902" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M37.72 18.4604L37.07 20.4304L33.24 19.2004" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M38.32 16.6504L37.72 18.4604" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M16.51 28.2704L12.66 27.1104L11.48 30.9104" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M25.03 25.7601C26.0572 25.7601 26.89 24.9408 26.89 23.9301C26.89 22.9194 26.0572 22.1001 25.03 22.1001C24.0027 22.1001 23.17 22.9194 23.17 23.9301C23.17 24.9408 24.0027 25.7601 25.03 25.7601Z" stroke="#FF3366" stroke-miterlimit="10"/>
  <path d="M26.35 25.2199C25.62 25.9399 24.45 25.9399 23.72 25.2199C22.99 24.4999 22.99 23.3499 23.72 22.6299" stroke="#FF3366" stroke-miterlimit="10"/>
  </g>
  <defs>
  <clipPath id="clip0_1358_534">
  <rect width="27.79" height="25.57" fill="white" transform="translate(11 11)"/>
  </clipPath>
  </defs>
</svg>

`,
    },
  ];

  company_list = [
    {
      title: 'About us',
      link: 'https://www.fylehq.com/company',
      svg: `
<svg  style="overflow: visible"  width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.979614" y="0.903809" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M21.3846 30.269H17.7446V37.829H21.3846V30.269Z" stroke="#ED3868" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M37.2046 19.9092H27.1246V37.8292H37.2046V19.9092Z" stroke="#2172E8" stroke-miterlimit="10" stroke-linejoin="round"/>
  <path d="M27.1246 37.8288H12.1446V16.5488" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M12.1446 13.749L27.1246 11.229V37.829" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M16.4846 25.7891H22.7846" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M16.4846 21.8691H22.7846" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M16.4846 17.9492H22.7846" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M33.5646 23.689H30.6246V28.309H33.5646V23.689Z" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M30.6246 30.8291H33.5646" stroke="#ED3868" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
</svg>

`,
    },
    {
      title: 'Partners',
      link: 'https://www.fylehq.com/partners',
      svg: `
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.30536" y="0.9375" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M21.9903 24.1424L19.3303 23.4424" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M30.9503 32.1226L33.4703 31.1426" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3903 31.2822L26.4703 34.0822C27.0303 34.5022 27.7303 34.5022 28.2903 33.9422C28.7103 33.3822 28.7103 32.5422 28.1503 32.1222" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M21.4303 32.9624L24.2303 35.4824C24.7903 35.9024 25.4903 35.9024 26.0503 35.3424C26.4703 34.7824 26.4703 33.9424 25.9103 33.5224" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M16.2503 32.4023L21.1503 36.1823C21.7103 36.6023 22.4103 36.6023 22.9703 36.0423C23.3903 35.4823 23.3903 34.6423 22.8303 34.2223" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M29.1303 29.4625L24.9303 25.8225L21.8503 28.0625C21.4303 28.3425 20.8703 28.4825 20.4503 28.0625L19.7503 27.2225L22.6903 23.8625C23.6703 22.7425 25.2103 22.1825 26.7503 22.4625L30.6703 23.3025" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.1303 20.6426L18.3503 21.7626C18.7703 21.9026 19.0503 22.4626 18.9103 22.8826L15.6903 32.4026C15.5503 32.8226 14.9903 33.1026 14.5703 32.9626L12.1903 32.1226C11.7703 31.9826 11.4903 31.4226 11.6303 31.0026L14.0103 23.5826" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M37.1103 27.9224L34.7303 20.7824C34.5903 20.5024 34.3103 20.2224 33.8903 20.3624L31.0903 21.3424C30.8103 21.4824 30.5303 21.7624 30.6703 22.1824L34.0303 32.1224C34.1703 32.4024 34.4503 32.6824 34.8703 32.5424L38.2303 31.2824" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.4903 29.7424L28.9903 32.9624C29.5503 33.3824 30.2503 33.3824 30.8103 32.8224C31.2303 32.2624 31.2303 31.4224 30.6703 31.0024L26.1903 26.9424" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M25.4902 15.6026V12.6626" stroke="#FF3366" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M29.4103 16.5826L31.5103 14.6226" stroke="#FF3366" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M21.4303 16.5826L19.3303 14.6226" stroke="#FF3366" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
</svg>

`,
    },
  ];

  resourse_popular_list: BlogNav[] = [
    {
      title: 'Business Expense Categories Cheat Sheet',
      link: 'https://www.fylehq.com/blog/business-expense-categories',
      img_src: '/assets/images/blog-4.png',
      link_text: 'Read more'
    },
  ];
}
