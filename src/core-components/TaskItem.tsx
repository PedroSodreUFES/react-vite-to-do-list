import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/Card";
import InputCheckbox from "../components/InputCheckbox";
import Text from "../components/Text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import XIcon from "../assets/icons/X-Regular.svg?react"
import { useState, type ChangeEvent, type FormEvent } from "react";
import InputText from "../components/InputText";
import { TaskState, type Task } from "../models/taks";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
    task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)

    const [taskTitle, setTaskTitle] = useState(task.title || "")
    const { updateTask, updateTaskStatus, deleteTask } = useTask()

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleExitEditTask() {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id)
        }
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    function handleSaveTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateTask(task.id, { title: taskTitle })
        setIsEditing(false)
    }

    function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        updateTaskStatus(task.id, checked)
    }

    function handleDeleteTask() {
        deleteTask(task.id)
    } 

    return (
        <Card size="md">
            {!isEditing
                ? (
                    <div className="flex items-center gap-4">
                        <InputCheckbox
                            checked={task?.concluded}
                            onChange={handleChangeTaskStatus}
                        />
                        <Text className={cx("flex-1", { 'line-through': task?.concluded })}>
                            {task?.title}
                        </Text>
                        <div className="flex gap-1">
                            <ButtonIcon
                                icon={TrashIcon}
                                variant={"tertiary"}
                                onClick={handleDeleteTask}
                            />
                            <ButtonIcon
                                icon={PencilIcon}
                                variant={"tertiary"}
                                onClick={handleEditTask}
                            />
                        </div>
                    </div>
                )
                :
                (
                    <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                        <InputText 
                          className="flex-1"
                          onChange={handleChangeTaskTitle}
                          required
                          autoFocus
                          value={taskTitle}
                        />
                        <div className="flex gap-1">
                            <ButtonIcon
                                type="button"
                                icon={XIcon}
                                variant={"secondary"}
                                onClick={handleExitEditTask}
                            />
                            <ButtonIcon
                                type="submit"
                                icon={CheckIcon}
                                variant={"primary"}
                            />
                        </div>
                    </form>

                )
            }
        </Card>
    )
}