import fs from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';

export async function getLicenseText() {
  const licensePath = path.resolve(process.cwd(), 'LICENSE.md');
  return fs.readFile(licensePath, 'utf-8');
}

export async function getContentLicenseHtml() {
  const contentLicensePath = path.resolve(process.cwd(), 'LICENSE-CONTENT.md');
  const md = await fs.readFile(contentLicensePath, 'utf-8');
  return marked.parse(md);
}
