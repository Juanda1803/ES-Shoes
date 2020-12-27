const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', () => {
  describe('when receives an entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('client', 'create');
      const expect = 'client created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when receives an entity and an action and is a list', () => {
    it('should return the respective message with entity in plural', () => {
      const result = buildMessage('client', 'list');
      const expected = 'client listed';
      assert.strictEqual(result, expected);
    });
  });
});
