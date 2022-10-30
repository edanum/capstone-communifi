export async function uploadOnCloudinary(fileObject) {
  const formData = new FormData();
  for (const file of fileObject) {
    formData.append("file", file);
  }

  formData.append("upload_preset", "communifi_expenses");

  const uploadedFiles = await fetch(
    "https://api.cloudinary.com/v1_1/dvhhhirfj/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((response) => response.json());

  return uploadedFiles;
}
