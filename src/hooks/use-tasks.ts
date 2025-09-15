import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/taks";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, [])

    return {
        tasks,
        tasksCount: tasks.filter(task => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
}