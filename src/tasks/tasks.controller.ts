import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdatekDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    
    constructor(private taskService: TasksService){

    }

    @Get()
    getAllTask(){
      return this.taskService.getAllTask()
    }

    @Post()
    createTask(@Body()newTask: CreateTaskDTO) {
        return this.taskService.createTask(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.taskService.deleteTask(id)
    }

    @Patch(':id') //Id y el body
    updateTask(@Param("id") id: string, @Body() updateTask: UpdatekDTO){
        return this.taskService.updateTask(id,updateTask)
    }

}
