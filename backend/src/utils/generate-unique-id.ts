import { randomBytes } from 'node:crypto';

export default function generateUniqueId(): string {
  return randomBytes(4).toString('hex');
}
