const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

c = {
    x:
};

var imageData = ctx.getImageData(c.x - c.radius, c.y - c.radius, c.radius * 2, c.radius * 2);
var pixels = imageData.data;