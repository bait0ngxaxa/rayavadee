-- CreateTable
CREATE TABLE `Profile` (
    `id` VARCHAR(191) NOT NULL,
    `clerkId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `webName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Profile_clerkId_key`(`clerkId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Survey` (
    `id` VARCHAR(191) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `survey1` INTEGER NOT NULL,
    `survey2` INTEGER NOT NULL,
    `survey3` INTEGER NOT NULL,
    `survey4` INTEGER NOT NULL,
    `survey5` INTEGER NOT NULL,
    `survey6` INTEGER NOT NULL,
    `survey7` INTEGER NOT NULL,
    `survey8` INTEGER NOT NULL,
    `survey9` INTEGER NOT NULL,
    `survey10` INTEGER NOT NULL,
    `survey11` INTEGER NOT NULL,
    `survey12` INTEGER NOT NULL,
    `totalScore` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Survey` ADD CONSTRAINT `Survey_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkId`) ON DELETE CASCADE ON UPDATE CASCADE;
