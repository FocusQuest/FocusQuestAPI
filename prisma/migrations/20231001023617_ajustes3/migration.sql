-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chamado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descChamado" TEXT NOT NULL,
    "dataAberturaChamado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "idAndamento" INTEGER NOT NULL,
    "tratInicio" DATETIME,
    "tratFim" DATETIME,
    "idSuporte" INTEGER,
    CONSTRAINT "Chamado_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idAndamento_fkey" FOREIGN KEY ("idAndamento") REFERENCES "Andamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chamado_idSuporte_fkey" FOREIGN KEY ("idSuporte") REFERENCES "Suporte" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Chamado" ("dataAberturaChamado", "descChamado", "id", "idAndamento", "idCategoria", "idSuporte", "idUsuario", "tratFim", "tratInicio") SELECT "dataAberturaChamado", "descChamado", "id", "idAndamento", "idCategoria", "idSuporte", "idUsuario", "tratFim", "tratInicio" FROM "Chamado";
DROP TABLE "Chamado";
ALTER TABLE "new_Chamado" RENAME TO "Chamado";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
