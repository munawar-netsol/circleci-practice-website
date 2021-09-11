const sum = require('./sum');
test ("Get Sum", () => {
    expect(sum(4,6)).toBe(10);
});