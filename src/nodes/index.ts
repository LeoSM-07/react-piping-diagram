import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";
import { ValveNode } from "./ValveNode";

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "valve",
    position: { x: 0, y: -100 },
    data: { label: "Custom", isOpen: false },
  },
  {
    id: "c",
    type: "valve",
    position: { x: 100, y: 100 },
    data: { label: "Custom", isOpen: true },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  valve: ValveNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
