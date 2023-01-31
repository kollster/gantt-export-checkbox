import { TaskModel, TaskModelConfig } from "@bryntum/gantt"

export function getTasks(): Partial<
  TaskModelConfig & { customField_active: boolean }
>[] {
  return [
    {
      id: 1,
      name: "Root",
      startDate: new Date(2023, 1, 3),
      endDate: new Date(2023, 1, 14),
      customField_active: true,
    },
  ]
}
