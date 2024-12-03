import type { Edge, EdgeTypes } from "@xyflow/react";
import { PipeEdge } from "./PipeEdge";

export const initialEdges: Edge[] = [
  { id: "a->c", type: "pipe", source: "a", target: "c", animated: false },
];

export const edgeTypes = {
  pipe: PipeEdge,
} satisfies EdgeTypes;
