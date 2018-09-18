export default class Async {
  constructor(trunck) {
    this.trunck = trunck;
  }

  static unit(obj) {
    return new Async(callback => {
      callback(null, obj);
    });
  }

  excute(callback) {
    this.trunck(callback);
  }

  fmap(transform) {
    return this.then(obj => {
      return Async.unit(transform(obj));
    });
  }

  then(transform) {
    return new Async(callback => {
      this.excute((err, obj) => {
        if (err == null) {
          transform(obj).excute(callback);
        } else {
          callback(err, obj);
        }
      });
    });
  }
}
