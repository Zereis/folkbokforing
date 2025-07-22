import React from 'react';
import './App.css';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import HistoryLog from './components/HistoryLog';
import { Person } from './types';

function App() {
  const [refresh, setRefresh] = React.useState(false);
  const [editingPerson, setEditingPerson] = React.useState<Person | null>(null);

  const refreshList = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <h1>Folkbokföringssystem</h1>
      <PersonForm
        refreshList={refreshList}
        editingPerson={editingPerson}
        cancelEdit={() => setEditingPerson(null)}
      />
      <PersonList
        key={refresh.toString()}
        onEdit={setEditingPerson}
      />
      <HistoryLog />
    </div>
  );
}

export default App;
