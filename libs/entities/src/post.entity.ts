import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		length: 150,
		nullable: false,
	})
	title: string;

	@Column()
	message: string;

	@Column({ name: 'author_id' })
	authorId: string;

	@Column({ name: 'is_published' })
	isPublished: boolean;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
