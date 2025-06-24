/* example of JS module importing a C module */
import * as os from "qjs:os";

const isWin = os.platform === 'win32';
const isDarwin = os.platform === 'darwin';
const ext = isWin ? 'dll' : (isDarwin ? 'dylib' : 'so');

const { fib } = await import(`./fib.${ext}`);

console.log("Hello World");
console.log("fib(10)=", fib(10));
