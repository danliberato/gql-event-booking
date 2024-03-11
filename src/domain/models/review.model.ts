import {Field, ID, ObjectType} from "@nestjs/graphql";
import {Max, Min} from "class-validator";
import {User} from "./user.model";

@ObjectType({description: 'review'})
export class Review {
    @Field(type => ID)
    id: string;

    @Field({nullable: false})
    @Min(0)
    @Max(5)
    stars: number;

    @Field({nullable: false})
    user: User

}