import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1736369446489 implements MigrationInterface {
	name = 'Init1736369446489';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`CREATE TABLE "posts"
                             (
                                 "id"           uuid                   NOT NULL DEFAULT uuid_generate_v4(),
                                 "title"        character varying(150) NOT NULL,
                                 "message"      character varying      NOT NULL,
                                 "author_id"    character varying      NOT NULL,
                                 "is_published" boolean                NOT NULL,
                                 "created_at"   TIMESTAMP              NOT NULL DEFAULT now(),
                                 "updated_at"   TIMESTAMP              NOT NULL DEFAULT now(),
                                 CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id")
                             )`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "posts"`);
	}
}
