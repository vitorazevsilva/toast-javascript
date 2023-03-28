const toast = document.getElementById("toast");
let _timeOut = undefined;

const TOAST = {
  success: (message, time = 3000, cb = () => {}) => {
    toast.innerHTML = message;
    toast.style.display = "block";
    toast.classList.add("success");
    _timeOut = setTimeout(function () {
      toast.style.display = "none";
      toast.classList.remove("success");
    }, time);
    return cb();
  },
  error: (message, time = 3000, cb = () => {}) => {
    toast.innerHTML = message;
    toast.style.display = "block";
    toast.classList.add("error");
    _timeOut = setTimeout(function () {
      toast.style.display = "none";
      toast.classList.remove("error");
    }, time);
    return cb();
  },
  warn: (message, time = 3000, cb = () => {}) => {
    toast.innerHTML = message;
    toast.style.display = "block";
    toast.classList.add("warn");
    _timeOut = setTimeout(function () {
      toast.style.display = "none";
      toast.classList.remove("warn");
    }, time);
    return cb();
  },
  info: (message, time = 3000, cb = () => {}) => {
    toast.innerHTML = message;
    toast.style.display = "block";
    toast.classList.add("info");
    _timeOut = setTimeout(function () {
      toast.style.display = "none";
      toast.classList.remove("info");
    }, time);
    return cb();
  },
  clear: () => {
    clearTimeout(_timeOut);
    toast.style.display = "none";
    toast.classList.remove("info");
    toast.classList.remove("success");
    toast.classList.remove("warn");
    toast.classList.remove("error");
  },
};
