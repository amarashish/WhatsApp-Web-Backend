import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const serviceKeyPath = process.env.SERVICE_KEY_PATH || '/etc/secrets/keys.json'; 

const storage = new Storage({
  keyFilename: serviceKeyPath,
});

const bucket = storage.bucket(process.env.BUCKET);

export default bucket;
