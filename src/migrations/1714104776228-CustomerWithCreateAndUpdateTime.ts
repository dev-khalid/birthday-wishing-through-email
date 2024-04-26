import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerWithCreateAndUpdateTime1714104776228 implements MigrationInterface {
    name = 'CustomerWithCreateAndUpdateTime1714104776228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`createdDate\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`updatedDate\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`updatedDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
