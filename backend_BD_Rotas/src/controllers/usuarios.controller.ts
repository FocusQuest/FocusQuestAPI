import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getUsuarios = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

export const getUsuarioById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

export const deleteUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

export const updateUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updatedUsuario = await prisma.usuario.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    res.json(updatedUsuario);
  } catch (error) {
    next(error);
  }
};

//Codigo encryptado
/*export const loginUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { emailUsuario, senhaUsuario } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: {
        emailUsuario,
      },
    });
    if (!usuario) {
      return res.status(401).json({ message: "Usuário nao encontrado" });
    }
    const senhaEncryptada = await bcrypt.hash(senhaUsuario, 10);

    const senha = await bcrypt.compare(senhaUsuario, usuario.senhaUsuario);
    if (!senha) {
      return res.status(401).json({ message: "Usuário ou senha incorretos" });
    }
    const token = jwt.sign({ id: usuario.id }, "secret", { expiresIn: "1h" });
  } catch (error) {
    next(error);
  }
};*/
export const loginUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
      const tokenUsuario = jwt.sign(
        { id: usuario?.id },
        process.env.JWT_PASS ?? "",
        { expiresIn: "24h" },
      );
      res.status(202).json({
        msg: "Usuário logado com sucesso",
        usuario: usuario,
        token: tokenUsuario,
      });
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
      const tokenSuporte = jwt.sign(
        { id: suporte?.id },
        process.env.JWT_PASS ?? "",
        { expiresIn: "24h" },
      );
      res.status(202).json({
        msg: "Suporte logado com sucesso",
        usuario: suporte,
        token: tokenSuporte,
      });
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
      const tokenAdmin = jwt.sign(
        { id: admin?.id },
        process.env.JWT_PASS ?? "",
        { expiresIn: "24h" },
      );
      res.status(202).json({
        msg: "Usuário logado com sucesso",
        usuario: admin,
        token: tokenAdmin,
      });
    } catch (error) {
      next(error);
    }
  }
};
