const core = require("@actions/core");

(async () => {
  try {
    console.log(process.cwd());
    let file = core.getInput("file", { required: true });
    let githubUsername = core.getInput("github-username", { required: true });
    let parsedMapping = JSON.parse(file);
    const slackId = parsedMapping[0][githubUsername]
      ? parsedMapping[0][githubUsername]
      : githubUsername;
    core.setOutput("slack_id", slackId);
  } catch (error) {
    core.setFailed(error.message);
    throw error;
  }
})();
