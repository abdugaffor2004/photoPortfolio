$(function (){

    $('.self-burger').click(function(){
   
        $('.menu').toggleClass('show-menu')
   
    })
   
   
    $('.self-burger').click(function(){
   
        $('.burger').toggleClass('burger-active')
   
    })
   
   }) 
   
   
   const query =   document.querySelector('.button')
   
   
       query.addEventListener('click', () => {
   
   
           const body = document.querySelector('body').classList.toggle('body')
   
   
           const svg_arr = [ '.svg_color1', '.svg_color2', '.svg_color3', '.svg_color4', '.svg_color5', '.svg_color6', '.svg_color7', '.svg_color8'].map( (value) =>{
               
               const svg_black = document.querySelector(value)
               svg_black.classList.toggle('svg_black')
               return svg_black
           }) 
       
       
           const button_arr = ['.Winter', '.Spring', '.Summer', '.Autumn'].map( (value) => {
       
                   const buttonWhite = document.querySelector(value)
                   buttonWhite.classList.toggle('button_2_white') 
                   return buttonWhite       
           
               }  )
            
   
           const font_arr = ['.span1','.span2','.span3','.span4', '.sub-skills', '.sub-price', '.footer_color'].map( (value) => {
           
                   const element = document.querySelector(value)
                   element.classList.toggle('font_black')
                   return element
               } )
       
       })    
   
   
   
       const winterBtn =  document.querySelector('.Winter')
   
       winterBtn.addEventListener('click', () =>{
   
           const portfolioImgs = document.querySelectorAll('.portfolioImg')
   
           portfolioImgs.forEach( (img, index) => img.src = `Winter/${index+1}.jpg`)
            
   
       })
   
   
   
   
   const springBtn =  document.querySelector('.Spring')
   
      springBtn.addEventListener('click', () =>{
   
       const portfolioImgs = document.querySelectorAll('.portfolioImg')
   
           portfolioImgs.forEach( (img, index) => img.src = `Spring/${index+1}.jpg`) 
   
       })
   
   
   const summerBtn =  document.querySelector('.Summer')
   
       summerBtn.addEventListener('click', () =>{
   
        const portfolioImgs = document.querySelectorAll('.portfolioImg')
   
           portfolioImgs.forEach( (img, index) => img.src = `Summer/${index+1}.jpg`)
   
        })    
   
   
   const autumnBtn =  document.querySelector('.Autumn')
   
       autumnBtn.addEventListener('click', () =>{
     
           const portfolioImgs = document.querySelectorAll('.portfolioImg')
     
           portfolioImgs.forEach( (img, index) => img.src = `Autumn/${index+1}.jpg`) 
     
       }) 
   
   
   
   
   
       const i18Obj = {
           'en': {
             'skills': 'Skills',
             'portfolio': 'Portfolio',
             'video': 'Video',
             'price': 'Price',
             'contacts': 'Contacts',
             'hero-title': 'Alexa Rise',
             'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
             'hire': 'Hire me',
             'skill-title-1': 'Digital photography',
             'skill-text-1': 'High-quality photos in the studio and on the nature',
             'skill-title-2': 'Video shooting',
             'skill-text-2': 'Capture your moments so that they always stay with you',
             'skill-title-3': 'Rotouch',
             'skill-text-3': 'I strive to make photography surpass reality',
             'skill-title-4': 'Audio',
             'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
             'winter': 'Winter',
             'spring': 'Spring',
             'summer': 'Summer',
             'autumn': 'Autumn',
             'price-description-1-span-1': 'One location',
             'price-description-1-span-2': '120 photos in color',
             'price-description-1-span-3': '12 photos in retouch',
             'price-description-1-span-4': 'Readiness 2-3 weeks',
             'price-description-1-span-5': 'Make up, visage',
             'price-description-2-span-1': 'One or two locations',
             'price-description-2-span-2': '200 photos in color',
             'price-description-2-span-3': '20 photos in retouch',
             'price-description-2-span-4': 'Readiness 1-2 weeks',
             'price-description-2-span-5': 'Make up, visage',
             'price-description-3-span-1': 'Three locations or more',
             'price-description-3-span-2': '300 photos in color',
             'price-description-3-span-3': '50 photos in retouch',
             'price-description-3-span-4': 'Readiness 1 week',
             'price-description-3-span-5': 'Make up, visage, hairstyle',
             'order': 'Order shooting',
             'contact-me': 'Contact me',
             'send-message': 'Send message'
           },
           'ru': {
             'skills': 'Навыки',
             'portfolio': 'Портфолио',
             'video': 'Видео',
             'price': 'Цены',
             'contacts': 'Контакты',
             'hero-title': 'Алекса Райс',
             'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
             'hire': 'Пригласить',
             'skill-title-1': 'Фотография',
             'skill-text-1': 'Высококачественные фото в студии и на природе',
             'skill-title-2': 'Видеосъемка',
             'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
             'skill-title-3': 'Ретушь',
             'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
             'skill-title-4': 'Звук',
             'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
             'winter': 'Зима',
             'spring': 'Весна',
             'summer': 'Лето',
             'autumn': 'Осень',
             'price-description-1-span-1': 'Одна локация',
             'price-description-1-span-2': '120 цветных фото',
             'price-description-1-span-3': '12 отретушированных фото',
             'price-description-1-span-4': 'Готовность через 2-3 недели',
             'price-description-1-span-5': 'Макияж, визаж',
             'price-description-2-span-1': 'Одна-две локации',
             'price-description-2-span-2': '200 цветных фото',
             'price-description-2-span-3': '20 отретушированных фото',
             'price-description-2-span-4': 'Готовность через 1-2 недели',
             'price-description-2-span-5': 'Макияж, визаж',
             'price-description-3-span-1': 'Три локации и больше',
             'price-description-3-span-2': '300 цветных фото',
             'price-description-3-span-3': '50 отретушированных фото',
             'price-description-3-span-4': 'Готовность через 1 неделю',
             'price-description-3-span-5': 'Макияж, визаж, прическа',
             'order': 'Заказать съемку',
             'contact-me': 'Свяжитесь со мной',
             'send-message': 'Отправить'
           }
         }
   
   
         
         $(function() {
           $('.translate').click(function() {
             var lang = $(this).attr('id');
       
             $('.lang').each(function(index, item) {
               $(this).text(i18Obj[lang][$(this).attr('key')]);
             });
           });
         });



