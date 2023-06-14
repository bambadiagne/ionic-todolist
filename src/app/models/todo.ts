import { StatusTask } from "./status-task";

export interface Todo{
    id:number;
    description:string;
    status_task:StatusTask;
    created_at:Date;

}