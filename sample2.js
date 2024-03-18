// "shark 11" @by eddyflux
// drums reused from coastline

samples('github:eddyflux/crate')

setcps(.35)

chord("<Db7#11 Gm9> C^7@2").dict('ireal-ext')
  .layer(
    x=>x.anchor("g4@3 f4@5")
  .struct("<[x ~@2] ~> x@2 x@5")
  .voicing().piano()
  //.phaser(1.5)
  .vib("3:.25")
  .room(.5)
    ,
    x=>n("0(11,16)/2")
      .mode("root:g2").set(x).voicing()
      .s("sawtooth:0:.8")
      .lpf(400).lpd(.2).lpenv(4)
      .shape(.5).vib("2:.25")
  )
  .stack(
    stack( // DRUMS
    s("bd").struct("<[x*<1 2> [~@3 x]] x>"),
    s("~ [rim, sd:<1 3>]").room("<0 .1>").dec(.08),
    n("[0 <1 3>]*<2!3 4>").s("hh"),
    s("rd:<1!3 2>*2").mask("<0 0 1 1>/16").gain(.5)
  ).bank('crate').fast(2).speed(.9)
)
.pianoroll()
