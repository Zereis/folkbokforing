import React, { useEffect, useState } from 'react';
import { Person } from '../types';
import axios from 'axios';

interface Props {
  onEdit?: (person: Person) => void;
}

const PersonList: React.FC<Props> = ({ onEdit }) => {
  const [personer, setPersoner] = useState<Person[]>([]);
  const [search, setSearch] = useState('');

  const fetchPersoner = async () => {
    const res = await axios.get('http://localhost:8080/api/personer');
    setPersoner(res.data);
  };

  const deletePerson = async (personnummer: string) => {
    await axios.delete(`http://localhost:8080/api/personer/${personnummer}`);
    fetchPersoner();
  };

  useEffect(() => {
    fetchPersoner();
  }, []);

  const filtered = personer.filter(
    (p) =>
      p.fornamn.toLowerCase().includes(search.toLowerCase()) ||
      p.efternamn.toLowerCase().includes(search.toLowerCase()) ||
      p.personnummer.includes(search)
  );

  return (
    <div>
      <h2>Personer</h2>
      <input
        type="text"
        placeholder="Sök person (namn eller personnummer)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 16, width: '100%', padding: 8 }}
      />
      <ul className="person-list">
        {filtered.map((p) => (
          <li key={p.personnummer}>
            <span>
              {p.fornamn} {p.efternamn} – {p.personnummer}
            </span>
            <div>
              {onEdit && (
                <button
                  style={{ marginRight: 8, background: '#1976d2' }}
                  onClick={() => onEdit(p)}
                >
                  Redigera
                </button>
              )}
              <button onClick={() => deletePerson(p.personnummer)}>Ta bort</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
