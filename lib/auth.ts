import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

// Mock user database (replace with real DB)
const users: { [key: string]: any } = {
  'user@example.com': {
    id: '1',
    email: 'user@example.com',
    password: 'password',
    name: 'Test User',
    role: 'user',
  },
  'admin@example.com': {
    id: '2',
    email: 'admin@example.com',
    password: 'password',
    name: 'Admin User',
    role: 'admin',
  },
};

export function createToken(user: User): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): User | null {
  try {
    return jwt.verify(token, JWT_SECRET) as User;
  } catch (error) {
    return null;
  }
}

export function getUserByEmail(email: string): any {
  return users[email.toLowerCase()];
}

export function getAllUsers(): any[] {
  return Object.values(users);
}