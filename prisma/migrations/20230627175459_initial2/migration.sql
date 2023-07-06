/*
  Warnings:

  - The `processos` column on the `Welder` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Welder" DROP COLUMN "processos",
ADD COLUMN     "processos" TEXT[];
