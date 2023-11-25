import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.query;
    let products;
    if (categoryId) {
      products = await prisma.product.findMany({
        where: {
          categoryId: {
            equals: Number(categoryId),
          },
        },
      });
    } else {
      products = await prisma.product.findMany();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

// get one product
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    if (!product) {
      res.status(404).json({ error: 'No product found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

// create a product
export const createProduct = async (req: Request, res: Response) => {
  const { title, categoryId } = req.body;
  try {
    if (!title || !categoryId) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const duplicate = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!duplicate) {
      return res.status(400).json({ message: 'No category found!' });
    }

    const result = await prisma.product.create({
      data: {
        title,
        categoryId,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};
