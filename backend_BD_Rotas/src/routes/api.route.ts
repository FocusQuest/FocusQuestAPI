import { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

const router = require('express').Router();



// rota para VER todos os CHAMADOS
router.get('/chamados', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chamados = await prisma.chamado.findMany({
      // passando esta linha abaixo, ele puxa o usuário junto com o chamado
      include: { usuario: true }
    })
    res.json(chamados)
  } catch (error) {
    next(error)
  }
});

// rota para VER CHAMADO específico
router.get('/chamados/:id', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// rota para CRIAR CHAMADO
router.post('/chamados', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const chamado = await prisma.chamado.create({
      data: {
        descChamado: req.body.descChamado,
        // dataAberturaChamado DateTime  @default(now())
        idUsuario: req.body.idUsuario,
        idCategoria: req.body.idCategoria,
        idAndamento: req.body.idAndamento
      },
  })
  res.json(chamado)
} catch (error) {
    next(error)
  }
});
  
// rota para EXCLUIR CHAMADO
router.delete('/chamados/:id', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// rota para ATUALIZAR CHAMADO
router.patch('/chamados/:id', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// rota para VER todos os USUARIOS
router.get('/usuarios', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await prisma.usuario.findMany({
    // a linha abaixo inclui a tabela chamado para o usuário
      include: { chamados: true }
    })
    const chamados = await prisma.chamado.findMany({
      include: { usuario: true }
    })
    res.json({ usuarios, chamados } )
  } catch (error) {
    next(error)
  }
});

// rota para VER USUARIO específico
// router.get('/usuarios/:id', async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const usuario = await prisma.usuario.findUnique( )
//     res.json(usuario)
//   } catch (error) {
//     next(error)
//   }
// });

// rota para CRIAR USUARIO
router.post('/usuarios', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nomeUsuario: req.body.nomeUsuario,
        emailUsuario: req.body.emailUsuario,
        telefoneUsuario: req.body.telefoneUsuario,
      },
  })
  res.json(usuario)
} catch (error) {
    next(error)
  }
});

// rota para EXCLUIR USUARIO
router.delete('/chamados/:id', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// rota para ATUALIZAR USUARIO
router.patch('/chamados/:id', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'Ok api is working 🚀' });
});


module.exports = router;
