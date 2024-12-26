function satishPromise() {
    let p = new Promise(function (resolve) {
      setTimeout(() => {
        resolve(" i am async");
      }, 2000); // 2-second delay
    });
    return p;
  }
  
  async function main() {
    const value = await satishPromise();
    console.log(value);
  }
  
  main();
  