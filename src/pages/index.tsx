import Image from "next/image";
import { Inter } from "next/font/google";
import ReactFlow, { ReactFlowProvider,Background,Controls } from "reactflow";
// import '@xyflow/react/dist/style.css';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ReactFlowProvider>
        <ReactFlow 
          fitView
          style={{ backgroundColor: "#F7F9FB" }}
        >
            <Background />
            <Controls />
       </ReactFlow>


              
          </ReactFlowProvider>
    </div>
  );
}
