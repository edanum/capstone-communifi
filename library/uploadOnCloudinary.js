export async function uploadOnCloudinary(fileObject,uploadPreset) {
  const formData = new FormData();
  for (const file of fileObject) {
    formData.append("file", file);
  }

  formData.append("upload_preset", uploadPreset);

  const uploadedFiles = await fetch(
    "https://api.cloudinary.com/v1_1/dvhhhirfj/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((response) => response.json());

  return uploadedFiles;
}
