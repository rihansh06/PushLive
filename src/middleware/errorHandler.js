import { Prisma } from '@prisma/client';
import { AppError } from '../utils/AppError.js';

export const errorHandler = (err, req, res, next) => {
  
  if (err instanceof AppError) {
    return res.status(err.status).json({ error: err.message });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') return res.status(409).json({ error: 'Already exists' });
    if (err.code === 'P2025') return res.status(404).json({ error: 'Not found' });
    if (err.code === 'P2003') return res.status(400).json({ error: 'Related record does not exist' });
  }


  if (err instanceof Prisma.PrismaClientInitializationError) {
    return res.status(503).json({ error: 'Database unavailable' });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
};