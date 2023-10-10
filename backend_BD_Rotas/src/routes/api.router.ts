import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import {
  getChamados,
  getChamadoById,
  createChamado,
  deleteChamado,
  updateChamado,
} from '../controllers/chamados.controller';
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  deleteUsuario,
  updateUsuario,
} from '../controllers/usuarios.controller';

const router = express.Router();

// Chamados routes
router.get('/chamados', getChamados);
router.get('/chamados/:id', getChamadoById);
router.post('/chamados', createChamado);
router.delete('/chamados/:id', deleteChamado);
router.patch('/chamados/:id', updateChamado);

// Usuarios routes
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);
router.post('/usuarios', createUsuario);
router.delete('/usuarios/:id', deleteUsuario);
router.patch('/usuarios/:id', updateUsuario);



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

export default router;