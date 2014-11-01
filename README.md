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

#### `collide(triangle, circle, radius[, clockwise])`

Returns true if the circle intersects a triangle vertex, edge, or if it's fully enclosed by the triangle. This will test the orientation of the triangle assuming a coordinate space like that in HTML5 canvas (upper left).

If the direction is known, you can provide a boolean to `clockwise` to avoid the additional orientation check. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/triangle-circle-collision/blob/master/LICENSE.md) for details.
