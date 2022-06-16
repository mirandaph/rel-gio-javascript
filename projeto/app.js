setInterval(() =>{
    // Horários

    let horas = document.getElementById("horas")
    let minutos = document.getElementById("minutos")
    let segundos = document.getElementById("segundos")
    let ampm = document.getElementById("ampm")
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ap = h >= 12 ? "PM" : "AM"
    
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s
    ampm.innerHTML = ap

    // Circulos

    let hh = document.getElementById("hh")
    let mm = document.getElementById("mm")
    let ss = document.getElementById("ss")

    hh.style.strokeDashoffset = 440 - (440 * h) / 24
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    // Pontos

    let hPt = document.querySelector(".hPonto")
    let mPt = document.querySelector(".mPonto")
    let sPt = document.querySelector(".sPonto")

    // 360 / 24 = 15
    hPt.style.transform = `rotate(${h * 15}deg)`
    // 360 / 60 = 6
    mPt.style.transform = `rotate(${m * 6}deg)`
    // 360 / 60 = 6
    sPt.style.transform = `rotate(${s * 6}deg)`
    
})


var dark = function(){
    // Background
    document.body.style.backgroundColor = "var(--darkpurple)"

    // Contorno
    hh.style.stroke = "var(--darkpink)"
    mm.style.stroke = "var(--darkpink)"
    ss.style.stroke = "var(--darkpink)"

    // Pontos
    let ptsH = document.getElementById("ptsH")
    ptsH.classList.remove("light")
    ptsH.classList.add("dark")

    let ptsM = document.getElementById("ptsM")
    ptsM.classList.remove("light")
    ptsM.classList.add("dark")

    let ptsS = document.getElementById("ptsS")
    ptsS.classList.remove("light")
    ptsS.classList.add("dark")

    let btn = document.getElementById("btn")
    btn.innerHTML = "Light Mode"
    btn.classList.remove("lightbtn")
    btn.classList.add("darkbtn")

    document.getElementById("btn").setAttribute("onClick", "javascript: light();")
}

var light = function(){
        // Background
        document.body.style.backgroundColor = "var(--lightpurple)"

        // Contorno
        hh.style.stroke = "var(--lightpink)"
        mm.style.stroke = "var(--lightpink)"
        ss.style.stroke = "var(--lightpink)"
    
        // Pontos
        let ptsH = document.getElementById("ptsH")
        ptsH.classList.remove("dark")
        ptsH.classList.add("light")
    
        let ptsM = document.getElementById("ptsM")
        ptsM.classList.remove("dark")
        ptsM.classList.add("light")
    
        let ptsS = document.getElementById("ptsS")
        ptsS.classList.remove("dark")
        ptsS.classList.add("light")
    
        let btn = document.getElementById("btn")
        btn.innerHTML = "Dark Mode"
        btn.classList.remove("darkbtn")
        btn.classList.add("lightbtn")

        document.getElementById("btn").setAttribute( "onClick", "javascript: dark();" )
}