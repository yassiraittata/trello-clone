import { ID, storage } from "@/appwrite";

async function uploadImage(file: File) {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_BUCKET_ID!,
    ID.unique(),
    file
  );

  return fileUploaded;
}

export default uploadImage;
