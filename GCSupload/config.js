import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Storage } from '@google-cloud/storage';
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceKey = join(__dirname, './keys.json');

const storage = new Storage({
  keyFilename: serviceKey,
})

const bucket = storage.bucket(process.env.BUCKET);

export default bucket;

