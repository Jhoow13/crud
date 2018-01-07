var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

var appFiles = {
    htmlfiles:[
        './index.html',
        './app/views/*.html',
        './app/**/*.html'
    ],
    cssFiles:[
        './app/assets/*.less'
    ],
    cssFilesProd:[
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    jsFiles: [
        './app/*.js',
        './app/config/*.js',
        './app/services/**/*.js',
        './app/models/**/*.js',
        './app/controllers/*.js'
    ],
    jsFilesProd:[
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'
    ]
};

gulp.task('clean', function(){
     gulp.src('src/**/*.*')
    .pipe(clean());
});

//** DEV TASKS **//
gulp.task('js', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('src/'));
});

gulp.task('less', function(){
    return gulp.src(appFiles.cssFiles)
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/'));
});

//** BUILD TASKS **//
gulp.task('htmlFiles-prod', function(){
    return gulp.src(appFiles.htmlfiles)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('src/html/'))
});

gulp.task('cssDependences-prod', function(){
    return gulp.src(appFiles.cssFilesProd)
    .pipe(concat('assets.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('cssFiles-prod', function(){
    return gulp.src(appFiles.cssFiles)
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('jsDependences-prod', function(){
    return gulp.src(appFiles.jsFilesProd)
    .pipe(concat('dependences.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('jsFiles-prod', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/'));
});

//** BROWSER RELOAD TASKS **//
gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', ['less', 'js'], function(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

   gulp.watch(appFiles.htmlfiles, ['reload']);
   gulp.watch(appFiles.cssFiles, ['less', 'reload']);
   gulp.watch(appFiles.jsFiles, ['js', 'reload']);

});

gulp.task('build', ['clean', 'htmlFiles-prod', 'cssDependences-prod', 'cssFiles-prod', 'jsDependences-prod', 'jsFiles-prod'])
gulp.task('default',['serve']);
