/*
  Warnings:

  - You are about to drop the `TipoUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TratativaChamado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `idTipoUsuario` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `idSuporte` to the `Chamado` table without a default value. This is not possible if the table is not empty.
  - Made the column `cargoSuporte` on table `Suporte` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nomeSuporte` on table `Suporte` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "TipoUsuario_tipoUsuario_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TipoUsuario";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TratativaChamado";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TipoSuporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipoUsuario" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descChamado" TEXT NOT NULL,
    "dataAberturaChamado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "idAndamento" INTEGER NOT NULL,
    "tratInicio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tratFim" DATETIME,
    "idSuporte" INTEGER NOT NULL,
    CONSTRAINT "Chamado_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idAndamento_fkey" FOREIGN KEY ("idAndamento") REFERENCES "Andamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idSuporte_fkey" FOREIGN KEY ("idSuporte") REFERENCES "Suporte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chamado" ("dataAberturaChamado", "descChamado", "id", "idAndamento", "idCategoria", "idUsuario") SELECT "dataAberturaChamado", "descChamado", "id", "idAndamento", "idCategoria", "idUsuario" FROM "Chamado";
DROP TABLE "Chamado";
ALTER TABLE "new_Chamado" RENAME TO "Chamado";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeUsuario" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "telefoneUsuario" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("emailUsuario", "id", "nomeUsuario", "telefoneUsuario") SELECT "emailUsuario", "id", "nomeUsuario", "telefoneUsuario" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_emailUsuario_key" ON "Usuario"("emailUsuario");
CREATE UNIQUE INDEX "Usuario_telefoneUsuario_key" ON "Usuario"("telefoneUsuario");
CREATE TABLE "new_Suporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeSuporte" TEXT NOT NULL,
    "cargoSuporte" TEXT NOT NULL,
    "idTipoSuporte" INTEGER,
    CONSTRAINT "Suporte_idTipoSuporte_fkey" FOREIGN KEY ("idTipoSuporte") REFERENCES "TipoSuporte" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Suporte" ("cargoSuporte", "id", "nomeSuporte") SELECT "cargoSuporte", "id", "nomeSuporte" FROM "Suporte";
DROP TABLE "Suporte";
ALTER TABLE "new_Suporte" RENAME TO "Suporte";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "TipoSuporte_tipoUsuario_key" ON "TipoSuporte"("tipoUsuario");
