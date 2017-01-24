var gulp = require('gulp')
var replace = require('gulp-replace')
var rename = require('gulp-rename')

var npmDir = './npm-constructicon'

var componentsFiles = [
  './dist/components/**/*.js',
  '!./dist/components/**/__tests__/*.js'
]

var rootFiles = [
  './dist/*.js'
]

var otherFiles = [
  './dist/**/*.js',
  '!./dist/components/**/*.js',
  '!./dist/*.js'
]

/**
* Place components straight into the root directory and update references
*/
gulp.task('npm-prep-components', function() {
  return gulp.src(componentsFiles)
    .pipe(replace('../..', '..'))
    .pipe(gulp.dest(npmDir))
})

/**
* Place in our root file and update components references
*/
gulp.task('npm-prep-root', function() {
  return gulp.src(rootFiles)
    .pipe(replace(/.\/components\/(.*)/g, function(match) {
      return match.replace(/.\/components\//g, './');
    }))
    .pipe(gulp.dest(npmDir))
})

/**
* Place other files in as they are
*/
gulp.task('npm-prep-other', function() {
  return gulp.src(otherFiles)
    .pipe(gulp.dest(npmDir))
})

/**
* Copy over necessary meta files
*/
gulp.task('npm-prep-meta', function() {
  return gulp.src(['README.md', 'package.json'])
    .pipe(gulp.dest(npmDir))
})


gulp.task('npm-prepare', [
  'npm-prep-components',
  'npm-prep-root',
  'npm-prep-other',
  'npm-prep-meta'
])
