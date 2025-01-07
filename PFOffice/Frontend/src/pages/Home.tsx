import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';

export default function Home() {
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate('/admin');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Welcome to the Event Management System</h1>
      <p>
        When you have decided as a group which practical case you're going to work on during the course you can uncomment the desired database model in the <b>DatabaseContext.cs</b> and add a new migration.
      </p>

      <h2>Adding a new database migration</h2>
      <p>
        Whenever you make a change to the <b>DatabaseContext</b> you will need to add a new migration.
        All the database changes are being managed from the <i>/Migrations/</i> folder, the content of this folder is automatically generated. Do not edit this file by hand.
        Entity Framework Core is used to map the C# classes to SQL tables.
      </p>
      <p>
        To add a new migration after a database change run the following command: <i>dotnet ef migrations add [[Migration name]]</i>
      </p>

      <p>
        Inside the migrations folder you can already find a migration called <i>InitialCreate</i> containing the creation of the Admin entity.
      </p>

      <p>
        The <b>DatabaseContext.cs</b> file contains two pre-configured databases for the practical cases. You can uncomment one of them and add a new migration
        to apply the model. Inside this file you will also find some data seeds that create a couple of admin users with a password.
      </p>

      <p>
        After every migration you will also need to run <i>dotnet ef database update</i>, this will apply the changes to the database.
      </p>

      <button onClick={goToAdminDashboard}>Go to Admin Dashboard</button>

      <button onClick={goToLogin}>Go to Login</button>

      <button onClick={goToRegister}>Go to Register</button>
      <AccessibilityOptions />
    </div>
  );
}