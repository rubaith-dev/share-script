import express from "express";
import { Request } from "express";
const router = express.Router();
import * as dotenv from "dotenv";
import multer from "multer";
import cloudinary from "cloudinary";
dotenv.config();

cloudinary.v2.config({
  api_secret: "j8Z1Rq2oZp0RgFfKvMVYYdQBMpw",
  api_key: "471657193265582",
  cloud_name: "dj75yn9h8",
});

const upload = multer( );

router.post("/upload/initiate", upload.single("data"), async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'auto', folder: 'foo' },
        (error, result) => {
          if (error) {
            console.error('Upload error:', error);
            reject(error);
          } else {
            console.log('Public ID:', result?.public_id);
            console.log('URL:', result?.secure_url);
            resolve(result);
          }
        }
      );

      uploadStream.end(req.file?.buffer);
    });

    console.log(result);
    res.send(req.file?.filename);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).send('Upload failed');
  }

  // let fileStream = fs.createReadStream(
  //   path.resolve(
  //     "/Users/rubaith/Documents/Personal projects/Fullstack/share-script/backend" +
  //       "/upload" +
  //       "/9cc25f9612537beeb52a8080ed3d93e0"
  //   ), {highWaterMark:10*1024*1024}
  // );

  // fileStream.on("data", (chunk)=>{
  //   console.log(chunk)
  // })
});

router.post("/upload", async (req: Request, res) => {
  const { fileName, index, totalChunks } = req.body;
  const chunk = req.file;

  console.log(`Received chunk for file ${fileName}`);
  console.log(`Chunk index: ${index}`);
  console.log(`Total chunks: ${totalChunks}`);
  console.log(`Chunk data:`, chunk);

  res.sendStatus(200);
});

export default router;
