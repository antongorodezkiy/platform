const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public');

if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: 'source-map',
    })
    .sourceMaps();
} else {
  mix.version();
}

const vendor = [
    'stimulus', 'turbolinks', 'stimulus/webpack-helpers',
    'jquery', 'popper.js', 'jquery-ui-bundle', 'bootstrap',
    'dropzone', 'nestable', 'select2', 'cropperjs', 'frappe-charts', 'inputmask',
    'simplemde', 'quill', 'axios', 'leaflet', 'codeflask', 'stimulus-flatpickr',
];

mix
  .copy('./node_modules/orchid-icons/src/fonts/', 'public/fonts')
  .sass('resources/sass/app.scss', 'css/orchid.css')
  .js('resources/js/app.js', 'js/orchid.js')
  .extract(vendor)
  .autoload({
      jquery: [
        '$', 'window.jQuery', 'jQuery', 'jquery',
        'bootstrap','jquery-ui-bundle','nestable',
        'select2'
      ],
  });
