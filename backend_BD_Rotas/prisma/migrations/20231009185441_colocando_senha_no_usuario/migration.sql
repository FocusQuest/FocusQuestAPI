-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeUsuario" TEXT NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "telefoneUsuario" TEXT NOT NULL,
    "senhaUsuario" TEXT NOT NULL DEFAULT '',
    "idNivelAcesso" INTEGER NOT NULL DEFAULT 3,
    CONSTRAINT "Usuario_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("emailUsuario", "id", "idNivelAcesso", "nomeUsuario", "telefoneUsuario") SELECT "emailUsuario", "id", "idNivelAcesso", "nomeUsuario", "telefoneUsuario" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_emailUsuario_key" ON "Usuario"("emailUsuario");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
