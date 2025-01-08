import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			schema: 'public',
			host: this.configService.get<string>('PG_HOST'),
			port: this.configService.get<number>('PG_PORT'),
			username: this.configService.get<string>('PG_USER'),
			password: this.configService.get<string>('PG_PASSWORD'),
			database: this.configService.get<string>('PG_DATABASE'),
			logging: this.configService.get('IS_PROD') === 'false',
			migrationsTableName: 'migrations',
			migrationsRun: true,
		};
	}
}
