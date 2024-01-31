import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import {v4} from 'uuid'
import { UpdatekDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id: v4(),
        title: "fist task",
        description: "some task",
        status: TaskStatus.OPEN
    }]

    getAllTask(){
        console.log(v4())
        return this.tasks
    }

    createTask(title: string, description: string){

        const task = {
            id: v4(),
            title: title,
            description: description,
            status: TaskStatus.PENDING
        }

        this.tasks.push(task)

        return task

    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

   
    getTaskById(id: string): Task{
      return this.tasks.find(x => x.id === id)
    }

    updateTask(id: string, updateTask: UpdatekDTO): Task{
        try {
            const task = this.getTaskById(id)
            const newTask = Object.assign(task, updateTask)
            this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task))
            return newTask;
        } catch (error) {
            console.log(error)
        }
       
    }
}
