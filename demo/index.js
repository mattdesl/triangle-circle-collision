require('canvas-testbed')(render)
var collision = require('../')


var tris = [
    [[25,50], [20,140], [70, 140]],
    [[350,300], [450,450], [350, 450]], 
    [[150, 450], [250,450], [150,300]], //same but reverse order
    [[100,150], [100,70], [170, 40]]
]

var radius = 25,
    mouse = require('./touch-position')({ position: [150, 150] })

function render(ctx, width, height) {
    ctx.clearRect(0, 0, width, height)

    var inside = false
    tris.forEach(function(t) {
        if (collision(t, mouse, radius))
            inside = true
    })

    ctx.beginPath()
    ctx.arc(mouse[0], mouse[1], radius, 0, Math.PI*2, false)
    ctx.lineWidth = 3
    ctx.strokeStyle = inside ? 'red' : 'black'
    ctx.stroke()

    tris.forEach(function(t) {
        ctx.beginPath()
        ctx.strokeStyle = 'black'
        t.forEach(function(pos, i) {
            ctx.lineTo(pos[0], pos[1])
        })
        ctx.closePath()
        ctx.stroke()
    })
    console.log(mouse)
}