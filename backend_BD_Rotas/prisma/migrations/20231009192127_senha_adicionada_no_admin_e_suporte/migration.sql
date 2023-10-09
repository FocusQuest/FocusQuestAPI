-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Suporte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeSuporte" TEXT NOT NULL,
    "emailSuporte" TEXT NOT NULL,
    "telefoneSuporte" TEXT NOT NULL,
    "senhaSuporte" TEXT NOT NULL DEFAULT '',
    "idNivelAcesso" INTEGER NOT NULL DEFAULT 2,
    CONSTRAINT "Suporte_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Suporte" ("emailSuporte", "id", "idNivelAcesso", "nomeSuporte", "telefoneSuporte") SELECT "emailSuporte", "id", "idNivelAcesso", "nomeSuporte", "telefoneSuporte" FROM "Suporte";
DROP TABLE "Suporte";
ALTER TABLE "new_Suporte" RENAME TO "Suporte";
CREATE TABLE "new_Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "nomeAdmin" TEXT NOT NULL,
    "emailAdmin" TEXT NOT NULL,
    "telefoneAdmin" TEXT NOT NULL,
    "senhaAdmin" TEXT NOT NULL DEFAULT '',
    "idNivelAcesso" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Admin_idNivelAcesso_fkey" FOREIGN KEY ("idNivelAcesso") REFERENCES "NivelAcesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Admin" ("emailAdmin", "id", "idNivelAcesso", "nomeAdmin", "telefoneAdmin") SELECT "emailAdmin", "id", "idNivelAcesso", "nomeAdmin", "telefoneAdmin" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");
CREATE UNIQUE INDEX "Admin_emailAdmin_key" ON "Admin"("emailAdmin");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
