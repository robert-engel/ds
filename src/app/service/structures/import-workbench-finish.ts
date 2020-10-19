export interface ImportWorkbenchFinish {
  id: number;
  tasks: number;
  success: number;
  error: number;
  errors: ErrorComponent[];
}

export interface ErrorComponent {
  line: string;
  error: string;
}
