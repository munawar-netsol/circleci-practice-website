const sum = require('./sum');
test ("Get Sum", () => {
    expect(sum(2,4)).toBe(6);
});