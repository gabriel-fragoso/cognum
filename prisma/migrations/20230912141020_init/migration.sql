/*
  Warnings:

  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "employees_id_seq";
