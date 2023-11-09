import { Request } from 'express';
import fs from 'fs';
import path from 'path';
import { generateFileUrls } from '../../_common/utils/file.utils';

type FileLink = { name: string; url: string };
type FileLinksArray = FileLink[];

const SHARED_FOLDER_PATH = path.join(__dirname, process.env.SHARED_FOLDER_RELATIVE_PATH ?? '../../../public/shared');

const { readdir } = fs.promises;

const prepareFilesUseCase = async (request: Request): Promise<FileLinksArray> => {
    try {
        const filenames = await readdir(SHARED_FOLDER_PATH);
        const host = request.headers['x-forwarded-host'];
        return generateFileUrls(host, filenames);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export {
    prepareFilesUseCase
}
