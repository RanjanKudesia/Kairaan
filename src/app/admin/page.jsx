'use client';
import { useState, useEffect } from 'react';
import "./page.css";
import { fetchProcessingRegistrations, fetchCompletedRegistrations, approveRegistration, checkInUser, fetchCheckedInRegistrations } from '@/firebase/registration';
import { useGlobalState } from "@/context/globalState";


const AdminPage = () => {
  const [processingRegistrations, setProcessingRegistrations] = useState([]);
  const [checkedInRegistrations, setCheckedInRegistrations] = useState([]);
  const [completedRegistrations, setCompletedRegistrations] = useState([]);
  const [showWhat, setShowWhat] = useState('processing');
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredProcessing, setFilteredProcessing] = useState([]);
  const [filteredCompleted, setFilteredCompleted] = useState([]);
  const [filteredCheckedIn, setFilteredCheckedIn] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const { auth } = useGlobalState();

  useEffect(() => {
    async function check() {
      if (auth?.user?.email == "final@test.com"){

        setIsAdmin(true)
      }


    }
    setIsAdmin(false)
    if (auth.user) {
      check()
    }

  }, [auth])

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const processingDocs = await fetchProcessingRegistrations();
        setProcessingRegistrations(processingDocs);

        const completedDocs = await fetchCompletedRegistrations();
        setCompletedRegistrations(completedDocs);

        const checkedInDocs = await fetchCheckedInRegistrations();
        setCheckedInRegistrations(checkedInDocs);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, [showWhat]);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    setFilteredProcessing(processingRegistrations.filter(reg =>
      reg.name.toLowerCase().includes(lowerSearch)
    ));
    setFilteredCompleted(completedRegistrations.filter(reg =>
      reg.name.toLowerCase().includes(lowerSearch)
    ).concat(completedRegistrations.filter(reg =>
      reg.code.toLowerCase().includes(lowerSearch) 
    )));
    setFilteredCheckedIn(checkedInRegistrations.filter(reg =>
      reg.name.toLowerCase().includes(lowerSearch) 
    ).concat(checkedInRegistrations.filter(reg =>
      reg.code.toLowerCase().includes(lowerSearch) 
    )));
  }, [searchTerm, processingRegistrations, completedRegistrations, checkedInRegistrations]);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };



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

 const handleCheckIn = async (registrationId) => {
  try {
    await checkInUser(registrationId);

    // Ideally, trigger a re-fetch or local state update to reflect changes
    setCompletedRegistrations(completedRegistrations.filter(reg => reg.id !== registrationId));
    // Add the updated registration to completedRegistrations, or implement a refetch

  } catch (error) {
    console.error('Error approving registration:', error);
    // TODO: Handle errors (display an error message, etc.)
  }
};


  return isAdmin? (
    
    <div className="admin-page relative text-white pt-5 min-h-screen flex justify-center items-center flex-col bg-gradient-to-r from-[#2b4992] via-[#87a1c6] to-[#3f5294] p-8 bg-opacity-50">
      <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/assets/b2.jpg')" }}
        ></div>
        <div className='z-50 text-white'>

      <h2 className="text-3xl leading-[50px] md:text-4xl md:leading-[60px] lg:leading-[70px] lg:text-5xl font-bold text-center">
      Registrations Dashboard
            </h2>
     <div className="toggle-container text-center my-5">
        <button onClick={() => setShowWhat('processing')} className={`bg-[rgba(0,0,0,0.5)] py-4 px-8 rounded-lg 
               ${showWhat === 'processing' ? 'active' : ''}`}>
          Processing
        </button>
        <button onClick={() => setShowWhat('completed')} className={`bg-[rgba(0,0,0,0.5)] py-4 px-8 rounded-lg 
               ${showWhat === 'completed' ? 'active' : ''}`}>
          Completed
        </button>
        <button onClick={() => setShowWhat('checked-in')} className={`bg-[rgba(0,0,0,0.5)] py-4 px-8 rounded-lg 
               ${showWhat === 'checked-in' ? 'active' : ''}`}>
          Checked In
        </button>
      </div>
      <div className="toggle-container text-center my-5">

      <input 
  type="text" 
  placeholder="Search by name..." 
  className='bg-[rgba(0,0,0,0.5)] py-2 px-4 rounded-lg mb-4' // Add some styling
  onChange={(event) => handleSearchChange(event.target.value)}  
/>
</div>

      {showWhat == 'processing' ? (
        <section className="processing-registrations">
          <p className='text-2xl text-center'>Processing Registrations</p>
          {processingRegistrations.length === 0 ? (
            <p className='text-center text-xl'>No processing registrations found.</p>
          ) : (
            <ul>
            
             
                    <table className="w-full border-2 rounded-md border-white text-center mt-10" >
                    <thead className="border-2 rounded-md border-white text-xl uppercase">
                      <tr>
                        <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Name</th>
                        <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Email</th>
                        <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Receipt</th>
                        <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Status</th>
                      </tr>
                    </thead>
                    {filteredProcessing.map(registration => (
                    <tbody key={registration.id} >
                      <tr className="border-2 rounded-md border-white">
                        <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base">{registration.name}</td>
                        <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.email}</td>
                        <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> <img src={registration.photoURL} alt={registration.name} className='w-full h-20 object-contain'/> {/* Display Photo */}
                  </td>
                        <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"><button onClick={() => handleApprove(registration.id)} className='bg-[rgba(0,0,0,0.5)] py-2 px-8 rounded-lg'>Approve</button>
                  </td>
                      </tr>
                    
                    </tbody>
                      ))}
                  </table>
            
            
            </ul>
          )}
        </section>
      ) : ( showWhat == 'completed' ? 
        (<section className="completed-registrations">
          <p className='text-2xl text-center'>Completed Registrations</p>
           {completedRegistrations.length === 0 ? (
            <p className='text-center text-xl'>No completed registrations found.</p>
          ) : (
            
            <ul>
             
                  <table className="registration-item w-full border-2 rounded-md border-white text-center mt-10">
                  <thead className="border-2 rounded-md border-white text-xl uppercase">
                    <tr>
                      <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Name</th>
                      <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Email</th>
                      <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Registartion Code</th>
                      <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Status</th>
                    </tr>
                  </thead>
                  {filteredCompleted.map(registration => (
                  <tbody  key={registration.id}>
                    <tr className="border-2 rounded-md border-white">
                      <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base">{registration.name}</td>
                      <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.email}</td>
                      <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.code}</td>
                      <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"><button onClick={() => handleCheckIn(registration.id)} className='bg-[rgba(0,0,0,0.5)] py-2 px-8 rounded-lg'>Check In</button>
                    </td>
                    </tr>
                  
                  </tbody>
                   ))}
                </table>
              
             
            </ul>
          )}
        </section>) : 
        (
          <section className="processing-registrations">
            <p className='text-2xl text-center'>Checked In Registrations</p>
            {checkedInRegistrations.length === 0 ? (
              <p className='text-center text-xl'>No checked in registrations found.</p>
            ) : (
              <ul>
              
               
                      <table className="w-full border-2 rounded-md border-white text-center mt-10" >
                      <thead className="border-2 rounded-md border-white text-xl uppercase">
                        <tr>
                          <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Name</th>
                          <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Email</th>
                          <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">College</th>
                          <th className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base tracking-wider">Phone</th>
                        </tr>
                      </thead>
                      {filteredCheckedIn.map(registration => (
                      <tbody key={registration.id} >
                        <tr className="border-2 rounded-md border-white">
                          <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base">{registration.name}</td>
                          <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.email}</td>
                          <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.college}</td>
                          <td className="border-2 rounded-md border-white p-2 md:py-4 md:px-16 text-sm md:text-base"> {registration.phone}</td>
                  
                          
                        </tr>
                      
                      </tbody>
                        ))}
                    </table>
              
              
              </ul>
            )}
          </section>
        )
      )}
       </div>
    </div>
  ):(
    <div>
      UNAUTHORIZED ACCESS
    </div>
  );
};

export default AdminPage;
