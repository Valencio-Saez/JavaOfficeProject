// import { useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Event {
//   id: number;
//   title: string;
//   description: string;
//   startDate: string;
// }

// const Home = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     try {
//       const response = await axios.get('/api/v1/Login/IsUserLoggedIn', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       if (!response.data.IsLoggedIn) {
//         navigate('/login'); // Niet-ingelogd: doorsturen naar de loginpagina
//       } else {
//         fetchEvents(); // Ingelogd: haal evenementen op
//       }
//     } catch (error) {
//       console.error('Error checking login status:', error);
//       navigate('/login'); // Bij een fout: doorsturen naar de loginpagina
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('/api/v1/Event/GetAllEvents');
//       const futureEvents = response.data.filter((event: Event) => new Date(event.startDate) > new Date());
//       setEvents(futureEvents);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleEventClick = (id: number) => {
//     navigate(`/events/${id}`); // Navigeren naar de detailpagina van een evenement
//   };
//   const navigate = useNavigate();

//   const goToAdminDashboard = () => {
//     navigate('/admin');
//   };

//   return (
//     <div>
//       <h1>Upcoming Events</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td>{event.title}</td>
//               <td>{event.description}</td>
//               <td>{new Date(event.startDate).toLocaleString()}</td>
//               <td>
//                 <button onClick={() => handleEventClick(event.id)}>View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/api/v1/Login/IsUserLoggedIn', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!response.data.IsLoggedIn) {
        // navigate('/login'); // Not logged in: redirect to login page
      } else {
        fetchEvents(); // Logged in: fetch events
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      // navigate('/login'); // On error: redirect to login page
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/v1/Event/GetAllEvents');
      const futureEvents = response.data.filter((event: Event) => new Date(event.startDate) > new Date());
      setEvents(futureEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

// import * as React from "react";
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();

//   const goToAdminDashboard = () => {
//     navigate('/admin');
//   };

//   return (
//     <div className="container px-5 my-5">
//       <h1>Welcome to the Web development Starter kit!</h1>

//       <p>
//         This starter kit contains a basic setup that should help you get up to speed with developing
//         your web application
//       </p>

//       <p>
//         The code base of the starter kit contains the following;
//         <ul>
//           <li>Backend with .NET (C#)</li>
//           <li>Frontend using React with Typescript</li>
//           <li>Webpack with hot module reloading enabled</li>
//           <li>A database using Sqlite, we might change this to Postgres later</li>
//           <li>A sample database model for the two cases using Entity Framework core</li>
//           <li>CSS stylesheet using Bootstrap</li>
//         </ul>
//       </p>

//       <h2>Chosing a practical case</h2>
//       <p>
//         When you have decided as a group which practical case your going to work on during the course you can uncomment the desired database model in the <b>DatabaseContext.cs</b> and add a new migration.
//       </p>

//       <h2>Adding a new database migrations</h2>
//       <p>
//         Whenever you make a change to the <b>DatabaseContext</b> you will need to add a new migration.
//         All the database changes are being managed from the <i>/Migrations/</i> folder, the content of this folder is automatically generated. Do not edit this file by hand.
//         Entity Framework Core is used to map the C# classes to SQL tables.
//       </p>
//       <p>
//         To add a new migration after a database change run the following command: <i>dotnet ef migrations add [[Migration name]]</i>
//       </p>

//       <p>
//         Inside the migrations folder you can allready find a migration called <i>InitialCreate</i> containing the creation of the Admin entity.
//         The <b>DatabaseContext.cs</b> file contains two pre-configured databases for the practicall cases. You can uncomment one of them and add a new migration
//         to apply the model. Inside this file you will also find some data seeds that creates a couple of admin users with a password.

//         After every migration you will also need to run <i>dotnet ef database update</i>, this will apply the changes to the database.
//       </p>

//       <button onClick={goToAdminDashboard}>Go to Admin Dashboard</button>
//     </div>
//   );
// }
