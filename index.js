const core = require("@actions/core");
const fs = require("fs");

(async () => {
  try {
    let file = core.getInput("file", { required: true });
    let githubUsername = core.getInput("github-username", { required: true });

    let data = fs.readFileSync(file, "utf8");
    let obj = JSON.parse(data);
    console.log("PARSED DATA:", obj);
    core.setOutput("slack_id", obj[githubUsername]);
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
