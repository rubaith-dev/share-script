import express from "express";
import { Request } from "express";
const router = express.Router();
const multer = require("multer");
import fs from "fs";
import path from "path";
import S3 from "aws-sdk/clients/s3";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const upload = multer();

router.post("/upload/initiate", upload.single("data"), async (req, res) => {
  console.log(req.file, bucketName)
  if (req.file?.buffer) {
    fs.appendFileSync(
      path.join(__dirname, "../upload", req.body.fileName),
      req.file?.buffer
    );
  }

  const fileStream = fs.createReadStream(
    path.join(__dirname, "../upload", req.body.fileName)
  );

  const uploadParams = {
    Bucket: "share-script" ,
    Body: fileStream,
    Key: req.body.fileName,
  };
  // @ts-ignore
  let response = await s3.upload(uploadParams).promise();

  console.log(response);

  res.send("hello hi bye");
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
