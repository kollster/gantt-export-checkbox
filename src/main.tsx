import ReactDOM from "react-dom/client"
import Gantt from "./Gantt"
import "./main.css"

enableGanttDeveloperMode()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Gantt />
)

function enableGanttDeveloperMode() {
  if (!window.hasOwnProperty("bryntum"))
    (window as any).bryntum = { isTestEnv: true }
  else ((window as any).bryntum as any).isTestEnv = true
}
