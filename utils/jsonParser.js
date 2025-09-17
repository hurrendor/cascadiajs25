const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, './data/talks.json');
const outputDir = path.join(__dirname, '../talks');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read and parse the JSON file
let jsonData;
try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    jsonData = JSON.parse(fileContent);
} catch (err) {
    console.error('Error reading or parsing JSON file:', err);
    process.exit(1);
}

// Helper function to write a Markdown file
function writeMarkdownFile(filename, content) {
    const mdPath = path.join(outputDir, `${filename}.md`);
    fs.writeFileSync(mdPath, content, 'utf8');
    console.log(`Created: ${mdPath}`);
}

// Iterate through the JSON
if (Array.isArray(jsonData)) {
    jsonData.forEach((talk, index) => {
        let fileName;
        if (index < 5){
        const mdContent = `# ${talk.title}`;
        writeMarkdownFile(`${talk.slug}`, mdContent);
        }

    });
} else if (typeof jsonData === 'object' && jsonData !== null) {
    Object.entries(jsonData).forEach(([key, value]) => {
        const mdContent = `# ${key}\n\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
        writeMarkdownFile(key, mdContent);
    });
} else {
    console.log('Unexpected JSON structure:', jsonData);
}
