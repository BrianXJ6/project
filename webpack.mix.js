const mix = require('laravel-mix');
require('laravel-mix-imgmin');

mix.extract()
    .vue()
    .js('resources/js/web/web.js', 'public/js')
    .js('resources/js/user/user.js', 'public/js')
    .sass('resources/sass/web.scss', 'public/css')
    .sass('resources/sass/user.scss', 'public/css')
    .imgmin({ input: 'resources/images', output: 'images' });

if (mix.inProduction()) mix.version();

mix.browserSync(process.env.APP_URL).disableSuccessNotifications();

// <script src="/js/manifest.js"></script>
// <script src="/js/vendor.js"></script>
// <script src="/js/app.js"></script>
