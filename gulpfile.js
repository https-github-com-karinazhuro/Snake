let gulp = require('gulp'); // Подключаем Gulp
let sass = require('gulp-sass'); // Подключаем Sass пакет
gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass.sync().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
});
gulp.task('default', gulp.parallel('sass', 'watch'));