import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from '../libs/config/core/config-app.module';
import { ProvidersModule } from '@lib/providers';

@Module({
	imports: [ConfigAppModule, ProvidersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
