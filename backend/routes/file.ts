import express from 'express';
import { Request } from 'express';
const router = express.Router();
const multer = require('multer');

// Create a multer storage configuration
const storage = multer.memoryStorage();

// Create a multer instance with the storage configuration
const upload = multer({ storage });

router.post("/upload",upload.single('data'), (req:Request,res)=>{
    const { fileName, index, totalChunks } = req.body;
  const chunk = req.file?.buffer;

  console.log(`Received chunk for file ${fileName}`);
  console.log(`Chunk index: ${index}`);
  console.log(`Total chunks: ${totalChunks}`);
  console.log(`Chunk data:`, chunk);

  // Logic for processing the chunk and saving it

  res.sendStatus(200); 
})

export default router