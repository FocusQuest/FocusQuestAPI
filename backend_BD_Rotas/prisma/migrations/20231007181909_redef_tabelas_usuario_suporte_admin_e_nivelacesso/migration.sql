/*
  Warnings:

  - You are about to drop the column `cargoSuporte` on the `Suporte` table. All the data in the column will be lost.
  - Added the required column `idNivelAcesso` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailSuporte` to the `Suporte` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idNivelAcesso` to the `Suporte` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefoneSuporte` to the `Suporte` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "nomeAdmin" TEXT NOT NULL,
    "emailAdmin" TEXT NOT NULL,
    "telefoneAdmin" TEXT NOT NULL,
    "idNivelAcesso" INTEGER NOT NULL,
    CONSTRAINT "Admin_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NivelAcesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descNivelAcesso" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeUsuario" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "telefoneUsuario" TEXT NOT NULL,
    "idNivelAcesso" INTEGER NOT NULL,
    CONSTRAINT "Usuario_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("emailUsuario", "id", "nomeUsuario", "telefoneUsuario") SELECT "emailUsuario", "id", "nomeUsuario", "telefoneUsuario" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_emailUsuario_key" ON "Usuario"("emailUsuario");
CREATE TABLE "new_Suporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeSuporte" TEXT NOT NULL,
    "emailSuporte" TEXT NOT NULL,
    "telefoneSuporte" TEXT NOT NULL,
    "idNivelAcesso" INTEGER NOT NULL,
    CONSTRAINT "Suporte_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Suporte" ("id", "nomeSuporte") SELECT "id", "nomeSuporte" FROM "Suporte";
DROP TABLE "Suporte";
ALTER TABLE "new_Suporte" RENAME TO "Suporte";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_emailAdmin_key" ON "Admin"("emailAdmin");
