import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await prisma.usuario.findMany({
        // a linha abaixo inclui a tabela chamado para o usuário
      // include: { chamados: true }
    });
    res.json({ usuarios });
// res.json({ usuarios, chamados })
  } catch (error) {
    next(error);
  }
};

export const getUsuarioById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nomeUsuario: req.body.nomeUsuario,
        emailUsuario: req.body.emailUsuario,
        senhaUsuario: req.body.senhaUsuario,
        telefoneUsuario: req.body.telefoneUsuario,
      },
    });
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const deleteUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.usuario.delete({
      where: {
        id: Number(id),
      },
    });
    res.sendStatus(204).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

export const updateUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedUsuario = await prisma.usuario.update({
      where: {
        id: Number(id),
      },
      data: req.body
    });
    res.json(updatedUsuario);
  } catch (error) {
    next(error);
  }
};

