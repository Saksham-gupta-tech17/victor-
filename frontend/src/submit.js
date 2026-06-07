import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('nodes', JSON.stringify(nodes.map(n => n.id)));
    formData.append('edges', JSON.stringify(edges.map(e => `${e.source}->${e.target}`)));

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      alert(`Pipeline Result:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nValid DAG: ${data.is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
      alert("Error: Backend connection failed. Ensure Uvicorn is running.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
      <button onClick={handleSubmit} style={{
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: 'white',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(110, 142, 251, 0.3)'
      }}>
        Submit Pipeline
      </button>
    </div>
  );
};