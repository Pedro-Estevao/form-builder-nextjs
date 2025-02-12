import { execSync } from 'child_process';

const isDevelopment = process.env.NODE_ENV === 'development';

try {
    if (isDevelopment) {
        execSync('bun run prisma:migrate-dev', { stdio: 'inherit' });
    } else {
        execSync('bun run prisma:migrate-prod', { stdio: 'inherit' });
        execSync('bun run prisma:generate', { stdio: 'inherit' });
    }
} catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
}