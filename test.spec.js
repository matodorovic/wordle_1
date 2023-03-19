import { describe, it, expect } from '@jest/globals';
import  wordle  from './wordle.js';


describe('wordle()', () => {
    it('gives back second letter L as correct', () => {
        const result = wordle('hallå');
        expect(result[3].result).toBe('correct');
    });
    it('gives back letter H as incorrect', () => {
        const result = wordle('hallå');
        expect(result[0].result).toBe('incorrect');
    });
    it('gives back letter A as misplaced', () => {
        const result = wordle('hallå');
        expect(result[1].result).toBe('misplaced');
    });
});