

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


// build
function buildStyle() {
  return src("scss/**/*.scss").pipe(sass()).pipe(dest("css"));
}


// watch
function watchTask() {
  watch(["scss/**/*.scss"], buildStyle);
}

exports.default = series(buildStyle, watchTask);


// webpack 
// grunt, gulp
// webpack 


//// Task runner

//// Build tools


/// DRY - Principle -