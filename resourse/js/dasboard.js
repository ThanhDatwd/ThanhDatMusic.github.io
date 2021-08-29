
        let toggle=document.querySelector('#toggle')
        let toggleRs=document.querySelector('#toggleRs')
        let sidebar=document.querySelector('.sidebar')
        let search=document.querySelector('.bx-search')
        toggle.onclick=function(){
            sidebar.classList.toggle('active')
        }
        toggleRs.onclick=function(){
            sidebar.style.display=''
            sidebar.classList.toggle('active')
            console.log('nhận giá trj')
        }
        search.onclick=function(){
            sidebar.classList.toggle('active')
        }
     