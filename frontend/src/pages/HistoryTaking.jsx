import React, { useState } from 'react';
import axios from 'axios';
import { QuestionBank } from '../QuestionBank';

export default function HistoryTaking() {
  const [step, setStep] = useState(1);
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const [answers, setAnswers] = useState({});

  const handleInputChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/save', {
        complaints: selectedComplaints,
        details: answers
      });
      alert("Success! Saved to local .db");
    } catch (err) {
      alert("Error: Is backend server.js running?");
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
      {step === 1 ? (
        <div className="step-1">
          <h2>Green Zone Triage: Select Chief Complaint</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {Object.keys(QuestionBank).map(name => (
              <button key={name} 
                onClick={() => setSelectedComplaints(prev => prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name])}
                style={{ padding: '15px', backgroundColor: selectedComplaints.includes(name) ? '#27ae60' : '#fff', color: selectedComplaints.includes(name) ? '#fff' : '#000', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}
              >
                {name}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} disabled={selectedComplaints.length === 0} style={{ marginTop: '20px', width: '100%', padding: '15px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '8px' }}>Next</button>
        </div>
      ) : (
        <div className="step-2">
          <h2>Patient History</h2>
          {selectedComplaints.map(complaint => (
            <div key={complaint} style={{ marginBottom: '40px', padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
              <h3 style={{ borderBottom: '2px solid #2ecc71', paddingBottom: '5px' }}>{complaint}</h3>
              {QuestionBank[complaint].map(q => (
                <div key={q.id} style={{ margin: '15px 0' }}>
                  <label><strong>{q.label}</strong></label><br/>
                  
                  {q.type === 'date' && <input type="date" style={{ width: '100%', padding: '8px' }} onChange={e => handleInputChange(q.id, e.target.value)} />}
                  
                  {q.type === 'number' && <input type="number" style={{ width: '100%', padding: '8px' }} onChange={e => handleInputChange(q.id, e.target.value)} />}
                  
                  {q.type === 'text' && <input type="text" style={{ width: '100%', padding: '8px' }} onChange={e => handleInputChange(q.id, e.target.value)} />}

                  {q.type === 'select' && (
                    <select style={{ width: '100%', padding: '8px' }} onChange={e => handleInputChange(q.id, e.target.value)}>
                      <option value="">Select Option</option>
                      {q.options.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}

                  {q.type === 'range' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input type="range" min="1" max="10" onChange={e => handleInputChange(q.id, e.target.value)} />
                      <span>{answers[q.id] || 5} / 10</span>
                    </div>
                  )}

                  {q.type === 'abdomen_map' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px', marginTop: '10px' }}>
                      {["RUQ", "Epi", "LUQ", "RL", "Umb", "LL", "RIF", "Sup", "LIF"].map(r => (
                        <button key={r} type="button" 
                          onClick={() => handleInputChange(q.id, r)}
                          style={{ padding: '15px 5px', backgroundColor: answers[q.id] === r ? '#2ecc71' : '#f0f0f0', border: '1px solid #ccc', cursor: 'pointer' }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <button onClick={() => setStep(1)} style={{ marginRight: '10px' }}>Back</button>
          <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#27ae60', color: '#fff', border: 'none' }}>Submit to Doctor</button>
        </div>
      )}
    </div>
  );
}