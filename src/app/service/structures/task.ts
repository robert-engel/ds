export interface Task {
  id: number;
  name: string;
  nextExecution: string;
  remainingDelay: number;
  isDone: boolean;
  type: string;
  delay: number;
  timeunit: string;
  initialDelay: string;
}
