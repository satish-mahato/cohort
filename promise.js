function satishPromise() {
    let p = new Promise(function(resolve) {
      setTimeout(() => {
          resolve("hi i m promise");
      }, 2000);});
      return p;
    }
  function main() {
    satishPromise().then(function (value) {
      console.log(value);
    });
  }
  main();