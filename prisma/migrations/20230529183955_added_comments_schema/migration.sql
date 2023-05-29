-- CreateTable
CREATE TABLE "CommentsOnCharacterSheet" (
    "id_account" TEXT NOT NULL,
    "id_sheet" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "CommentsOnCharacterSheet_pkey" PRIMARY KEY ("id_account","id_sheet")
);

-- AddForeignKey
ALTER TABLE "CommentsOnCharacterSheet" ADD CONSTRAINT "CommentsOnCharacterSheet_id_account_fkey" FOREIGN KEY ("id_account") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentsOnCharacterSheet" ADD CONSTRAINT "CommentsOnCharacterSheet_id_sheet_fkey" FOREIGN KEY ("id_sheet") REFERENCES "CharacterSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
