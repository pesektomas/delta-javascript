import chalk from 'chalk';
import Example from './Example.js';

const log = console.log;

log(chalk.blue('Hello world!'));

const example = new Example(10, 10);
log(chalk.hex('#DEADED').bold(example.sum()));
