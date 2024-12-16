
export const uploadToCloudinary = async (pics) => {

  // Ensure the picture is provided
  if (pics) {

    // Create FormData to send the file to Cloudinary
    const data = new FormData();
    data.append("file", pics);

    // Use your actual Cloudinary upload preset and cloud name
    data.append("upload_preset", "online_food");  // Replace with your actual upload preset
    data.append("cloud_name", "ddrxhaw1i");        // Replace with your actual Cloudinary cloud name

    // Send the request to Cloudinary's upload API
    const res = await fetch(`https://api.cloudinary.com/v1_1/ddrxhaw1i/image/upload`, {
      method: "post",
      body: data,
    });

    if (!res.ok) {
      throw new Error("Cloudinary upload failed");
    }

    // Parse the response to get the URL of the uploaded image
    const fileData = await res.json();

    // Return the file URL from Cloudinary
    return fileData.url;

  } else {
    console.log("No file provided");
  }
};
