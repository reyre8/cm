class TriangleException extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

module.exports = {
  TriangleException
};
