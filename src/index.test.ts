import { expect, it, describe } from 'bun:test';
import { hello } from './index';

describe('hello', () => {
    it('prints Hello World', () => {
        const log = console.log;
        let loggedOutput = null;
        console.log = (output) => { loggedOutput = output; };

        hello();

        expect(loggedOutput).toEqual('Hello World!');

        console.log = log;
    });
});
