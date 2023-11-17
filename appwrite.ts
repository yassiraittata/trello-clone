import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();

console.log(process.env.NEXT_PUBLIC_DATA_BASE_ID!);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APP_WRITE_KEY!);

const account = new Account(client);
const db = new Databases(client);
const storage = new Storage(client);

export { account, client, db, storage, ID };
