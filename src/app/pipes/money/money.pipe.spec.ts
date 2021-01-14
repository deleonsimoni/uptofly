import { MoneyPipe } from './money.pipe';

describe('FormatNumberPipe', () => {
    it('create an instance', () => {
        const pipe = new MoneyPipe();
        expect(pipe).toBeTruthy();
    });
});
