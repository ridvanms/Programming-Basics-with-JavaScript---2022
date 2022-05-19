function guessing(input) {
  let input = input[0];
  const password = "s3cr3t!P@ssw0rd";

  let result = input === password ? "Welcome" : "Wrong password!";
  console.log(result);
}
guessing(["s3cr3t!P@ssw0rd"]);
