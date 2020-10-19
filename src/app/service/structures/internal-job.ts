export enum TaskPriority {
  VERY_HIGH = 'VERY_HIGH',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  VERY_LOW = 'VERY_LOW',
}

export interface InternalJob {
  id: number;
  task: string;
  running: boolean;
  priority: TaskPriority;
}
