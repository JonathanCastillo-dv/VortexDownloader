import { Request, Response } from 'express';
import { prepareFilesUseCase } from '../../../application/useCases/prepareFiles.useCase';

const getAllFiles = async (req: Request, res: Response) => {
  try {
    const result = await prepareFilesUseCase(req)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send('An error occurred while preparing files.');
  }
};

export { getAllFiles };
