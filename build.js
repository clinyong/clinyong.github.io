const fs = require('fs');

const showdown = require('showdown'),
    converter = new showdown.Converter();

function extractMetaData(text) {
    const lines = text.split("\n")

    let i = 0;
    for (; i < lines.length; i++) {
        if (lines[i] === '---') {
            break;
        }
    }

    const meta = {}
    lines.slice(0, i).forEach(line => {
        const items = line.split(":")
        meta[items[0]] = items[1].trim()
    })

    const content = lines.slice(i + 1).join('\n');
    return {
        meta,
        content
    }
}

const text = fs.readFileSync('./src/1.md', 'utf8');
const result = extractMetaData(text);
const {title, date} = result.meta;
const body = converter.makeHtml(result.content);
const html = `
<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>Leodots</title>
    <link rel="stylesheet" href="/css/content.css">
</head>

<body>
    <div class="container">
        <header class="head">
            <div class="brand">
                <span><a href="/">LeoDots</a></span>
            </div>
        </header>
        <div class="content">
            <h1 class="title">${title}</h1>
            ${body}
            <div class="date">
                ${result.meta.date}
            </div>
        </div>
    </div>
</body>

</html>
`;

fs.writeFileSync('./archives/1.html', html, 'utf8');