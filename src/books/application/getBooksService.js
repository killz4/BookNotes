const BadArgumentError = require('../../common/exceptions/badArgumentError');

module.exports = class GetBooksService {
  constructor(repository) {
    this._repository = repository;
  }

  async getBooksForUser(user) {
    if (user == null || user == undefined) {
      throw new BadArgumentError('User cannot be null or undefined');
    }
    return await this._repository.getAllBooksOfUser(user);
  }
};
