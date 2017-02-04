const fs = require('fs');

const showdown = require('showdown'),
    converter = new showdown.Converter();


const text = fs.readFileSync('./src/1.md', 'utf8');
const body = converter.makeHtml(text);
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
                <span><a href="/">Leodots</a></span>
            </div>
        </header>
        <div class="content">
            ${body}
        </div>
    </div>
</body>

</html>
`;

fs.writeFileSync('./archives/1.html', html, 'utf8');