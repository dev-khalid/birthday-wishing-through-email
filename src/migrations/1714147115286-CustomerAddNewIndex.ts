import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerAddNewIndex1714147115286 implements MigrationInterface {
    name = 'CustomerAddNewIndex1714147115286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` ADD UNIQUE INDEX \`IDX_fdb2f3ad8115da4c7718109a6e\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP INDEX \`IDX_fdb2f3ad8115da4c7718109a6e\``);
    }

}
