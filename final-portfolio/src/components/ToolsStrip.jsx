const tools = [
  'SQL', 'Power Query', 'MES Integration', 'ETL Pipelines',
  'PowerShell', 'Power Automate', 'Qlik', 'Python',
  'JavaScript', 'React', 'ERP Systems', 'Process Documentation',
  'Continuous Improvement', 'Data Analytics'
];

function ToolsStrip() {
  return (
    <div className="tools-strip">
      <div className="tools-track">
        {tools.map(tool => <span key={tool}>{tool}</span>)}
        {tools.map(tool => <span key={`${tool}-2`} aria-hidden="true">{tool}</span>)}
      </div>
    </div>
  );
}

export default ToolsStrip;