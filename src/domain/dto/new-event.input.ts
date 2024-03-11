import {Field, ID, InputType} from "@nestjs/graphql";
import {MaxLength} from "class-validator";

@InputType()
export class NewEventInput {
    @Field({nullable: false})
    @MaxLength(100)
    title: string;

    @Field({nullable: false})
    @MaxLength(500)
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

}