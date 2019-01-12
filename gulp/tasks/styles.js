var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');			//Smartphone Size automatisiert abspeichern

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {							//Bei Fehlern: Gulp watch nicht unterbrechen
    console.log(errorInfo.toString());							//Dennoch Ausgabe der Fehlermeldung			
    	this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});