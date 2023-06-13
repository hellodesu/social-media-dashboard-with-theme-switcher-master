const array_bg_card = [['before:bg-Primary-Facebook',
'./images/icon-facebook.svg',
'src="./images/icon-up.svg"',
'@nathanf',
'1987',
'Followers',
'12 Today',
'class="font-bold text-sm text-Primary-Lime_Green"'
],['before:bg-Primary-Twitter',
'./images/icon-twitter.svg',
'src="./images/icon-up.svg"',
'@nathanf',
'1044',
'Followers',
'99 Today',
'class="font-bold text-sm text-Primary-Lime_Green"'
],['before:bg-gradient-to-r before:from-Primary-Instagram before:to-Primary-Instagram2',
'./images/icon-instagram.svg',
'src="./images/icon-up.svg"',
'@realnathanf',
'11k',
'Followers',
'1099 Today',
'class="font-bold text-sm text-Primary-Lime_Green"'
],['before:bg-Primary-YouTube',
'./images/icon-youtube.svg',
'class="relative rotate-180" src="./images/icon-up-copy.svg"',
'Nathan F.',
'8239',
'Subscribers',
'144 Today',
'class="font-bold text-sm text-Primary-Bright_Red"'
]];
const array_bg_card2 =[['./images/icon-facebook.svg', 'Page Views', '87', '3%', 'src="./images/icon-up.svg"', 'class="font-bold text-sm text-Primary-Lime_Green"'],['./images/icon-facebook.svg', 'Likes', '52', '2%', 'class="font-bold relative rotate-180" src="./images/icon-up-copy.svg"', 'class=" font-bold text-sm text-Primary-Bright_Red"'],['./images/icon-instagram.svg', 'Likes', '5462', '2257%', 'src="./images/icon-up.svg"', 'class="font-bold text-sm text-Primary-Lime_Green"'],['./images/icon-instagram.svg', 'Profile Views', '52k', '1375%', 'src="./images/icon-up.svg"', 'class="font-bold text-sm text-Primary-Lime_Green"'],['./images/icon-twitter.svg', 'Retweets', '117', '303%', 'src="./images/icon-up.svg"', 'class="font-bold text-sm text-Primary-Lime_Green"'],['./images/icon-twitter.svg', 'Likes', '507', '553%', 'src="./images/icon-up.svg"', 'class="font-bold text-sm text-Primary-Lime_Green"'],['./images/icon-youtube.svg', 'Likes', '107', '19%', 'class="font-bold relative rotate-180" src="./images/icon-up-copy.svg"', 'class="font-bold text-sm text-Primary-Bright_Red"'],['./images/icon-youtube.svg', 'Total Views', '1407', '12%', 'class="font-bold relative rotate-180" src="./images/icon-up-copy.svg"', 'class="font-bold text-sm text-Primary-Bright_Red"']];
for (let i= 0; i < array_bg_card.length; i++) {
    
    document.querySelector('main').innerHTML += `
    <div class="bigcard ${array_bg_card[i][0]}" >
    <div class="flex gap-2 items-center">
    <div>
    <img src="${array_bg_card[i][1]}" alt="icon">
    </div>
        <span class="dark:text-Light_Theme-Toggle  text-Light_Theme-Dark_Grayish_Blue font-bold" >${array_bg_card[i][3]}</span>
    </div>
    <div class="flex flex-col text-center gap-2 ">
      <h1 class="text-6xl font-bold dark:text-Dark_Theme-White
      text-Light_Theme-Very_Dark_Blue">${array_bg_card[i][4]}</h1>
     <p class="dark:text-Light_Theme-Dark_Grayish_Blue tracking-[0.3em] text-Light_Theme-Toggle ">${array_bg_card[i][5]}</p>

    </div>
    <div class="flex items-center gap-2">
      <div>
        <img ${array_bg_card[i][2]} alt="arrow">
      </div>
      <span ${array_bg_card[i][7]} >${array_bg_card[i][6]}</span>
    </div>
  </div>`;
}
for (let index = 0; index < array_bg_card2.length; index++) {
    document.querySelector('footer').innerHTML += `
<div class="bigcard flex flex-col justify-between items-center " >
    <div class="flex min-w-full justify-between mb-8 ">
    <p class=" dark:text-Dark_Theme-Desaturated_Blue text-Light_Theme-Dark_Grayish_Blue font-bold">${array_bg_card2[index][1]}</p>
    <div>
      <img src="${array_bg_card2[index][0]}" alt="icon">
    </div>
  </div>
  <div class="flex min-w-full justify-between items-center">
    <h1 class="dark:text-Dark_Theme-White text-4xl font-bold text-Light_Theme-Very_Dark_Blue ">${array_bg_card2[index][2]}</h1>
    <div class=" flex gap-2 items-center ">
        <div>   
        <img ${array_bg_card2[index][4]} alt="icon">
        </div>
      
       <span ${array_bg_card2[index][5]}>${array_bg_card2[index][3]}</span>
    </div>
  </div>
</div>

`;
    
}
document.querySelector("body >div> div.pb-40.px-12.py-4.min-w-full.bg-Light_Theme-Very_Pale_Blue > header > div.pt-8.md\\:pt-0.flex.min-w-full.justify-between.md\\:justify-normal.md\\:min-w-min.md\\:border-none.border-t-Light_Theme-Toggle.border-t.items-center.md\\:gap-4.gap-1 > div").addEventListener('click',()=>{
  if(document.body.classList.contains('dark')){
    document.body.classList.remove('dark');
  }else{
    document.body.classList.add('dark');
  }
})