import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Event} from "../domain/models/event.model";
import {EventService} from "../services/event.service";
import {NewEventInput} from "../domain/dto/new-event.input";
import {NotFoundException} from "@nestjs/common";

@Resolver(of => Event)
export class EventResolver{
    constructor(private readonly eventService: EventService) {}

    @Query(returns => Event)
    async recipe(@Args('id') id: string): Promise<Event> {
        const event = await this.eventService.findById(id);
        if (!event) {
            throw new NotFoundException(id);
        }
        return event;
    }

    @Mutation(returns => Event)
    async createEvent(newEventData: NewEventInput){
        await this.eventService.create(newEventData);
    }

}