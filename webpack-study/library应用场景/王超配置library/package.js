// this script is used to pack bizseer-x-ai-lab-algorithm npm package
const webpack = require('webpack')
const resolve = (...p) => require('path').resolve(__dirname, ...p)
const Spinner = require('cli-spinner').Spinner
const chalk = require('chalk')
const fse = require('fs-extra')

var spinner = new Spinner(chalk.green('%s Packing bizseer-x-ai-lab-algorithm...'))
spinner.setSpinnerString('⣾⣽⣻⢿⡿⣟⣯⣷')
spinner.start()
const packageInfo = require( resolve( '../package.json' ) )

// 自动更新最后一位版本号
const versionArr = []
packageInfo.packageVersion.split( '.' ).forEach( ( item, index ) => {
  if ( index === 2 )
  {
    item = parseInt( item ) + 1
  }
  versionArr.push( item )
} )
const version = versionArr.join( '.' )


function genPackageJson (packageInfo) {
  const dependencies = {}
  for (let name in packageInfo.dependencies) {
    if (!packageInfo?.peerDependencies?.hasOwnProperty(name)) {
      dependencies[name] = packageInfo.dependencies[name]
    }
  }
  return {
    name: packageInfo.name,
    version,
    peerDependencies: packageInfo.peerDependencies,
    dependencies,
    description: packageInfo.description,
    keywords: packageInfo.keywords,
    license: packageInfo.license,
    main: 'package/index.js',
    typings: 'package/index.d.ts',
    publishConfig: packageInfo.publishConfig
  }
}

function updatePackageJson ( packageInfo, version) {
  packageInfo.packageVersion = version
  return {
    ...packageInfo
  }
}

fse.emptyDirSync(resolve('../package'))

const config = require(resolve('webpack.config.js'))
config.plugins = (config.plugins || []).concat([new webpack.ProgressPlugin((percentage, msg, ...args) => {
  spinner.setSpinnerTitle(chalk.green('%s ' + parseInt(percentage * 100) + '% Packing bizseer-x-ai-lab-algorithm... ' + (args[0] || '')))
  if (percentage >= 1) {
    spinner.stop()
    process.stdout.write('\n')
  }
})])

webpack(config, (err, stats) => {
  if (err) console.error(err)
  else {
    if (stats.hasErrors()) {
      stats.toJson().errors.forEach(e => console.error(e))
      console.error()
    } else {
      if (stats.hasWarnings()) {
        stats.toJson().warnings.forEach(w => console.warn(w))
      }
      fse.writeFileSync(
        resolve('../package/bizseer-x-ai-lab-algorithm/package.json'),
        JSON.stringify(genPackageJson(packageInfo), null, 2)
      )
      fse.copySync(
        resolve('../README.md'),
        resolve('../package/bizseer-x-ai-lab-algorithm/README.md')
      )
      fse.writeFileSync(
        resolve( '../package.json' ),
        JSON.stringify( updatePackageJson(packageInfo, version), null, 2 )
      )
      console.log(chalk.green('🌊 Packing bizseer-x-ai-lab-algorithm successfully'))
    }
  }
})
