var storeCacheable = require('../../../lib/index');

describe('store cacheable', function() {
  afterEach(function() {
    storeCacheable.clear();
  });

  it('should be able to set string value', function() {
    storeCacheable.set('key', 'value');

    expect(storeCacheable.get('key')).to.equal('value');
  });

  it('should be able to set json value', function() {
    storeCacheable.set('key', {
      test: 'data'
    });

    expect(storeCacheable.get('key')).to.deep.equal({
      test: 'data'
    });
  });

  it('should be able to remove value', function() {
    storeCacheable.set('key', 'value');
    storeCacheable.remove('key');

    expect(storeCacheable.get('key')).to.be.undefined;
  });

  it('should be able to set value with expire', function(done) {
    storeCacheable.set('key', 'value', 100);

    setTimeout(function() {
      expect(storeCacheable.get('key')).to.equal('value');
    }, 90);

    setTimeout(function() {
      expect(storeCacheable.get('key')).to.be.undefined;
      done();
    }, 110);
  });
});