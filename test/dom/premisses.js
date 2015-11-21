const assert = require('chai').assert;

describe('premisses', () => {
    it('window is global object', () => {
        assert.ok(window);
        assert.strictEqual(window, window.window);
    });
});
