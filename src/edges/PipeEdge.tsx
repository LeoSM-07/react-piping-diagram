import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSmoothStepPath,
  useNodesData,
} from "@xyflow/react";
import { type PipeEdge } from "./types";
import { ValveNode } from "@/nodes/types";
import "./pipe.css";

export function PipeEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  source,
}: EdgeProps<PipeEdge>) {
  const nodesData = useNodesData<ValveNode>(source);

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        className="pipe"
        style={{
          stroke: nodesData?.data.isOpen ? "#0ea5e9" : "#9ca3af",
          strokeWidth: "2px",
          strokeDasharray: nodesData?.data.isOpen ? "12" : "none",
          animation: nodesData?.data.isOpen
            ? "dash 5s linear infinite"
            : "none",
          animationIterationCount: "infinite",
        }}
      />
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan pointer-events-auto absolute bg-white px-1"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        ></div>
      </EdgeLabelRenderer>
    </>
  );
}
