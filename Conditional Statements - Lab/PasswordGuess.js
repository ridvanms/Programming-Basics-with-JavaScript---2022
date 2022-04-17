function guessing(input) {
  let unknown = input[0];
  const known = "s3cr3t!P@ssw0rd";

  let result = unknown == known ? "Welcome" : "Wrong password!";
  console.log(result);
}
guessing(["s3cr3t!P@ssw0rd"]);
