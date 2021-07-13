const mix = require('laravel-mix');
require('laravel-mix-imgmin');

mix.extract()
    .vue()
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .imgmin({ input: 'resources/images', output: 'images' });

if (mix.inProduction()) mix.version();

mix.browserSync(process.env.APP_URL).disableSuccessNotifications();

// <script src="/js/manifest.js"></script>
// <script src="/js/vendor.js"></script>
// <script src="/js/app.js"></script>
