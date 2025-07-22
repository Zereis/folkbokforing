import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface HistoryLog {
  id: number;
  action: string;
  personnummer: string;
  details: string;
  timestamp: string;
}

const HistoryLogComponent: React.FC = () => {
  const [logs, setLogs] = useState<HistoryLog[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/personer/history').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Historik</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            [{new Date(log.timestamp).toLocaleString()}] <b>{log.action}</b> {log.personnummer} – {log.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryLogComponent;