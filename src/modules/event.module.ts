import {Module} from "@nestjs/common";
import {EventResolver} from "../resolvers/event.resolver";
import {EventService} from "../services/event.service";

@Module({
    providers: [EventResolver, EventService],
})
export class EventModule{}