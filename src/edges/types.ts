import type { BuiltInEdge, Edge } from "@xyflow/react";

export type PipeEdge = Edge<{ label: string }, "pipe">;
export type AppEdge = BuiltInEdge | PipeEdge;
