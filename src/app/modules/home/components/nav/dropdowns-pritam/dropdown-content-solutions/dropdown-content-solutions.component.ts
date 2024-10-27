import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-content-solutions',
  templateUrl: './dropdown-content-solutions.component.html',
  styleUrl: './dropdown-content-solutions.component.css',
})
export class DropdownContentSolutionsComponent {
  by_industry_list = [
    {
      title: 'Construction',
      link: 'https://www.fylehq.com/solutions/industry/construction',
      svg: `
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.26465" y="1.19385" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <g clip-path="url(#clip0_1352_214)">
  <path d="M14.1656 11.519L19.0516 17.007L14.4736 22.509L19.0516 27.843L14.4736 33.051L19.3596 38.119" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M14.1656 11.519H19.3596V38.119H14.1656" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M14.1656 38.119V11.519" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M11.5896 38.1187H21.9356" stroke="#343493" stroke-miterlimit="10"/>
  <path d="M24.9877 23.5728V37.9508H37.4897" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M37.4897 37.9508V23.5728H24.9877" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M30.1256 27.2827H28.2076V29.2707H30.1256V27.2827Z" fill="#B3D2FF"/>
  <path d="M34.2837 27.2827H32.3657V29.2707H34.2837V27.2827Z" fill="#B3D2FF"/>
  <path d="M30.1256 32.2529H28.2076V34.2409H30.1256V32.2529Z" fill="#B3D2FF"/>
  <path d="M34.2837 32.2529H32.3657V34.2409H34.2837V32.2529Z" fill="#B3D2FF"/>
  <path d="M27.6196 17.4407L31.2456 14.3887L35.2216 17.4407" stroke="#69A6FF" stroke-miterlimit="10"/>
  <path d="M31.2456 14.389V11.519" stroke="#69A6FF" stroke-miterlimit="10"/>
  <path d="M12.5697 11.519H33.5837" stroke="#2172E8" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M37.4897 17.5811H24.9877V19.9751H37.4897V17.5811Z" stroke="#FF3366" stroke-miterlimit="10"/>
  </g>
  <defs>
  <clipPath id="clip0_1352_214">
  <rect width="28" height="28" fill="white" transform="translate(10.8896 10.8188)"/>
  </clipPath>
  </defs>
</svg>
`,
    },
    {
      title: 'Non-profit',
      link: 'https://www.fylehq.com/solutions/industry/non-profit-organizations',
      svg: `
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.21216" y="1.29785" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <path d="M30.6051 18.4969C31.2048 17.8267 31.5384 16.9602 31.5431 16.0609C31.5273 15.2982 31.2793 14.5584 30.8323 13.9402C30.3853 13.322 29.7604 12.8547 29.041 12.6008C28.3217 12.3468 27.5419 12.3181 26.8059 12.5186C26.0698 12.7191 25.4123 13.1392 24.9211 13.7229C24.4253 13.1596 23.772 12.7578 23.0455 12.5696C22.3191 12.3814 21.5528 12.4153 20.8459 12.6671C20.1389 12.9188 19.5237 13.3767 19.0796 13.9818C18.6356 14.5868 18.3832 15.311 18.3551 16.0609C18.3559 16.9584 18.6845 17.8247 19.2791 18.4969V18.4969C19.3631 18.5809 19.4331 18.6789 19.5311 18.7629L24.9491 24.6709L30.4231 18.7489L30.6191 18.5389L30.6051 18.4969Z" stroke="#FF3366" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.5552 15.4028C22.2915 15.4028 22.0387 15.5076 21.8523 15.694C21.6659 15.8804 21.5612 16.1332 21.5612 16.3968C21.5627 16.6327 21.6469 16.8606 21.7992 17.0408V17.0408V17.1108L23.1992 18.6788" stroke="#FF3366" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.2891 30.061H11.5371V37.425H15.2891" stroke="#2172E8" stroke-linejoin="round"/>
  <path d="M19.0132 36.221L26.0132 37.481C26.7313 37.6052 27.4696 37.4445 28.0712 37.033L37.6472 31.755C37.9138 31.547 38.0961 31.2495 38.1605 30.9176C38.2248 30.5856 38.1668 30.2415 37.9972 29.949V29.949C37.8377 29.6982 37.6024 29.5046 37.3255 29.3964C37.0487 29.2881 36.7445 29.2709 36.4572 29.347L31.5432 30.565" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M22.5552 32.133L26.3212 32.679C26.675 32.7293 27.0349 32.6491 27.3338 32.4533C27.6327 32.2574 27.8501 31.9594 27.9452 31.615V31.615C27.9948 31.4405 27.976 31.2536 27.8928 31.0924C27.8096 30.9312 27.6682 30.8077 27.4972 30.747L22.2332 28.857C21.455 28.6382 20.6314 28.6382 19.8532 28.857L15.2892 30.173V38.237" stroke="#343493" stroke-linejoin="round"/>
</svg>
`,
    },
    {
      title: 'Technology',
      link: 'https://www.fylehq.com/solutions/industry/information-technology',
      svg: `
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.26465" y="1.19385" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <g clip-path="url(#clip0_1352_251)">
  <path d="M24.8477 37.4187C25.6286 37.4187 26.2617 36.7919 26.2617 36.0187C26.2617 35.2455 25.6286 34.6187 24.8477 34.6187C24.0668 34.6187 23.4337 35.2455 23.4337 36.0187C23.4337 36.7919 24.0668 37.4187 24.8477 37.4187Z" stroke="#FF3366" stroke-miterlimit="10"/>
  <path d="M34.6197 37.4187C35.4006 37.4187 36.0337 36.7919 36.0337 36.0187C36.0337 35.2455 35.4006 34.6187 34.6197 34.6187C33.8388 34.6187 33.2057 35.2455 33.2057 36.0187C33.2057 36.7919 33.8388 37.4187 34.6197 37.4187Z" stroke="#FF3366" stroke-miterlimit="10"/>
  <path d="M15.9857 37.4187C16.7666 37.4187 17.3997 36.7919 17.3997 36.0187C17.3997 35.2455 16.7666 34.6187 15.9857 34.6187C15.2047 34.6187 14.5717 35.2455 14.5717 36.0187C14.5717 36.7919 15.2047 37.4187 15.9857 37.4187Z" stroke="#FF3366" stroke-miterlimit="10"/>
  <path d="M33.1216 28.5708C33.7853 28.5726 34.4429 28.4437 35.0568 28.1914C35.6707 27.9392 36.2289 27.5684 36.6995 27.1004C37.1701 26.6324 37.5439 26.0763 37.7996 25.4638C38.0553 24.8513 38.1878 24.1945 38.1896 23.5308C38.1855 22.4154 37.8125 21.3328 37.1288 20.4515C36.4451 19.5703 35.489 18.9399 34.4096 18.6588C34.5476 18.2049 34.6184 17.7332 34.6196 17.2588C34.6215 16.5964 34.4924 15.9402 34.2398 15.3279C33.9871 14.7156 33.616 14.1592 33.1476 13.6909C32.6792 13.2225 32.1229 12.8513 31.5106 12.5987C30.8982 12.3461 30.242 12.2169 29.5796 12.2188C28.6374 12.2148 27.713 12.4751 26.9112 12.97C26.1094 13.465 25.4624 14.1747 25.0436 15.0188C24.0383 14.1111 22.7301 13.6118 21.3757 13.6188C20.5428 13.616 19.7205 13.8053 18.9726 14.1719C18.2248 14.5386 17.5715 15.0727 17.0636 15.7328C16.639 16.2676 16.3249 16.8815 16.1396 17.5388" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M24.8896 28.5708H27.6477" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M19.8497 28.5708H22.0897" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M15.9437 17.8188C14.718 18.0616 13.6144 18.7216 12.8206 19.6864C12.0267 20.6513 11.5917 21.8614 11.5897 23.1108C11.5832 24.4639 12.0819 25.7707 12.9882 26.7754C13.8945 27.7801 15.1431 28.4104 16.4897 28.5429H17.0917" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M24.8477 33.835V24.147" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M15.9857 34.6186V32.2386H19.8497V25.9946" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M34.6197 34.6189V32.4349H30.4478V25.6729" stroke="#2172E8" stroke-linecap="square" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_1352_251">
  <rect width="28" height="28" fill="white" transform="translate(10.8896 10.8188)"/>
  </clipPath>
  </defs>
</svg>
`,
    },
    {
      title: 'Legal services',
      link: 'https://www.fylehq.com/solutions/industry/legal-services',
      svg: ` 
      
<svg  style="overflow: visible" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.26465" y="1.19385" width="47.25" height="47.25" rx="2.625" stroke="#B3D2FF" stroke-width="0.75"/>
  <g clip-path="url(#clip0_1352_271)">
  <path d="M24.8896 17.063V38.119" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M38.2597 25.7009L33.2197 14.1509L28.1656 25.7009" stroke="#69A6FF" stroke-linejoin="round"/>
  <path d="M38.1896 26.0786C38.153 27.3474 37.6184 28.5508 36.7014 29.4284C35.7844 30.3061 34.5588 30.7875 33.2896 30.7686C32.6495 30.7967 32.0102 30.6972 31.4089 30.4758C30.8077 30.2544 30.2565 29.9156 29.7874 29.4792C29.3183 29.0427 28.9408 28.5172 28.6768 27.9334C28.4128 27.3496 28.2676 26.7191 28.2496 26.0786H38.1896Z" stroke="#69A6FF" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M21.5996 28.2629L16.5597 16.7129L11.5197 28.2629" stroke="#2172E8" stroke-linejoin="round"/>
  <path d="M21.5296 28.6406C21.5115 29.275 21.3685 29.8996 21.1089 30.4787C20.8493 31.0577 20.4781 31.58 20.0165 32.0155C19.5549 32.4511 19.0121 32.7914 18.4189 33.0171C17.8258 33.2427 17.194 33.3493 16.5596 33.3306C15.9252 33.3493 15.2934 33.2427 14.7003 33.0171C14.1071 32.7914 13.5643 32.4511 13.1027 32.0155C12.6411 31.58 12.2699 31.0577 12.0103 30.4787C11.7507 29.8996 11.6077 29.275 11.5896 28.6406H21.5296Z" stroke="#2172E8" stroke-miterlimit="10"/>
  <path d="M24.8896 11.519V14.067" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M26.4857 15.1448L35.3897 13.7588" stroke="#ED3868" stroke-linejoin="round"/>
  <path d="M14.3896 16.9226L23.2797 15.5366" stroke="#ED3868" stroke-linejoin="round"/>
  <path d="M21.1797 38.1187H28.5857" stroke="#343493" stroke-miterlimit="10" stroke-linecap="square"/>
  <path d="M24.8896 16.9367C25.6628 16.9367 26.2896 16.3099 26.2896 15.5367C26.2896 14.7635 25.6628 14.1367 24.8896 14.1367C24.1164 14.1367 23.4896 14.7635 23.4896 15.5367C23.4896 16.3099 24.1164 16.9367 24.8896 16.9367Z" stroke="#ED3868" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_1352_271">
  <rect width="28" height="28" fill="white" transform="translate(10.8896 10.8188)"/>
  </clipPath>
  </defs>
</svg>
`,
    },
  ];

  blog_list = [
    {
      title:
        'Why Should The Construction Industry Solve The Receipt Collection Problem In 2024',
      link: 'https://www.fylehq.com/blog/construction-industry-must-solve-receipt-collection-problem',
      img_src: '/assets/images/blog-1.png',
    },
    {
      title:
        'Non Profit Expense Management IRS Guidelines for Nonprofit Expense Reimbursement Policies',
      link: 'https://www.fylehq.com/blog/nonprofit-expense-reimbursement-policy-guideline',
      img_src: '/assets/images/blog-2.png',
    },
    {
      title: 'Are You Still Chasing Employees for Expense Receipts in 2024?',
      link: 'https://www.fylehq.com/blog/still-chasing-employees-for-expense-receipts',
      img_src: '/assets/images/blog-3.png',
    },
  ];
}
