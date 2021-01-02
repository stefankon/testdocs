// module "my-module.js"
function cube(x, y, z) {
    return x * y * z;
  };
  
  function surface(x, y, z) {
    return 2 * ((x*y) + (x*z) + (y*z));
  };
  
function diagonal(x, y, z) {
  return Math.sqrt(x*x + y*y + z*z);
};
  
 export { cube, surface, diagonal };