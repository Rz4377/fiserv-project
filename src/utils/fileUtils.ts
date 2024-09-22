
import { Buffer } from 'buffer';

export const processFile = (file_b64: string | undefined) => {
  let fileValid = false;
  let fileMimeType: string | null = null;
  let fileSizeKb: string | null = null;

  if (file_b64) {
    try {
      const buffer = Buffer.from(file_b64, 'base64');
      fileSizeKb = (buffer.length / 1024).toFixed(2);

      fileMimeType = getMimeType(buffer);
      fileValid = true;
    } catch (error) {
      fileValid = false;
    }
  }

  return { fileValid, fileMimeType, fileSizeKb };
};

const getMimeType = (buffer: Buffer): string => {
  const fileSignature = buffer.toString('hex', 0, 4).toUpperCase();
  switch (fileSignature) {
    case 'FFD8FFE0':
    case 'FFD8FFE1':
      return 'image/jpeg';
    case '89504E47':
      return 'image/png';
    default:
      return 'application/octet-stream';
  }
};