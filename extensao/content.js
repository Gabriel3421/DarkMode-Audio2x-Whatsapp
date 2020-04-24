const interval = setInterval(()=>{
  const header = document.querySelector("header._3auIg")

  if (header){
    clearInterval(interval)

    const button = document.createElement('button') 
  
    button.innerHTML = "2x"
    button.classList.add("button2x")
    button.addEventListener('click', ()=>{
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio)=>{
        audio.playbackRate = 2;
      })
    })
    header.appendChild(button)
    
    const button2 = document.createElement('button') 
  
    button2.innerHTML = "DM"
    button2.classList.add("buttonDM")
    var x = 0
    button2.addEventListener('click', ()=>{
      x ^=1
      const body = document.querySelector("body")
      body.style.filter = `invert(${x})`
      const imgs = document.querySelectorAll('img')
      imgs.forEach((img)=>{
        img.style.filter = `invert(${x})`
      })
      
    })
    header.appendChild(button2)

    const body = document.querySelector("#pane-side")
    body.addEventListener('scroll', ()=>{
      const imgs = document.querySelectorAll('img')
      imgs.forEach((img)=>{
        img.style.filter = `invert(${x})`
      })
    })
   
    body.addEventListener('click', ()=>{
      const imgs = document.querySelectorAll('img')
      imgs.forEach((img)=>{
        img.style.filter = `invert(${x})`
      })
      const chat = document.querySelector("div[class^='_2nmDZ']")
      chat.addEventListener('scroll', ()=>{
      const imgs = document.querySelectorAll('img')
      imgs.forEach((img)=>{
        img.style.filter = `invert(${x})`
      })
    })
    const chat_img = document.querySelector("div[class^='_2nmDZ']")
    chat_img.addEventListener('click', ()=>{
      console.log("entro overlay")
      const imgs = document.querySelectorAll('div[class^="overlay"]')
      console.log(imgs)
      imgs.forEach((img)=>{
        img.style.filter = `invert(${x})`
      })
    })
    })
    
  }
}, 1000)
  


