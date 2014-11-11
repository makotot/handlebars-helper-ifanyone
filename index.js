module.exports.ifAnyOne = function () {
  var arg = arguments,
    argLength = arg.length,
    content = arguments[argLength - 1],
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
};
