import fs from 'fs';
import path from 'path';

export async function getDocContent(slug: string): Promise<string | null> {
    const contentDir = path.join(process.cwd(), 'src/content');
    const filePath = path.join(contentDir, `${slug}.md`);

    try {
        if (fs.existsSync(filePath)) {
            return await fs.promises.readFile(filePath, 'utf8');
        }
        return null;
    } catch (error) {
        console.error(`Error reading doc content for ${slug}:`, error);
        return null;
    }
}
