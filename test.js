var assert = require('assert');

const counter = (state=0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

describe('counter increase 1', function() {
  it('should return 1 when there is no input provided', function() {
    assert.equal(1, counter(null ,{type:'INCREMENT'}));
  });
});

describe('counter increase 1', function() {
  it('should return 1 when the provided input is 0', function() {
    assert.equal(1, counter(0, {type:'INCREMENT'}));
  });
});

describe('counter increase 1', function() {
  it('should return 2 when the provided input is 1', function() {
    assert.equal(2, counter(1, {type:'INCREMENT'}));
  });
});

describe('counter decrease 1', function() {
  it('should return 1 when the provided input is 2', function() {
    assert.equal(1, counter(2, {type:'DECREMENT'}));
  });
});