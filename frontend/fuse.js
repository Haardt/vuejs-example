const {
  FuseBox,
  VueComponentPlugin,
  QuantumPlugin,
  ConsolidatePlugin,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  Sparky,
  JSONPlugin,
  EnvPlugin,
  FuseTestRunner
} = require('fuse-box');

const {exec} = require('child_process');

const serviceVersion = '0.0.4';

let fuse;
let isProduction = false;

Sparky.task('set-prod', () => {
  isProduction = true
});

Sparky.task('clean', () => Sparky.src('./dist').clean('dist/'))
Sparky.task('watch-assets', () => Sparky.watch(['./assets'], {base: './app'}).dest('./dist'))
Sparky.task('copy-assets', () => Sparky.src(['./assets'], {base: './app'}).dest('./dist'))

Sparky.task('config', () => {
  fuse = FuseBox.init({
                        homeDir: './app',
                        output: 'dist/$name.js',
                        //hash: isProduction,
                        sourceMaps: !isProduction,
                        cache: !isProduction,
                        log: true,
                        debug: true,
                        target: "browser",
                        useTypescriptCompiler: true,
                        polyfillNonStandardDefaultUsage: true,
                        plugins: [
                          VueComponentPlugin({
                                               style: [
                                                 SassPlugin({
                                                              importer: true
                                                            }),
                                                 CSSResourcePlugin(),
                                                 CSSPlugin({
                                                             group: 'components.css',
                                                             inject: 'components.css'
                                                           })
                                               ]
                                             }),
                          ConsolidatePlugin({
                                              engine: 'pug'
                                            }),
                          EnvPlugin({
                                      configurationUrl: getConfigurationUrl()
                                    }),
                          CSSPlugin(),
                          WebIndexPlugin({
                                           path: ('/'),
                                           template: './app/index.html'
                                         }),
                          isProduction && QuantumPlugin({
                                                          bakeApiIntoBundle: 'vendor',
                                                          uglify: true,
                                                          treeshake: true
                                                        }),
                          JSONPlugin()
                        ]
                      })
})

function getConfigurationUrl () {
  if (isProduction) {
    return `/assets/prod-app-config.json`
  }
  return '/assets/local-app-config.json';
}


Sparky.task('runFuse', () => {
  if (!isProduction) {
  fuse.dev({
             open: true,
             port: 8080
           },
           devServer => {
    devServer.httpServer.app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, DELETE, OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    if ('OPTIONS' === req.method) {
      res.sendStatus(200)
    } else {
      next();
    }
  })
})
}

const vendor = fuse.bundle('vendor')
  .instructions('~ main.ts')

const app = fuse.bundle('app')
  .instructions('!> [main.ts]')

if (!isProduction) {
  app.watch().hmr()
}
})

Sparky.task('test', ['clean', 'watch-assets', 'config'], () => {
  fuse.bundle("app")
  .test("[**/**.test.ts]")
return fuse.run()
})

Sparky.task('default', ['clean', 'watch-assets', 'config', 'runFuse'], () => {
  return fuse.run()
})

Sparky.task('dist', ['clean', 'copy-assets', 'set-prod', 'config', 'runFuse'], () => {
  return fuse.run()
})

