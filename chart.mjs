import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('./carbonbits.app.yaml', 'utf8')
const parsedConfig = YAML.parse(file)

const version = process.env.VERSION || parsedConfig.version;

// Just set the version in the correct file
const chart_name = `${parsedConfig.account}-${parsedConfig.app}`

const chartFile = fs.readFileSync(`./apps/v0/run/${chart_name}/Chart.yaml`, 'utf8')
const parsedChart = YAML.parse(chartFile)


const toYaml = YAML.stringify({...parsedChart, ...{appVersion:version}})

fs.writeFileSync(`./apps/v0/run/${chart_name}/Chart.yaml`, toYaml, 'utf8')