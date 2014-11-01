var collide = require('./')
var test = require('tape').test

var triangle = [[350,300], [450,450], [350, 450]]
var reversed = triangle.slice().reverse()

test('detect if a 2D triangle and circle collide', function(t) {
    var radius = 25

    function run(tri, cw, msg) {
        t.equal(collide(tri, [336, 464], radius, cw), true, 'vertex'+msg)
        t.equal(collide(tri, [396, 455], radius, cw), true, 'edge0'+msg)
        t.equal(collide(tri, [407, 386], radius, cw), true, 'edge1'+msg)
        t.equal(collide(tri, [346, 408], radius, cw), true, 'edge0'+msg)
        t.equal(collide(tri, [386, 414], radius, cw), true, 'enclosed'+msg)
        t.equal(collide(tri, [300, 405], radius, cw), false, 'outside'+msg)
    }

    run(triangle, undefined, ' dirA')
    run(reversed, undefined, ' dirB')
    run(triangle, true, ' specific dirA')
    run(reversed, false, ' specific dirB')

    t.end()
})