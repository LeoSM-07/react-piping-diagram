import { useDnD } from "@/lib/dnd-context";
import { Panel } from "@xyflow/react";
import { DragEvent } from "react";

export function NodeToolbox() {
  const [, setType] = useDnD();

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Panel
      className="bg-card p-2 border rounded shadow-sm"
      position="bottom-center"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <span className="col-span-full text-center font-medium">Add Nodes</span>
        <div
          onDragStart={(event) => onDragStart(event, "valve")}
          draggable
          className="bg-red-100 aspect-square p-2 grid items-center"
        >
          Valve
        </div>
      </div>
    </Panel>
  );
}