const player = document.querySelector('.player')
const video = player.querySelector('.player_video')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.filled_progress')


const play_btn = player.querySelector('.togglePlay')
const pause_btn = player.querySelector('.togglePause')
const volume = player.querySelector('.player_slider')
const volume_btn = player.querySelector('.volume_btn')
const mute_btn = player.querySelector('.mute_btn')

const slider = document.getElementById("volume")
const min = slider.min
const max = slider.max
const value = slider.value

const video_svg = player.querySelector('.video_svg')
const video_svg0 = player.querySelector('.video_svg0')
const photo0 = document.querySelector('.photo')



/* 01  Визуальное изменение кнопки пауза. И пауза самого видео. ------------------------------------------------ */
const togglePlay = () => video.paused ? video.play() : video.pause();


function changeButtonPlay (){

    if(this.paused){

        pause_btn.style.opacity = '0%'
        play_btn.style.opacity = '100%'
       }
    
       else {
    
        play_btn.style.opacity = '0%'
        pause_btn.style.opacity = '100%'
        
       }

}
 /*------------------------------------------------------------------------------------------------------*/



/* 02 Визуальное изменение кнопки беззвука. И функция беззвука самого видео. ---------------------------------*/
const toggleMute = () => video.muted === false ? video.muted = true : video.muted = false;

function changeButtonVolume(){

    if(video.muted){
        volume_btn.style.opacity = '0%'
        mute_btn.style.opacity = '100%'
    }


    else{
        volume_btn.style.opacity = '100%'
        mute_btn.style.opacity = '0%'
    }


}
/* ----------------------------------------------------------------------------------------------------*/



/* 03 обновление значения диапазона у ползунка звук.  ------------------------------------------------------------*/
function handleRangeUpdate (){
    video[this.name]= this.value
}
/*---------------------------------------------------------------------------------------------*/



/* 04 Визуальное обозначение значения таймига видео ввиде золотой полосы.-------------------------------- */ 
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.width = `${percent}%`
}
/*-------------------------------------------------------------------------------------------------------*/



/* 05 Функция перематывания видео через перетаскивание ползунка ------------------------------------------ */
function scrub(event){

const scrubTime = (event.offsetX/progress.offsetWidth)*60
video.currentTime = scrubTime

}
/*-----------------------------------------------------------------------------------------------------*/


/* 06 Появление и исчезновение кнопки play/pause  ------------------------------------------ */

const video_svgDisapearing = () => video.paused ? video_svg.style.opacity = '100%' : video_svg.style.opacity = '0%'

/*-----------------------------------------------------------------------------------------------------*/


const video_svgDisapearing0 = () => {
    photo0.style.opacity = '0%';
    photo0.style.visibility = 'hidden'
}


/* 01 --------------------------------------------------------------------------------------------- */
video.addEventListener('click', togglePlay)

video.addEventListener('play', changeButtonPlay)

video.addEventListener('pause', changeButtonPlay)

play_btn.addEventListener('click', togglePlay)

pause_btn.addEventListener('click', togglePlay)



/*--------------------------------------------------------------------------------------------------*/



/* 02 -------------------------------------------------------------------------------------------------*/
volume_btn.addEventListener('click', toggleMute)

mute_btn.addEventListener('click', toggleMute)

volume_btn.addEventListener('click', changeButtonVolume)

mute_btn.addEventListener('click', changeButtonVolume)
 /*---------------------------------------------------------------------------------------------------*/



/* 03 ----------------------------------------------------------------------------------------------- */
volume.addEventListener('change', handleRangeUpdate)

volume.addEventListener('mousemove', handleRangeUpdate)
/*------------------------------------------------------------------------------------------------*/



/* 04 ------------------------------------------------------------------------------------------------*/
video.addEventListener('timeupdate', handleProgress)
/*----------------------------------------------------------------------------------------------------*/



/* 05 ------------------------------------------------------------------------------------------------*/
progress.addEventListener('click', scrub)

progress.addEventListener('mousemove', (e) => mousedown && scrub(e))

progress.addEventListener('mousedown', (e) => mousedown = true)

progress.addEventListener('mouseup', (e) => mousedown = false)
/*--------------------------------------------------------------------------------------------------------------*/



/* 06 ------------------------------------------------------------------------------------------------*/
video_svg.addEventListener('click', togglePlay )

video.addEventListener('play', video_svgDisapearing)

video.addEventListener('pause', video_svgDisapearing)
/*--------------------------------------------------------------------------------------------------------------*/


video_svg0.addEventListener('click', video_svgDisapearing0 )
video_svg0.addEventListener('click', togglePlay )




 
slider.style.background = `linear-gradient(to right, #b9a055 0%, #b9a055 ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #b9a055 0%, #b9a055 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
};