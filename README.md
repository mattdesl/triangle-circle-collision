# triangle-circle-collision

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Detects if a circle collides with or is fully inside of a triangle. 

```js
var collide = require('triangle-circle-collision')

var triangle = [[350,300], [450,450], [350, 450]]
var point = [25, 15],
    radius = 15

//returns true if collision occurs
console.log( collide(triangle, point, radius) )
```

You may also be interested in:

- [point-in-triangle](https://www.npmjs.org/package/point-in-triangle)
- [line-circle-collision](https://www.npmjs.org/package/line-circle-collision)
- [point-circle-collision](https://www.npmjs.org/package/point-circle-collision)
- [is-clockwise](https://www.npmjs.org/package/is-clockwise)

## Usage

[![NPM](https://nodei.co/npm/triangle-circle-collision.png)](https://nodei.co/npm/triangle-circle-collision/)

#### `collide(triangle, circle, radius)`

Returns true if the circle intersects a triangle edge or if it's fully enclosed by the triangle. Returns false if no collision occurs.

This uses barycentric coordinates to determine if the point is within the circle, and then tests the circle against each edge of the triangle.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/triangle-circle-collision/blob/master/LICENSE.md) for details.
