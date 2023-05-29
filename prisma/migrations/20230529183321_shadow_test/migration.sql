-- CreateTable
CREATE TABLE "LikesOnCharacterSheet" (
    "id_account" TEXT NOT NULL,
    "id_sheet" TEXT NOT NULL,

    CONSTRAINT "LikesOnCharacterSheet_pkey" PRIMARY KEY ("id_account","id_sheet")
);

-- AddForeignKey
ALTER TABLE "LikesOnCharacterSheet" ADD CONSTRAINT "LikesOnCharacterSheet_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikesOnCharacterSheet" ADD CONSTRAINT "LikesOnCharacterSheet_id_sheet_fkey" FOREIGN KEY ("id_sheet") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
