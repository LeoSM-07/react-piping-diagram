import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type ValveNode = Node<{ label: string; isOpen: boolean }, "valve">;
export type AppNode = BuiltInNode | PositionLoggerNode | ValveNode;
