const { kafka } = require("./client");

const admin = kafka.admin();

const run = async () => {
	await admin.connect();
	const topics = await admin.listTopics();
  console.log("topics", topics);
	await admin.deleteTopics({
    topics: ["rider-update"],
	});
  console.log("topics after", topics);
	await admin.disconnect();
};

run().catch(console.error);
