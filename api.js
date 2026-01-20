import { api, bucket } from "@nitric/sdk";

const main = api("main");
const notes = bucket("notes").allow("read", "write");

main.get("/notes/:title", async ({req, res}) => {
  const { title } = req.params;
  res.body = await notes.file(title).read();
});

main.post("/notes/:title", async ({req, res}) => {
  const { title } = req.params;
  await notes.file(title).write(req.text());
});
