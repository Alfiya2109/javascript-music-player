var arr = [
    {SongName:"besabriya",url:"./128-Besabriyaan - M.S. Dhoni - The Untold Story 128 Kbps.mp3",img:"./download.jpeg"},
    {SongName:"lo maan liya" , url:"./128-Lo Maan Liya - Raaz Reboot 128 Kbps.mp3",img:"./img2.jpeg"},
    {SongName:"Main tang Sharbaton Ka" , url:"./128-Main Rang Sharbaton Ka - Phata Poster Nikhla Hero 128 Kbps.mp3",img:"./img3.jpeg"},
    {SongName:"Shiddat" , url:"./128-Shiddat Title Track - Shiddat 128 Kbps.mp3",img:"./img4.jpeg"},
    {SongName:"Shikayat" , url:"./128-Shikayat - AUR 128 Kbps.mp3",img:"./img5.jpeg"},
    {SongName:"Tum Se",url:"./128-Tum Se - Teri Baaton Mein Aisa Uljha Jiya 128 Kbps.mp3",img:"./img6.jpeg"},
    {SongName:"Tum Hi Ho",url:"./128-Tum Hi Ho - Aashiqui 2 128 Kbps.mp3",img:"./img7.jpeg"},
   

];

var allsong = document.querySelector("#all-songs");
var audio = new Audio();
var selecdedsong = 0

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");


function mainfuntion(){
    var cultter = ""

arr.forEach(function(elem,index){
    cultter += ` <div class="song-cards" id = ${index}>
                    <div class="part-1">
                        <img src=${elem.img} alt="">
                        <h2>${elem.SongName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`
            });
            audio.src = arr[selecdedsong].url;
            allsong.innerHTML = cultter;
            
        }
        mainfuntion();
allsong.addEventListener('click',(dets)=>{
    selecdedsong = dets.target.id
    mainfuntion()
    play.innerHTML = '<i class="ri-pause-line"></i>';
flag = 1
    console.log(selecdedsong)
    audio.play()

});
var flag = 0 ;
play.addEventListener('click',()=>{
    if(flag==0){
        play.innerHTML = '<i class="ri-pause-line"></i>';
        mainfuntion();
        audio.play();
        flag = 1;
    }else{
        play.innerHTML = '<i class="ri-play-line"></i>';
        mainfuntion();
        audio.pause();
        flag = 0;
    }
});
forward.addEventListener('click',()=>{
    if(selecdedsong<arr.length-1){
        selecdedsong++
        mainfuntion()
        audio.play()
    }else{ 
        forward.style.opacity = 0.4
    }
});
backward.addEventListener('click',()=>{
    if(selecdedsong>0){
        selecdedsong--
        mainfuntion()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
});













