import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {EventModule} from "./modules/event.module";
import {ConfigModule} from "@nestjs/config";
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            // include: [EventModule],
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: true,
            // typePaths: ['./**/*.graphql'],
            // definitions: {
            //     path: join(process.cwd(), 'src/graphql.ts'),
            //     outputAs: 'class',
            // },
        }),
        EventModule,
    ],
})
export class AppModule {}