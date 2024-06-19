import { module, test } from 'qunit';
import { setupTest } from 'sample-ember-started/tests/helpers';

module('Unit | Route | scientists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:scientists');
    assert.ok(route);
  });
});
