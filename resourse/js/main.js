
  
       const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    const cdThumb = $(".cd-thumb");
    const songName=$(".song-thumb h3")
    const singerName=$(".song-thumb span")
    const audio = $("#audio");
    const playBtn = $(".btn-toggle-play");
    const progress = $("#progress");
    const prevBtn = $(".btn-prev");
    const nextBtn = $(".btn-next");
    const randomBtn = $(".btn-random");
    const repeatBtn = $(".btn-repeat");  
    const playlist = $(".playlist");
    const albumlist=$(".app__album-list")
   const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [ 
        {
        name: "Tu Phir Se Aana",
        singer: "Raftaar x Salim Merchant x Karma",
        path: "./alanwalker.mp3",
        image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
        name: "Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: "./alanwalker.mp3",
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
        name: "Naachne Ka Shaunq",
        singer: "Raftaar x Brobha V",
        path:
            "./alanwalker.mp3",
        image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
        name: "Mantoiyat",
        singer: "Raftaar x Nawazuddin Siddiqui",
        path: "./alanwalker.mp3",
        image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
        name: "Aage Chal",
        singer: "Raftaar",
        path: "./alanwalker.mp3",
        image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
        name: "Damn",
        singer: "Raftaar x kr$na",
        path:
            "./alanwalker.mp3",
        image:
            "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
        },
        {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "./alanwalker.mp3",
        image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
    ],
    handleRender:function(){
        const songTime=(audio.duration/60).toFixed(2)
        const htmls=this.songs.map(function(song,index){
            return ` <div class="song ${index==app.currentIndex ? 'active':''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="song__detail">
                        <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                        </div>
                        <p class="duration">${songTime}</p>
                        <div class="option">
                            <i class='bx bxs-microphone-alt'></i>
                            <i class='bx bx-heart' ></i>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>    
                 </div> `
        })
        playlist.innerHTML=htmls.join('')
    },
    definePropertise:function(){
        Object.defineProperty(this,'currentSong',{
        get:function(){
            return this.songs[this.currentIndex]
        }
    })
    },
     handleEvent:function(){
         playlist.onscroll=function(){
             console.log(playlist)
             var albumlist_Height=albumlist.offsetHeight
             console.log(albumlist_Height)
         }
         const _this=this
        // xử lí animate đĩa quay
        const cdThumbAnimate=cdThumb.animate([
            {transform:'rotate(360deg)'}
        ],
        {
            duration:10000,
            iterations:Infinity
        })
        cdThumbAnimate.pause()
            
        
        // xử lý khi user play bài hát 
        playBtn.onclick=function(){
            if(_this.isPlaying){
                audio.pause()
            }
            else{
                audio.play()
            }
            audio.onplay=function(){
                _this.isPlaying=true
                cdThumbAnimate.play()
            }
            audio.onpause=function(){
                _this.isPlaying=false
                cdThumbAnimate.pause()
            }
            // 
            audio.ontimeupdate=function(){
               progress.value =audio.currentTime/audio.duration*100
                
            }
        }
        // xử lý khi người dùng muốn tua thời gian
        progress.oninput=function(){
            seekTime=audio.duration/100*progress.value
            audio.currentTime=seekTime
        }
        // xử lý khi next bài hát
        nextBtn.onclick=function(){
            if(_this.isRandom){
                _this.randomSong()
            }
            else{
                _this.nextSong()
            }
            _this.handleRender()
            audio.play()
            _this.isPlaying=true
        }
        //  xử lí  khi prev bài  hát 
        prevBtn.onclick=function(){
            _this.prevSong()
            _this.handleRender()
            audio.play()
           _this.isPlaying=true

        }
        randomBtn.onclick=function(){
           _this.isRandom=!_this.isRandom
           if(_this.isRandom){
               randomBtn.classList.add('active')
           }
           else{
               randomBtn.classList.remove('active')
           }
        }
        // xử lí khi  user muốn nghe lại bài hát
        repeatBtn.onclick=function(){
            _this.isRepeat=!_this.isRepeat
            if(_this.isRepeat){
               repeatBtn.classList.add('active')
           }
           else{
               repeatBtn.classList.remove('active')
           }
        }
        // Xử lí khi kết  thúc bài hát
        audio.onended=function(){
            if(_this.isRepeat){
                audio.play()
            }
            else{
                nextBtn.click()
            }
        }
        // xử lý khi user muốn chọn bài hát từ thẻ song
        playlist.onclick=function(e){
            songNode=e.target.closest('.song:not(.active)')
            if(songNode||e.target.closest('.option')){
                _this.currentIndex=Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.handleRender()
                audio.play()
                _this.isPlaying=true
                console.log(_this.isPlaying)
            }
        }

     },
    loadCurrentSong:function(){
        console.log(this.currentSong)
       songName.textContent=this.currentSong.name
       singerName.textContent=this.currentSong.singer
       cdThumb.style.backgroundImage=`URL(${this.currentSong.image})`
       audio.src=this.currentSong.path
    },
    nextSong:function(){
        this.currentIndex++
        if(this.currentIndex>=this.songs.length){
            this.currentIndex=0
        }
        console.log(this.currentIndex)
        this.loadCurrentSong()
    },
    prevSong:function(){
        this.currentIndex--
        if(this.currentIndex<0){
            this.currentIndex=this.songs.length-1
        }
        this.loadCurrentSong()

    },
    randomSong:function(){
        let newIndex
        do{
            newIndex=Math.round(Math.random()*this.songs.length)
        }while(newIndex==this.currentIndex)
        this.currentIndex=newIndex
        this.loadCurrentSong()
    },
    start:function(){
        this.definePropertise()
        this.handleRender()
        this.handleEvent() 
        this.loadCurrentSong()
    }

}
app.start()