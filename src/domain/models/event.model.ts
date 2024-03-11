import {Field, ID, ObjectType} from "@nestjs/graphql";
import {EventStatusEnum} from "../enums/event-status.enum";
import {Review} from "./review.model";

@ObjectType({description: 'event'})
export class Event {
    @Field(type => ID)
    id: string;

    @Field({nullable: false})
    title: string;

    @Field({nullable: false})
    description: string;

    @Field({nullable: false})
    startDate: Date;

    @Field({nullable: false})
    endDate: Date;

    @Field({nullable: false})
    subscriptionOpenDate: Date;

    @Field({nullable: false})
    subscriptionCloseDate: Date;

    @Field({nullable: false})
    ticketPrice: string;

    @Field({nullable: false})
    deleted: boolean;

    @Field({nullable: false})
    status: EventStatusEnum;

    @Field(type => [Review])
    reviews: Review[]

}