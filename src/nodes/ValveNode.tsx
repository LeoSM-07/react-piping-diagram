import { Handle, Position, type NodeProps, useReactFlow } from "@xyflow/react";
import "./valve.css";

import { type ValveNode } from "./types";
import { cn } from "@/lib/utils";

export function ValveNode({ id, data }: NodeProps<ValveNode>) {
  const { updateNodeData } = useReactFlow();

  // const connections = useHandleConnections({
  //   type: "target",
  // });

  // const nodesData = useNodesData<ValveNode>(
  //   connections.map((connection) => connection.source),
  // );

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default valve-container">
      <div>Valve {data.label}</div>
      <div>
        <button
          className={cn(
            data.isOpen ? "bg-green-200" : "bg-red-200",
            "px-2 rounded-sm",
          )}
          onClick={() => {
            updateNodeData(id, { isOpen: !data.isOpen });
          }}
        >
          {data.isOpen ? "Opened" : "Closed"}
        </button>
      </div>

      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
