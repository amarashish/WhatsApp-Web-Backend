import multer, { memoryStorage } from 'multer'

const upload = multer({
  storage: memoryStorage(),
  // limits: {
  //   // no larger than 5mb.
  //   fileSize: 50 * 1024 * 1024,
  // },
})


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });


export default upload;