import { GridPdfExport, PdfExportConfig } from "@bryntum/gantt"
import { BryntumGantt } from "@bryntum/gantt-react"
import { useCallback, useRef, useState } from "react"
import { getColumns, getEndDate, getStartDate, getTasks } from "./data"

import "@bryntum/gantt/gantt.stockholm.css"

const pdfExportFeature: Partial<PdfExportConfig & GridPdfExport> = {
  exportServer: "https://dev.bryntum.com:8082", // Bryntum public export server
  filterStyles: (styles) => {
    return styles.map((style) => {
      let modified = style

      modified = modified.replaceAll(
        "http://localhost:5173/node_modules/@bryntum/gantt/fonts/fa-solid-900.woff2",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/webfonts/fa-solid-900.woff2"
      )

      modified = modified.replaceAll(
        "http://localhost:5173/node_modules/@bryntum/gantt/fonts/fa-solid-900.ttf",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/webfonts/fa-solid-900.ttf"
      )

      console.log(modified)
      return modified
    })
  },
}

export default function Gantt() {
  const ganttRef = useRef<BryntumGantt>(null)
  const [columns] = useState(getColumns())
  const [endDate] = useState(getEndDate())
  const [startDate] = useState(getStartDate())
  const [tasks] = useState(getTasks())

  const onExportButtonClick = useCallback(() => {
    if (ganttRef.current)
      ganttRef.current.instance.features.pdfExport.showExportDialog()
  }, [ganttRef.current])

  const onViewExamplePayloadButtonClick = useCallback(() => {
    location.href = "/export-payload.html"
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        className="toolbar"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.5rem",
          height: "2.5rem",
          gap: "0.5rem",
        }}
      >
        <button onClick={onExportButtonClick}>Export pdf</button>
        <button onClick={onViewExamplePayloadButtonClick}>
          View example payload
        </button>
      </div>
      <BryntumGantt
        ref={ganttRef}
        startDate={startDate}
        endDate={endDate}
        columns={columns}
        tasks={tasks}
        pdfExportFeature={pdfExportFeature}
      />
    </div>
  )
}
