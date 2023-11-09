import * as fs from 'fs';

type FileLink = { name: string; url: string };
type FileLinksArray = FileLink[];




const validateAndCreatePath = (directoryPath: string) => {
    try {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
            console.log(`Path '${directoryPath}' created successfully.`.bgYellow);
        } else {
            console.log(`Path '${directoryPath}' already exists.`.bgYellow);
        }
    } catch (error) {
        console.error(`Error validating/creating the path '${directoryPath}': ${error}`.bgRed);
    }
}

const generateFileUrls = (host: string | string[] | undefined, filenames: string[]): FileLinksArray => {
    return filenames.map((filename) => {
        return {
            name: filename,
            url: `http://${host}/shared/${encodeURIComponent(filename)}`,
        };
    });
};

export {
    generateFileUrls,
    validateAndCreatePath
}
