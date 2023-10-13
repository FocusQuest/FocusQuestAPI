import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getChamados = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chamados = await prisma.chamado.findMany({
      // passando esta linha abaixo, ele puxa o usuário junto com o chamado
      include: { usuario: true }
    })
    res.json(chamados);
  } catch (error) {
    next(error);
  }
};

export const getChamadoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const chamado = await prisma.chamado.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!chamado) {
      return res.status(404).json({ message: 'Chamado não encontrado!' });
    }
    res.json(chamado);
  } catch (error) {
    next(error);
  }
};

export const getChamadosByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    })
    const chamados = await prisma.chamado.findMany({
      where: {
        idUsuario: Number(id),
      },
    });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }
    res.json(chamados);
  } catch (error) {
    next(error);
  }
};
 


export const createChamado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdChamado = await prisma.chamado.create({
      data: {
        nomeChamado: req.body.nomeChamado,
        descChamado: req.body.descChamado,
        idUsuario: parseInt(req.body.idUsuario),
        idLab: parseInt(req.body.idLab),
        idComputador: parseInt(req.body.idComputador),
        idCategoria: parseInt(req.body.idCategoria),
      },
    });
    res.status(201).json(createdChamado);
  } catch (error) {
    next(error);
  }
};

export const deleteChamado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedChamado = await prisma.chamado.delete({
      where: {
        id: Number(id),
      },
    });
    res.sendStatus(204).json(deletedChamado);
  } catch (error) {
    next(error);
  }
};

export const updateChamado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedChamado = await prisma.chamado.update({
      where: {
        id: Number(id),
      },
      data: req.body   // no json da req, podem ser passados o idSuporte, o tratInicio e o tratFim, p.ex.
      //ver como faço para incluir tratInicio aqui com a data now() 
    });
    res.json(updatedChamado);
  } catch (error) {
    next(error);
  }
};