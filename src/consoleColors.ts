const colors = {
    black: (text: string) => `\u001b[30m${text}\u001b[0m`,
    red: (text: string) => `\u001b[31m${text}\u001b[0m`,
    green: (text: string) => `\u001b[32m${text}\u001b[0m`,
    yellow: (text: string) => `\u001b[33m${text}\u001b[0m`,
    blue: (text: string) => `\u001b[34m${text}\u001b[0m`,
    magenta: (text: string) => `\u001b[35m${text}\u001b[0m`,
    cyan: (text: string) => `\u001b[36m${text}\u001b[0m`,
    white: (text: string) => `\u001b[37m${text}\u001b[0m`,
};

export default colors;
