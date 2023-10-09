/*
  Warnings:

  - A unique constraint covering the columns `[emailSuporte]` on the table `Suporte` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Suporte_emailSuporte_key" ON "Suporte"("emailSuporte");
