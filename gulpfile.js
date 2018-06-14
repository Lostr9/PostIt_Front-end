var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});

gulp.task('default', ['watch']);
