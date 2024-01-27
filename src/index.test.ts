import { expect, it, describe } from 'bun:test';
import { hello } from './index';

describe('hello', () => {
    it('shows Hello World', () => {
        expect(hello()).toEqual('Hello World!');
    });
});
