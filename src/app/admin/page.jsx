'use client';
import { useState, useEffect } from 'react';
import { fetchProcessingRegistrations, fetchCompletedRegistrations, approveRegistration } from '@/firebase/registration';

const AdminPage = () => {
  const [processingRegistrations, setProcessingRegistrations] = useState([]);
  const [completedRegistrations, setCompletedRegistrations] = useState([]);
  const [showProcessing, setShowProcessing] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const processingDocs = await fetchProcessingRegistrations();
        setProcessingRegistrations(processingDocs);

        const completedDocs = await fetchCompletedRegistrations();
        setCompletedRegistrations(completedDocs);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);


  const handleApprove = async (registrationId) => {
    try {
      await approveRegistration(registrationId);
 
      // Ideally, trigger a re-fetch or local state update to reflect changes
      setProcessingRegistrations(processingRegistrations.filter(reg => reg.id !== registrationId));
      // Add the updated registration to completedRegistrations, or implement a refetch
 
    } catch (error) {
      console.error('Error approving registration:', error);
      // TODO: Handle errors (display an error message, etc.)
    }
 };

  return (
    <div className="admin-page">
      <h1>Registrations Dashboard</h1>

     <div className="toggle-container">
        <button onClick={() => setShowProcessing(!showProcessing)}>
          Toggle: {showProcessing ? "Processing" : "Completed"}
        </button>
      </div>

      {showProcessing ? (
        <section className="processing-registrations">
          <h2>Processing Registrations</h2>
          {processingRegistrations.length === 0 ? (
            <p>No processing registrations found.</p>
          ) : (
            <ul>
              {processingRegistrations.map(registration => (
                <li key={registration.id} className="registration-item">
                <p>Name: {registration.name}</p>
                <p>Email: {registration.email}</p>
                <img src={registration.photoURL} alt={registration.name} /> {/* Display Photo */}
                <button onClick={() => handleApprove(registration.id)}>Approve</button>
              </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <section className="completed-registrations">
          <h2>Completed Registrations</h2>
           {completedRegistrations.length === 0 ? (
            <p>No completed registrations found.</p>
          ) : (
            <ul>
              {completedRegistrations.map(registration => (
                <li key={registration.id} className="registration-item">
                <p>Name: {registration.name}</p>
                <p>Email: {registration.email}</p>
                <p>Code: {registration.code}</p> 
              </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
};

export default AdminPage;
