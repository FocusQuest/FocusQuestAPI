/*
  Warnings:

  - You are about to drop the `TipoSuporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `idTipoSuporte` on the `Suporte` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "TipoSuporte_tipoUsuario_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TipoSuporte";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Suporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeSuporte" TEXT NOT NULL,
    "cargoSuporte" TEXT NOT NULL
);
INSERT INTO "new_Suporte" ("cargoSuporte", "id", "nomeSuporte") SELECT "cargoSuporte", "id", "nomeSuporte" FROM "Suporte";
DROP TABLE "Suporte";
ALTER TABLE "new_Suporte" RENAME TO "Suporte";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
