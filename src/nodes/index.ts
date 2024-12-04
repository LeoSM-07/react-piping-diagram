import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";
import { ValveNode } from "./ValveNode";
import { TankNode } from "./Tank";

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "tank",
    position: { x: 0, y: -100 },
    data: { label: "Custom", hasFlow: true, isOpen: true },
  },
  {
    id: "c",
    type: "valve",
    position: { x: 100, y: 100 },
    data: { label: "Custom", isOpen: true, hasFlow: false },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  valve: ValveNode,
  tank: TankNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
