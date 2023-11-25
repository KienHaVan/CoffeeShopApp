import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt, { JwtPayload, VerifyErrors, VerifyOptions } from 'jsonwebtoken';

const prisma = new PrismaClient();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.ACCESS_TOKEN_SECRET;

// create a new user
export const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const duplicate = await prisma.user.findUnique({ where: { email } });
    if (duplicate) {
      return res.status(409).json({ message: 'Duplicate user' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'No User Found' });
    }
    const isMatchPassword = await bcrypt.compare(
      password.toString(),
      user.password
    );
    if (!isMatchPassword) {
      return res.status(404).json({ message: 'Wrong password' });
    }

    if (!accessTokenSecret || !refreshTokenSecret) {
      return res
        .status(404)
        .json({ message: 'Error create access and refresh token' });
    }

    const accessToken = jwt.sign(
      {
        email: user.email,
      },
      accessTokenSecret,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      {
        email: user.email,
      },
      refreshTokenSecret,
      { expiresIn: '7d' }
    );
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      // secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  try {
    if (!cookies?.jwt) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }
    const refreshToken = cookies.jwt;

    if (!refreshTokenSecret || !accessTokenSecret) {
      return res
        .status(404)
        .json({ message: 'Error create access and refresh token' });
    }

    jwt.verify(
      refreshToken,
      refreshTokenSecret,
      async (err: any, decoded: any) => {
        if (err || !decoded) {
          return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const email = decoded.email;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        const accessToken = jwt.sign(
          {
            email: user.email,
          },
          accessTokenSecret,
          { expiresIn: '15m' }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong' });
  } finally {
    await prisma.$disconnect();
  }
};

export const logout = async (req: Request, res: Response) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) return res.sendStatus(204); //No content
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
  res.json({ message: 'Cookie cleared' });
};
