-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Task" ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "categoryId" DROP DEFAULT,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
