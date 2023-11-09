type FileLink = { name: string; url: string };
type FileLinksArray = FileLink[];

const generateFileUrls = (host: string | string[] | undefined, filenames: string[]): FileLinksArray => {
    return filenames.map((filename) => {
        return {
            name: filename,
            url: `http://${host}/shared/${encodeURIComponent(filename)}`,
        };
    });
};

export {
    generateFileUrls
}
