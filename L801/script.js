let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let d = new Date().getMinutes();
    if (d % 2 == 0) {
      resolve(d);
    } else reject("არაკორექტული დრო");
  }, 10000);
});

p.then(
  result => alert(result),
  error => alert(error)
);