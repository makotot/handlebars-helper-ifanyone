module.exports.register = function (Handlebars, options, param) {

  /**
   * https://github.com/assemble/handlebars-helpers/blob/master/lib/helpers/helpers-comparisons.js#L336
   * Similar to {{#ifAny}}, accepts multiple arguments but determine if any one of arguments return true.
   *
   */
  Handlebars.registerHelper('ifAnyOne', function () {
    var arg = arguments,
      argLength = arg.length - 1,
      content = arguments[argLength],
      i = 0,
      status = false;

    while (i < argLength) {
      if (arguments[i]) {
        status = true;
        break;
      }

      i++;
    }

    return status ? content.fn(this) : content.inverse(this);
  });
};
