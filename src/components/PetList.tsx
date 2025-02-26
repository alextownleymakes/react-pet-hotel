import React, { useEffect, useState } from 'react';
import { Pet, Owner, Toy, User } from '../api/types';
import { useLocation } from 'wouter';
import PetCard, { PetCardType } from './PetCard';


const PetList: React.FC = () => {

  const [error, setError] = useState('');
  const [fetched, setFetched] = useState(false);
  const [petData, setPetData] = useState<Pet[]>([])
  const [ownerData, setOwnerData] = useState<Owner[]>([])
  const [toyData, setToyData] = useState<Toy[]>([])
  const [petCardData, setPetCardData] = useState<PetCardType[]>([])
  const [user, setUser] = useState<User | null>(null);
  const [userFetched, setUserFetched] = useState(false);

  const [location, navigate] = useLocation();

  useEffect(() => {
    checkAuth();
  }, [])

  useEffect(() => {
    if (user && !fetched) {
      fetchCardData();
    } 

    if (!user && userFetched) {
      navigate('/login');
    }
  }, [user, fetched])

  const fetchCardData = async () => {
    try {
      const td = await getToyData();
      const pd = user && await getPetData(user.role);
      const od = await getOwnerData();

      if (pd && od && td) {
        setFetched(true);
      } else {
        throw new Error('data not fetched');
      }

    } catch (error) {
      setError(error as string)
      return error;
    }
  }


  const getPetData = async (role: string) => {
    const url = `/api/pets/${role}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const data = await res.json();
      setPetData(data);

      return data;

    } catch (error) {
      setError(error as string)
      return error;
    }
  }

  const getOwnerData = async () => {
    const url = "/api/owners";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const data = await res.json();
      setOwnerData(data);

      return data;

    } catch (error) {
      setError(error as string)
      return error;
    }
  }

  const getToyData = async () => {
    const url = "/api/toys";
    try {

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const data = await res.json();
      setToyData(data);

      return data;

    } catch (error) {
      setError(error as string)
      return error;
    }
  }

  const checkAuth = async () => {
    const url = "/api/users";
    const userFromUrl = location.substring(location.indexOf('/') + 1);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const data: User[] = await res.json();

      const validUser = data.find(user => user.username.toLowerCase() === userFromUrl.toLowerCase());

      if (!validUser) {
        navigate('/login');
      } else {
        setUser(validUser);
      }
      
      setUserFetched(true);
      return data;

    } catch (error) {
      setError(error as string)
    }
  }

  useEffect(() => {

    if (fetched) {
      const petCardData: PetCardType[] = []
      if (petData.length > 0) {
        petData.forEach(pet => {
          const toys = toyData.filter(toy => pet.favoriteToys.includes(toy.id)).map(toy => toy.name);
          const owner = ownerData.find(owner => owner.id === pet.ownerId)!.name;
          const name = pet.name;
          const checkedIn = pet.checkedIn;
          const data = {
            name,
            owner,
            toys,
            checkedIn, 
            type: pet.type,
            breed: pet.breed,
          }
          petCardData.push(data);
        })
      }
      const alpha = petCardData.sort((a, b) => a.name.localeCompare(b.name));
      setPetCardData(alpha);
    }
  }, [fetched])

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
      }}>

        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center', 
          padding: '0 20px'
        }}>
          <h1>Pet List</h1>
          <button type="button" style={{border: 'none', background: 'none', cursor: 'pointer'}} onClick={() => setUser(null)}>Logout</button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          textAlign: 'left',
          gap: 10, 
          width: '100%'
        }}>
          <label htmlFor="sort"><h3 style={{marginBottom: 0}}>Filter</h3></label>
          <select
            name="sort"
            id="sort"
            style={{
              fontSize: 16,
              padding: 10,
              borderRadius: 10,
              width: '150px',
              textAlign: 'center'
            }}
            onChange={(e) => {
              setPetCardData([...petCardData].sort((a, b) =>
                e.target.value === 'owner'
                  ? a.owner.localeCompare(b.owner)
                  : a.name.localeCompare(b.name)
              ));
            }}>
            <option value="">Sort by..</option>
            <option value="pet">Pet</option>
            <option value="owner">Owner</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {petCardData?.map((pet) => <PetCard key={pet.name} {...pet} />)}
      </div>
      {error && <p style={{ color: '#a20' }} >{error.toString()}</p>}
    </div>
  );
};

export default PetList;
