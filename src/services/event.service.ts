import {Injectable} from "@nestjs/common";
import {NewEventInput} from "../domain/dto/new-event.input";
import {Event} from "../domain/models/event.model";

@Injectable()
export class EventService {

    async create(data: NewEventInput): Promise<Event>{
        return {} as any;
    }

    async findAllActive(){
        return {} as any;
    }

    async findById(id: string): Promise<Event>{
        return {} as any;
    }


}