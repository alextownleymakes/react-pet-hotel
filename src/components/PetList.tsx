import React, { useState } from 'react';
import { Pet, Owner, Toy } from '../api/types';

function PetList() {

  const [error, setError] = useState('');
  const [petData, setPetData] = useState<Pet[]>([])
  const [ownerData, setOwnerData] = useState<Owner[]>([])
  const [toyData, setToyData] = useState<Toy[]>([])

  const getPetData = async () => {
    const url = "/api/pets";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      setPetData(await res.json());
      
    } catch(error: any) {
      setError(error)
    }
  }

  const getOwnerData = async () => {
    const url = "/api/owners";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      setPetData(await res.json());
    
    } catch(error: any) {
      setError(error)
    }
  }

  const getToyData = async () => {
    const url = "/api/toys";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      setPetData(await res.json());
      
    } catch(error: any) {
      setError(error)
    }
  }
  
  return (
    <div>
      <h1>Pet List</h1>
    </div>
  );
};

export default PetList;
