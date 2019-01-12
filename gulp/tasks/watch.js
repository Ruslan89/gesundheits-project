//Gulp watch: 


var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();   //Browser bei Änderungen automatisch anpassen

gulp.task('watch', function() {						//Was soll bei 'gulp watch' passieren

  browserSync.init({								//Daten sollen automatisch weitergeleitet werden
    notify: false,									//'Schwarze-Box' beim Autorefresh ausblenden
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {			//Browser soll nach neuen Daten, automatisch refreshed werden
    browserSync.reload();							
  });

  watch('./app/assets/styles/**/*.css', function() { //1. Wenn mal Änderungen an beliebigen 'css-daten' vornimmt, 
    gulp.start('cssInject');						 //2. ...dann wird der CSS-Task getriggert
  });

});

gulp.task('cssInject', ['styles'], function() {   //CSS soll auch automatisch gespeichert werden
  return gulp.src('./app/temp/styles/styles.css')   //3. Dann werden alle Änderungen abgespeichert
    .pipe(browserSync.stream());          //4. Und an browserSync geschickt
});