
function satishCallback(callback) {
    setTimeout(() => {
      callback("hi i m callback");
    }, 2000);
  }
  function main() {
    satishCallback(function (value) {
      console.log(value);
    });
  }
  main();