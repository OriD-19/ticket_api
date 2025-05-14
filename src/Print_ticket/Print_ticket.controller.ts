import { Body, Controller, Post} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController 
{
    constructor(private readonly tasksService: TasksService) {}

    @Post()

    createTask(@Body() body: {title: string})
    {
        return this.tasksService.create(body.title);
    }
}
