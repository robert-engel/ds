import {BuildingTask} from './building-task';

export interface AutoBuilderTemplate {
  id: number;
  name: string;
  tasks: BuildingTask[];
}
