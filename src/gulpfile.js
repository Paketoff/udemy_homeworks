const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function(){
    return gulp.src("src/sass/*.+(scss|sass)") //возможно тут будет ошибка из-за того, что не указал папку base.
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(gulp.dest("src/css")) //положить скомпилированный файл в определённый адресс
     .pipe(browserSync.stream()); //перезапустить браузер    
});


gulp.task('watch', function(){ //задача, с помощью которой gulp следит за файлами. нужно для всего остального.
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("styles")); //когда задача полностью выполниться, (как я понимаю сохраниться sass-файл) браузер обновиться.
    gulp.watch("src/*.html").on("change", browserSync.reload); //на сохранении html-файла браузер обновляется, как я понял.
});

gulp.task('default', gupl.parallel('watch', 'server', 'styles')); //задача, которая объединяет функционал двух подзадач  выше и будет выполняться по-дефолту.