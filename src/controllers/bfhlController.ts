import { Request, Response } from 'express';
import { separateData, findHighestLowercaseAlphabet } from '../utils/dataUtils';
import { processFile } from '../utils/fileUtils';

export const getOperationCode = (req: Request, res: Response) => {
  res.status(200).json({ operation_code: 1 });
};

export const processData = (req: Request, res: Response) => {
  const { data, file_b64 } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid data format' });
  }

  const { numbers, alphabets } = separateData(data);

  const highestLowercaseAlphabet = findHighestLowercaseAlphabet(alphabets);

  const { fileValid, fileMimeType, fileSizeKb } = processFile(file_b64);

  const response = {
    is_success: true,
    email: 'rz4377@srmist.edu.in',
    roll_number: 'RA2111003030273',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKb,
  };

  res.json(response);
};