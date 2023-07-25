export enum TaskStatus {
    Unassigned = 'Unassigned',
    Assigned = 'Assigned',
    Done = 'Done'
}

export class TaskItem {
    time: string;
    subjectId: number;
    taskDescription: string;
    assignee?: string;
    private _status: TaskStatus;

    constructor(time: string, subjectId: number, taskDescription: string, assignee?: string, status?: TaskStatus) {
        this.time = time;
        this.subjectId = subjectId;
        this.taskDescription = taskDescription;
        this.assignee = assignee;
        this._status = status || TaskStatus.Unassigned;
    }

    get status(): TaskStatus {
        if (this._status === TaskStatus.Done) {
            return TaskStatus.Done;
        }
        return this.assignee ? TaskStatus.Assigned : TaskStatus.Unassigned;
    }

    set status(status: TaskStatus) {
        this._status = status;
    }
}
