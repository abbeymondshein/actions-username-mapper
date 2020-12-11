const core = require("@actions/core");
const fs = require("fs");

(async () => {
  try {
    console.log(process.cwd());
    let file = core.getInput("file", { required: true });
    let githubUsername = core.getInput("github-username", { required: true });
    let obj = JSON.parse(file);
    core.setOutput("slack_id", obj[0][githubUsername]);
  } catch (error) {
    core.setFailed(error.message);
    throw error;
  }
})();

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}
