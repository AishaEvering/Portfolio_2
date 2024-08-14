export const createFileFromPath = async (path: string, fileName: string): Promise<File> => {
    // Fetch the image
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error('Failed to fetch the image.');
    }

    // Convert the response to a Blob
    const blob = await response.blob();

    // Create and return a File object
    return new File([blob], fileName, { type: blob.type });
};