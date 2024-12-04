import { DragEvent, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { DevTools } from "@/components/devtools";
import { NodeToolbox } from "./components/drag-toolbar";
import { useDnD } from "@/lib/dnd-context";
import type { PipeEdge } from "./edges/types";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => {
      const customEdge: PipeEdge = {
        id: getId(),
        type: "pipe",
        ...connection,
      };
      setEdges((edges) => addEdge(customEdge, edges));
    },
    [setEdges],
  );

  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        // @ts-expect-error ts bs
        id: getId(),
        type: "valve",
        position,
        data: { label: `${type} node` },
      };

      // @ts-expect-error ts bs
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={onDragOver}
      fitView
      snapGrid={[10, 10]}
      snapToGrid
    >
      <Background />
      <MiniMap />
      <Controls />
      <DevTools />
      <NodeToolbox />
    </ReactFlow>
  );
}
