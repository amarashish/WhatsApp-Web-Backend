import bucket from "./config.js";


export const uploadFileGCS = async(myFile)=>{
  try {
      const imageUrl = await uploadFile(myFile);
      return imageUrl;

    } catch (error) {      
      console.log(error.message);
    }
  }

const uploadFile = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file;

  const blob = bucket.file(originalname.replace(/ /g, "_"));

  const blobStream = blob.createWriteStream({ resumable: false });

  blobStream.on('finish', () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    
    resolve(publicUrl);

  }).on('error', () => {
    reject(`Unable to upload image, something went wrong`);

  }).end(buffer);
})