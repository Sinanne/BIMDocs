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
export async function getLastUpdated(): Promise<string> {
    const contentDir = path.join(process.cwd(), 'src/content');

    try {
        if (!fs.existsSync(contentDir)) return "28 Jan 2026";

        const files = await fs.promises.readdir(contentDir);
        const mdFiles = files.filter(f => f.endsWith('.md'));

        if (mdFiles.length === 0) return "28 Jan 2026";

        let latestTime = 0;
        for (const file of mdFiles) {
            const stats = await fs.promises.stat(path.join(contentDir, file));
            if (stats.mtimeMs > latestTime) {
                latestTime = stats.mtimeMs;
            }
        }

        return new Date(latestTime).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    } catch (error) {
        console.error('Error getting last updated date:', error);
        return "28 Jan 2026";
    }
}
