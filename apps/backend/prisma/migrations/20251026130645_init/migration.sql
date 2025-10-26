-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin');

-- CreateEnum
CREATE TYPE "Campus" AS ENUM ('ALL', 'NSC', 'HSSC');

-- CreateTable
CREATE TABLE "AdminCode" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AdminCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "college" (
    "id" SERIAL NOT NULL,
    "campus" "Campus" NOT NULL,
    "college_name" TEXT NOT NULL,

    CONSTRAINT "college_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "major" (
    "id" SERIAL NOT NULL,
    "college_id" INTEGER NOT NULL,
    "major_name" TEXT NOT NULL,

    CONSTRAINT "major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'User',
    "major_id" INTEGER,
    "student_id" TEXT NOT NULL DEFAULT '0000000000',
    "semester" INTEGER,
    "last_login" TIMESTAMP(3),
    "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminCode_code_key" ON "AdminCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "user_student_id_key" ON "user"("student_id");

-- AddForeignKey
ALTER TABLE "major" ADD CONSTRAINT "major_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_major_id_fkey" FOREIGN KEY ("major_id") REFERENCES "major"("id") ON DELETE CASCADE ON UPDATE CASCADE;
