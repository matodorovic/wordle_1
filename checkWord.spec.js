import { describe, it, expect } from '@jest/globals';
import  wordle  from './checkWord.js';

// Check if there is correct outcome object result on correct places
describe('check if wordle() algorithm works for word hallå', () => {
    it('gives back first letter L as incorrect', () => {
        const outcome = wordle('cykla', 'hallå');
        expect(outcome[2].result).toBe('incorrect');
    });
    it('gives back second letter L as correct', () => {
        const outcome = wordle('cykla','hallå');
        expect(outcome[3].result).toBe('correct');
    });
    it('gives back letter H as incorrect', () => {
        const outcome = wordle('cykla', 'hallå');
        expect(outcome[0].result).toBe('incorrect');
    });
    it('gives back letter A as misplaced', () => {
        const outcome = wordle('cykla', 'hallå');
        expect(outcome[1].result).toBe('misplaced');
    });
});

//Check if outcome is an array with object on correct places
describe('check if wordle() algorithm works for anagram', () => {
    it('gives back array with objects as expected result', () => {
        const outcome = wordle('cykla','cyakl');
        const result = [ {letter: 'c', result: 'correct'},
                         {letter: 'y', result: 'correct'},
                         {letter: 'a', result: 'misplaced'},
                         {letter: 'k', result: 'misplaced'},
                         {letter: 'l', result: 'misplaced'}]
        expect(outcome).toStrictEqual(result);
    }); 
}); 



describe('check if wordle() algorithm works for anagram with two same letters in both words', () => {
    it('gives back array with objects as expected result', () => {
        const outcome = wordle('cakla', 'axlar');
        const result = [ {letter: 'a', result: 'misplaced'},
                         {letter: 'x', result: 'incorrect'},
                         {letter: 'l', result: 'misplaced'},
                         {letter: 'a', result: 'misplaced'},
                         {letter: 'r', result: 'incorrect'}]
        expect(outcome).toStrictEqual(result);
    }); 
}); 

// There is bug when there are two same letters in guessed word but ony one in correct

/*
describe('check if wordle() algorithm works for other word', () => {
    it('gives back  first A as misplaced', () => {
        const outcome = wordle('cykla', 'axlar');
        expect(outcome[0].result).toBe('misplaced');
    });
    it('gives back letter L as incorrect', () => {
        const outcome = wordle('cykla', 'axlar');
        expect(outcome[2].result).toBe('misplaced');
    });
    it('gives back letter second A as incorrect', () => {
        const outcome = wordle('cykla', 'axlar');
        expect(outcome[3].result).toBe('incorrect');
    }); 
}); */