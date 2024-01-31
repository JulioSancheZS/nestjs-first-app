import { IsNotEmpty, IsString, isNotEmpty } from "class-validator";
import { TaskStatus } from "../tasks.entity";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    description: string
}

export class UpdatekDTO {
    @IsString()
    title?: string;
    @IsString()
    description?: string;
    status?: TaskStatus
}