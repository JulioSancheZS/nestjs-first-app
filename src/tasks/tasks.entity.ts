export enum TaskStatus{
    PENDING = 'PENDING',
    OPEN = 'OPEN',
    INPROGRES = 'INPROGRES'
}

export class Task{
    id: string
    title: string
    description: string
    status: TaskStatus
}