import { expect, it, describe } from 'bun:test';
import { Hello } from './index';

describe('hello', () => {
    it('shows Hello World', () => {
        expect(Hello.hello()).toEqual('Hello World!');
    });
});
