import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

// get one user
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    if (!user) {
      res.status(404).json({ error: 'No user found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

// update user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) {
      return res.status(404).json({ error: 'No user found' });
    }
    if (username) user.username = username;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        username: user.username,
        password: user.password,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

// delete one user
export const DeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  }
};
