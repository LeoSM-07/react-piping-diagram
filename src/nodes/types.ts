import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type ValveNode = Node<
  { label: string; isOpen: boolean; hasFlow: boolean },
  "valve"
>;
export type TankNode = Node<
  { label: string; isOpen: boolean; hasFlow: true },
  "tank"
>;
export type AppNode = BuiltInNode | PositionLoggerNode | ValveNode | TankNode;
