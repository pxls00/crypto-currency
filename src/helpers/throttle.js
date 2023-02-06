export default function (fn, ms) {
  let isThrollet = false;
  let savedThis;
  let savedArguments;
  function wrapper() {
    if (isThrollet) {
      savedArguments = arguments;
      savedThis = this;
      return;
    }
    fn.apply(this, arguments);
    isThrollet = true;
    setTimeout(function () {
      isThrollet = false;
      if (savedArguments) {
        wrapper.apply(savedThis, savedArguments);
        savedArguments = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
