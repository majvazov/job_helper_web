import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { addSampleJobs } from '../src/services/jobService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Adding sample jobs...');
try {
  await addSampleJobs();
  console.log('Sample jobs added successfully!');
} catch (error) {
  console.error('Error adding sample jobs:', error);
} 