import path from 'path';
import multer from 'multer';
import mmm from 'mmmagic';

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/svg',
  'image/gif',
];

const uploadMiddleware = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(process.cwd(), 'storage/uploads'));
    },
    filename(req, file, cb) {
      const parts = file.originalname.split('.');
      cb(null, `${Date.now()}.${parts[parts.length - 1]}`);
    },
  }),
  fileFilter(req, file, cb) {
    const magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE);
    const filepath = path.resolve(process.cwd(), 'storage/uploads', file.filename);

    magic.detectFile(filepath, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, ALLOWED_TYPES.includes(result as string));
      }
    });
  },
});

export default uploadMiddleware;
