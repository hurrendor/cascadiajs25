const fs = require('fs');
const path = require('path');
const formatTalks = require('./formatTalks.js');

const filePath = path.join(__dirname, './data/talks.json');
const outputDir = path.join(__dirname, '../talks');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
}

let jsonData;
try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    jsonData = JSON.parse(fileContent);
} catch (err) {
    console.error('Error reading or parsing JSON file:', err);
    process.exit(1);
}

function writeMarkdownFile(filename, content) {
    const mdPath = path.join(outputDir, `${filename}.md`);
    fs.writeFileSync(mdPath, content, 'utf8');
    console.log(`Created: ${mdPath}`);
}

if (Array.isArray(jsonData)) {
    jsonData.forEach((talk, index) => {
        const mdContent = formatTalks(talk);
        writeMarkdownFile(`${talk.slug}`, mdContent);
    });
} else {
    console.log('Unexpected JSON structure:', jsonData);
}
