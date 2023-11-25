import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// get all categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await prisma.category.findMany();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};
