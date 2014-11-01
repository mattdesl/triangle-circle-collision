var lineCollide = require('line-circle-collision')
var isClockwise = require('is-clockwise')

module.exports = function(triangle, circle, radius, clockwise) {
    if (lineCollide(triangle[0], triangle[1], circle, radius))
        return true
    if (lineCollide(triangle[1], triangle[2], circle, radius))
        return true
    if (lineCollide(triangle[2], triangle[0], circle, radius))
        return true

    if (typeof clockwise !== 'boolean')
        clockwise = isClockwise(triangle)

    var cx = circle[0], cy = circle[1],
        t0 = triangle[0], t1 = triangle[1], t2 = triangle[2],
        v1x = t0[0], v1y = t0[1],
        v2x = t1[0], v2y = t1[1],
        v3x = t2[0], v3y = t2[1]

    if (clockwise) {
        if (((v2x - v1x)*(cy - v1y) - (v2y - v1y)*(cx - v1x)) >= 0  &&
           ((v3x - v2x)*(cy - v2y) - (v3y - v2y)*(cx - v2x)) >= 0  &&
           ((v1x - v3x)*(cx - v3x) - (v1y - v3y)*(cx - v3x)) >= 0)
               return true
    } else {
        if (((v2y - v1y)*(cx - v1x) - (v2x - v1x)*(cy - v1y)) >= 0  &&
           ((v3y - v2y)*(cx - v2x) - (v3x - v2x)*(cy - v2y)) >= 0  &&
           ((v1y - v3y)*(cx - v3x) - (v1x - v3x)*(cx - v3x)) >= 0)
               return true
    }
    return false
}

