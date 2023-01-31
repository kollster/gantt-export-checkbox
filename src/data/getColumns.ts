import { ColumnConfig } from "@bryntum/gantt"

export function getColumns(): Partial<ColumnConfig>[] {
  return [
    {
      type: "name",
    },
    {
      type: "check",
      field: "customField_active",
      text: "Active",
    },
  ]
}
