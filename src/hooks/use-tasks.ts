import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/taks";
import { useEffect, useState } from "react";
import { delay } from "../helpers/helpers";

export default function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, [])
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoadingTasks, setIsLoadingTasks] = useState(true)

    async function fetchTasks() {
        if (isLoadingTasks) {
            await delay(2000)
            setIsLoadingTasks(false)
        }

        setTasks(tasksData)
    }

    useEffect(() => {
        fetchTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasksData])

    return {
        tasks,
        tasksCount: tasks.filter(task => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
        isLoadingTasks,
    }
}