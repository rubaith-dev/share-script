import express from "express";
import { Request } from "express";
const router = express.Router();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "share-script",
  api_key: "471657193265582",
  api_secret: "j8Z1Rq2oZp0RgFfKvMVYYdQBMpw",
});

router.post("/upload/initiate", async (req, res) => {
  
  console.log(req.body)

  // const uploadOptions = {
  //   resource_type: "video",
  //   chunk_size: Math.ceil(fileSize / totalChunks),
  // };

  // try {
  //   let result = await cloudinary.uploader.upload_large(null, uploadOptions);
  //   let uploadId = await result.upload_id;

  //   res.json({ uploadId });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Failed to initiate upload" });
  // }
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
