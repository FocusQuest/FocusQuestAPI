import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = require("express").Router();

// rota para VER todos os CHAMADOS
router.get(
  "/chamados",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const chamados = await prisma.chamado.findMany({
        // passando esta linha abaixo, ele puxa o usuário junto com o chamado
        include: { usuario: true },
      });
      res.json(chamados);
    } catch (error) {
      next(error);
    }
  },
);

// rota para VER CHAMADO específico
router.get(
  "/chamados/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const chamado = await prisma.chamado.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(chamado);
    } catch (error) {
      next(error);
    }
  },
);

// rota para CRIAR CHAMADO
router.post(
  "/chamados",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const chamado = await prisma.chamado.create({
        data: {
          nomeChamado: req.body.nomeChamado,
          descChamado: req.body.descChamado,
          idUsuario: req.body.idUsuario,
          idLab: req.body.idLab,
          idComputador: req.body.idComputador,
          idCategoria: req.body.idCategoria,
        },
      });
      res.json(chamado);
    } catch (error) {
      next(error);
    }
  },
);

// rota para EXCLUIR CHAMADO
router.delete(
  "/chamados/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const chamadoExcluido = await prisma.chamado.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(chamadoExcluido);
    } catch (error) {
      next(error);
    }
  },
);

// rota para ATUALIZAR CHAMADO
router.patch(
  "/chamados/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const chamado = await prisma.chamado.update({
        where: {
          id: Number(id),
        },
        data: req.body, // no json da req, podem ser passados o idSuporte, o tratInicio e o tratFim, p.ex.
      });
      //ver como faço para incluir tratInicio aqui com a data now()
      // console.log(chamado.idAndamento)
      res.json(chamado);
    } catch (error) {
      next(error);
    }
  },
);

// rota para VER todos os USUARIOS
router.get(
  "/usuarios",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuarios = await prisma.usuario.findMany({
        // a linha abaixo inclui a tabela chamado para o usuário
        // include: { chamados: true }
      });
      res.json({ usuarios });
    } catch (error) {
      next(error);
    }
  },
);
// const chamados = await prisma.chamado.findMany({
//   include: { usuario: true }
// })
// res.json({ usuarios, chamados })

// rota para VER USUARIO específico
router.get(
  "/usuarios/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const usuario = await prisma.usuario.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  },
);

// rota para CRIAR USUARIO
router.post(
  "/usuarios",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuario = await prisma.usuario.create({
        data: {
          nomeUsuario: req.body.nomeUsuario,
          emailUsuario: req.body.emailUsuario,
          senhaUsuario: req.body.senhaUsuario,
          telefoneUsuario: req.body.telefoneUsuario,
        },
      });
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  },
);

// rota para EXCLUIR USUARIO
router.delete(
  "/usuarios/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const usuarioExcluido = await prisma.usuario.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(usuarioExcluido);
    } catch (error) {
      next(error);
    }
  },
);

// rota para ATUALIZAR USUARIO
router.patch(
  "/usuarios/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const usuario = await prisma.usuario.update({
        where: {
          id: Number(id),
        },
        data: req.body,
      });
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  },
);

//Autenticador de Login usuario, admin e suporte
router.post(
  "/usuarios/login/:nivelAcesso",
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.params.nivelAcesso === "3") {
      try {
        const usuario = await prisma.usuario.findUnique({
          where: {
            emailUsuario: req.body.emailUsuario,
          },
        });
        if (!usuario) {
          res.status(404).json({ msg: "Usuário não encontrado" });
        }
        const senha = req.body.senhaUsuario;
        if (senha !== usuario?.senhaUsuario) {
          res.status(401).json({ msg: "Senha incorreta" });
        }
        res.status(202).json(usuario);
      } catch (error) {
        next(error);
      }
    } else if (req.params.nivelAcesso === "2") {
      try {
        const suporte = await prisma.suporte.findUnique({
          where: {
            emailSuporte: req.body.emailSuporte,
          },
        });
        if (!suporte) {
          res.status(404).json({ msg: "Usuário não encontrado" });
        }
        const senha = req.body.senhaUsuario;
        if (senha !== suporte?.senhaSuporte) {
          res.status(401).json({ msg: "Senha incorreta" });
        }
        res.status(202).json(suporte);
      } catch (error) {
        next(error);
      }
    } else if (req.params.nivelAcesso === "1") {
      try {
        const admin = await prisma.admin.findUnique({
          where: {
            emailAdmin: req.body.emailAdmin,
          },
        });
        if (!admin) {
          res.status(404).json({ msg: "Usuário não encontrado" });
        }
        const senha = req.body.senhaAdmin;
        if (senha !== admin?.senhaAdmin) {
          res.status(401).json({ msg: "Senha incorreta" });
        }
        res.status(202).json(admin);
      } catch (error) {
        next(error);
      }
    }
  },
);

module.exports = router;
