
const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapboxKey = process.env['MAPBOX_KEY'];

if (!mapboxKey) {
    throw new Error('MAPBOX_KEY not found in .env');
}


const envContent = `
export const environment = {
    MAPBOX_KEY: "${mapboxKey}",
};`

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envContent);
writeFileSync(targetPathDev, envContent);


console.log('Environment files generated successfully.');