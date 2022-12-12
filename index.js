const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const width = window.innerWidth 
const height = window.innerHeight

const arrayOfSymbols = ["!", "#", '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ';', ':', '<', '=', '>', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', ']', '^', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '}', '|', '~']

let font = 12
const columns = width / font
const arr = [...new Array(Math.floor(columns))].fill(1)

function draw() {
  ctx.fillStyle = `rgba(0, 0, 0, 0.07)`
  ctx.shadowBlur=0;

  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = "#0f0"
  ctx.font = '30px Matrix'
  ctx.shadowColor="green"
  ctx.shadowBlur=20;


  for (let i = 0; i < arr.length; i++) {
    let txt = arrayOfSymbols[Math.floor(Math.random() * arrayOfSymbols.length)]
    ctx.fillText(txt, i * font, arr[i] * font)
    // arr[Math.floor((Math.random() * arr.length))]++
    arr[i]++

    if (arr[i] * font > height && Math.random() > 0.975) {
      // arr[Math.floor(Math.random() * arr.length)] = 0
        arr[i] = 0

      // arr[i]++
      // let rand = Math.floor(Math.random() * 20)
    } 
  }
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)

// setInterval(draw, 100)

window.addEventListener("resize", () => location.reload())

  