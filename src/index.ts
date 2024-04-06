import colors from './consoleColors';
import { exit } from 'process';

export default class SimpleConsoleLogs {
    private projectName: string;

    /**
     * Create a new ColorConsole instance
     * @constructor
     * @param inputProjectName The name of the project to log messages for [inputProjectName][time] message
     */
    constructor(inputProjectName: string) {
        this.projectName = inputProjectName;
    }

    /**
     * Log an info message
     * @param message The message to log
     */
    public info(message: string): void {
        const time = getTime();

        console.log(colors.blue(`[${this.projectName}]${time} ${message}`));
    }

    /**
     * Log a warning message
     * @param message The message to log
     */
    public warn(message: string): void {
        const time = getTime();

        console.warn(colors.yellow(`[${this.projectName}]${time} ${message}`));
    }

    /**
     * Log an error message
     * @param message The message to log
     * @param forcedEnd Whether to force the process to end after logging the message (optional, default: false)
     */
    public error(message: string, forcedEnd?: boolean): void {
        const time = getTime();

        console.error(colors.red(`[${this.projectName}]${time} ${message}`));

        if (forcedEnd) exit(1);
    }

    /**
     * Log a success message
     * @param message The message to log
     */
    public success(message: string): void {
        const time = getTime();

        console.log(colors.green(`[${this.projectName}]${time} ${message}`));
    }
}

/**
 *  Get the current time in the format [HH:MM:SS]
 * @returns The current time in the format [HH:MM:SS]
 */
function getTime(): string {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    return `[${hours}:${minutes}:${seconds}]`;
}
