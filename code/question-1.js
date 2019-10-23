module.exports = {
  isNullorEmpty: param => {
    if (typeof param === 'undefined')
      throw new Error('Parameter to function isNullorEmpty should be defined.');
    return param === null || (typeof param === 'string' && param.trim() === '');
  }
};
