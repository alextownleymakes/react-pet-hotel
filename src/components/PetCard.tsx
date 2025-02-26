import React from 'react';

export interface PetCardType {
    name: string;
    owner: string;
    toys: string[];
    checkedIn: boolean;
    type: string;
    breed: string;
}

const PetCard: React.FC<PetCardType> = ({ name, owner, toys, checkedIn, type, breed }) => {

    return (
        <div style={{ border: '1px solid #2e2e2e', padding: 0, borderRadius: 5, margin: 10, flex: 1, minWidth: 'calc(25% - 22px)', maxWidth: 'calc(25% - 22px)', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.15)'}}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #aaa', padding: 10 }}>
                <h2 style={{ margin: 0 }}><div style={{display: 'inline-block', textAlign: 'center', padding: 5, width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(159, 232, 236, 0.47)', backgroundColor: 'rgb(86, 214, 203)',   boxShadow: 'inset -2px -2px 8px rgb(255, 255, 255), inset -4px 4px 5px rgb(12, 172, 180)', marginRight: 10}}>{type.toLowerCase() === 'cat' ? '🐱' : '🐶'}</div>{name}</h2>
                <p style={{ fontSize: 10, marginTop: 15, marginBottom: 0, textTransform: 'uppercase', color: checkedIn ? 'green' : 'red' }}>
                    {checkedIn ? 'Checked In' : 'Checked Out'}
                </p>
            </div>
            <div style={{ padding: '10px 20px', textAlign: 'center' }}>
                <h4 style={{ margin: 0, textTransform: 'capitalize', color: '#444', paddingTop: 5 }}>
                    {owner}&apos;s {type}
                </h4>
                <h4 style={{ margin: 0, fontWeight: 400, fontSize: 12, textTransform: 'capitalize', color: '#444', paddingTop: 5 }}>
                    {breed}
                </h4>
            </div>
            <div style={{ padding: '10px 20px', textAlign: 'center' }}>
                <h4 style={{ margin: 0, textTransform: 'uppercase', color: '#444' }}>
                    Favorite Toys
                </h4>
                <span style={{ textTransform: 'capitalize', color: '#444', fontSize: 12 }}>
                    {toys.map((toy, i) => `${toy}${i < toys.length - 1 ? ', ' : ''}`)}
                </span>
            </div>
        </div>
    )
}

export default PetCard;