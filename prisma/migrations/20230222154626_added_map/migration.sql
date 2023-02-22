-- CreateIndex
CREATE INDEX `courses_course_category_id_fkey` ON `courses`(`course_category_id`);

-- CreateIndex
CREATE INDEX `user_courses_course_id_fkey` ON `user_courses`(`course_id`);

-- CreateIndex
CREATE INDEX `user_courses_users_id_fkey` ON `user_courses`(`users_id`);

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_course_category_id_fkey` FOREIGN KEY (`course_category_id`) REFERENCES `course_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_courses` ADD CONSTRAINT `user_courses_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
