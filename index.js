var lineCollide = require('line-circle-collision')
var pointInTriangle = require('point-in-triangle')

module.exports = function(triangle, circle, radius) {
    if (pointInTriangle(circle, triangle))
        return true
    if (lineCollide(triangle[0], triangle[1], circle, radius))
        return true
    if (lineCollide(triangle[1], triangle[2], circle, radius))
        return true
    if (lineCollide(triangle[2], triangle[0], circle, radius))
        return true
    return false
}

/*
//an alternative method which is not as robust as barycentric coords
//http://www.phatcode.net/articles.php?id=459

function pointInTriangleOrdered(triangle, point, clockwise) {
  var cx = point[0], cy = point[1],
        t0 = triangle[0], t1 = triangle[1], t2 = triangle[2],
        v1x = t0[0], v1y = t0[1],
        v2x = t1[0], v2y = t1[1],
        v3x = t2[0], v3y = t2[1],
        c1x = cx - v1x, c1y = cy - v1y,
        c2x = cx - v2x, c2y = cy - v2y,
        c3x = cx - v3x, c3y = cy - v3y

    if (clockwise) {
      if (((v2y - v1y)*c1x - (v2x - v1x)*c1y) >= 0 &&
         ((v3y - v2y)*c2x - (v3x - v2x)*c2y) >= 0 &&
         ((v1y - v3y)*c3x - (v1x - v3x)*c3y) >= 0)
           return true
    } else {
      if (((v2y - v1y)*c1x - (v2x - v1x)*c1y) <= 0 &&
         ((v3y - v2y)*c2x - (v3x - v2x)*c2y) <= 0 &&
         ((v1y - v3y)*c3x - (v1x - v3x)*c3y) <= 0)
           return true
    }
    return false
}*/
