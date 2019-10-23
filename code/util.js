const isNatural = param => {
  if (typeof param === 'undefined')
    throw new Error('Parameter to function isNatural should be defined.');
  return typeof param === 'number' && param > 0 && Math.floor(param) === param;
};

const isArrayOfNatural = param => {
  if (typeof param === 'undefined')
    throw new Error(
      'Parameter to function isArrayOfNatural should be defined.'
    );
  if (!Array.isArray(param)) return false;
  let isCollectionNatural = true;
  param.forEach(number => {
    if (!isNatural(number)) isCollectionNatural = false;
  });
  return isCollectionNatural;
};

module.exports = {
  isNatural,
  isArrayOfNatural
};
