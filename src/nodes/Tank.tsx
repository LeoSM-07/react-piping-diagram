import { Handle, Position, type NodeProps } from "@xyflow/react";

import { type TankNode } from "./types";

export function TankNode({ data }: NodeProps<TankNode>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        Tank {data.label} <br /> (Source of infinite flow)
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
