import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const SRC_DIR = path.dirname(fileURLToPath(import.meta.url));
export const ROOT_DIR = path.resolve(SRC_DIR, '..');
export const BRAND_DIR = path.join(ROOT_DIR, 'brand');
export const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');
export const BRIEFS_DIR = path.join(ROOT_DIR, 'briefs');
export const RENDERS_DIR = path.join(ROOT_DIR, 'renders');
export const REPORTS_DIR = path.join(ROOT_DIR, 'reports');
export const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
