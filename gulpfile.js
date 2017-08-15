var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel'),
    config = {
      style: {
        main: './app/sass/app.scss',
        watch: './app/**/*.scss',
        ouput: './www/css'
      },
      js: {
        main: './app/js/app.js',
        watch: './app/js/**/*.js',
        ouput: './www/js',
        controller: './app/controllers/*.js',
        controllerOut: './www/controller'
      },
      jade: {
        main: './app/index.jade',
        watch: './app/**/*.jade',
        ouput: './www',
        views: './app/views/*.jade',
        viewsOuput: './www/views'
      }
    };

gulp.task('server', function (){
  gulp.src('./www')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8088,
      livereload: true
    }));
});

gulp.task('bower', function() {
  return bower({
    directory: config.bower.main})
    .pipe(gulp.dest(config.bower.ouput))
});

gulp.task('build:css', function (){
  gulp.src(config.style.main)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.style.ouput));
});

gulp.task('build:js', function() {
	return gulp.src(config.js.main)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(config.js.ouput));
});

gulp.task('build:jade', function(){
  return gulp.src(config.jade.main)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.jade.ouput));
});

gulp.task('build:sections', function() {
  return gulp.src(config.jade.views)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.jade.viewsOuput));
});

gulp.task('build:controllers', function() {
	return gulp.src(config.js.controller)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(config.js.controllerOut));
});

gulp.task('watch', function() {
  gulp.watch(config.js.watch, ['build:js']);
  gulp.watch(config.style.watch, ['build:css']);
  gulp.watch(config.jade.watch, ['build:jade']);
  gulp.watch(config.jade.views, ['build:sections']);
  gulp.watch(config.js.controller, ['build:controllers']);
});

gulp.task('build', ['build:css', 'build:js', 'build:jade', 'build:sections', 'build:controllers'])

gulp.task('default', ['server', 'watch', 'build']);
