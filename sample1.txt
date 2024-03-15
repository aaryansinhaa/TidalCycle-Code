Pattern.prototype.kolam = (await import('https://algopattern.github.io/kolam/strudel-kolam/kolam.js')).kolam;

const p = "{[t*3,x] s*4 t*2 s*3 t*2 s*2 t s*2 t*2 s*3 t*2 s*4 t*3 s t s}%8"

window.path = ''

stack(
  p.kolam(),
  sound(p.inhabit({t: "bd", s: "hh", x: "cp"})
    .late(1/16))
    .bank("RolandTR808").color("grey"),
).slow(2)
