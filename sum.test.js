const sum = require('./sum');
test ("Get Sum", () => {
    expect(sum(2,6)).toBe(8);
});