import React, { useState, useEffect } from 'react';
import { Person } from '../types';
import axios from 'axios';

interface Props {
  refreshList: () => void;
  editingPerson?: Person | null;
  cancelEdit?: () => void;
}

const emptyPerson: Person = {
  personnummer: '',
  fornamn: '',
  efternamn: '',
  adress: '',
  postnummer: '',
  stad: '',
  civilstand: '',
  fodelsedatum: '',
};

const PersonForm: React.FC<Props> = ({ refreshList, editingPerson, cancelEdit }) => {
  const [person, setPerson] = useState<Person>(emptyPerson);

  useEffect(() => {
    if (editingPerson) setPerson(editingPerson);
    else setPerson(emptyPerson);
  }, [editingPerson]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingPerson) {
        await axios.put(`http://localhost:8080/api/personer/${person.personnummer}`, person);
        if (cancelEdit) cancelEdit();
      } else {
        await axios.post('http://localhost:8080/api/personer', person);
      }
      setPerson(emptyPerson);
      refreshList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="personnummer" value={person.personnummer} onChange={handleChange} placeholder="Personnummer" required disabled={!!editingPerson} />
      <input name="fornamn" value={person.fornamn} onChange={handleChange} placeholder="Förnamn" />
      <input name="efternamn" value={person.efternamn} onChange={handleChange} placeholder="Efternamn" />
      <input name="adress" value={person.adress} onChange={handleChange} placeholder="Adress" />
      <input name="postnummer" value={person.postnummer} onChange={handleChange} placeholder="Postnummer" />
      <input name="stad" value={person.stad} onChange={handleChange} placeholder="Stad" />
      <input name="civilstand" value={person.civilstand} onChange={handleChange} placeholder="Civilstånd" />
      <input name="fodelsedatum" value={person.fodelsedatum} onChange={handleChange} placeholder="Födelsedatum" />
      <button type="submit">{editingPerson ? 'Uppdatera person' : 'Spara person'}</button>
      {editingPerson && <button type="button" onClick={cancelEdit}>Avbryt</button>}
    </form>
  );
};

export default PersonForm;
