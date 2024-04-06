# Simple Project Logs

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/tako-dayo8/project-simple-logs/blob/main/LICENSE)

## what is this?

this library is a library for outputting simple logs with color to the console.

このライブラリは、コンソールに色をつけてシンプルなログを出力するためのライブラリです。

## download

add .npmrc file

```.npmrc
@tako-dayo8:registry=https://npm.pkg.github.com
```

run command

```bash
npm install @tako-dayo8/project-simple-logs
```

## Usage

```javascript
import SimpleConsoleLogs from '@tako-dayo8/project-simple-logs';

const simpleConsoleLogs = new SimpleConsoleLogs('You Prohject Name');

SimpleConsoleLogs.info('Hello World');
```

```bash
[You Prohject Name][XX:XX:XX] Hello World
```

## API

info(message: string): void

warn(message: string): void

error(message: string , forcedEnd?: boolean): void

success(message: string): void

| type    | color  |
| ------- | ------ |
| info    | blue   |
| warn    | yellow |
| error   | red    |
| success | green  |

## License

MIT

## changeLog

-   2024/04/06
    -   1.0.0
        -   release
