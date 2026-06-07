from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/pipelines/parse")
async def parse_pipeline(nodes: str = Form(...), edges: str = Form(...)):
    node_list = json.loads(nodes)
    edge_list = json.loads(edges)
    
    adj = {node: [] for node in node_list}
    for edge in edge_list:
        u, v = edge.split("->")
        if u in adj:
            adj[u].append(v)
    
    visited = set()
    path = set()
    
    def has_cycle(node):
        visited.add(node)
        path.add(node)
        for neighbor in adj.get(node, []):
            if neighbor not in visited:
                if has_cycle(neighbor): return True
            elif neighbor in path: return True
        path.remove(node)
        return False

    is_dag = not any(has_cycle(node) for node in node_list if node not in visited)
    
    return {"num_nodes": len(node_list), "num_edges": len(edge_list), "is_dag": is_dag}