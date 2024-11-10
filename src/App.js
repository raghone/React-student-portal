import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">ConnectEd</div>
        <h1 className="title">Student Portal</h1>
        <div className="user-info">
          <p>Hello, Gabrisa!</p>
          <p>Class 7, Math + Science</p>
        </div>
      </header>
      <main className="main-content">
        <section className="announcements">
          <h2>Announcements</h2>
          <div className="announcement-card">
            <p>On account of Independence Day, August 15th will be a holiday.</p>
          </div>
          <div className="announcement-card">
            <p>Reminder to finish your assignments and submit them by Monday.</p>
          </div>
        </section>

        <section className="quick-links">
          <h2>Quick Links</h2>
          <div className="link-card canvas">Canvas LMS</div>
          <div className="link-card live-class">Join Live Class</div>
          <div className="link-card contact-teacher">Contact Teacher</div>
        </section>

        <section className="class-schedule">
          <h2>Your Class Schedule</h2>
          <div className="schedule-card">
            <p>Class 7, Science | Live Class</p>
            <p>Tuesday, 5:00 - 5:50 PM</p>
            <p>Yesterday</p>
          </div>
          <div className="schedule-card active">
            <p>Class 7, Science | Live Class</p>
            <p>Tuesday, 6:30 - 7:15 PM</p>
            <p>Today</p>
          </div>
          <div className="schedule-card">
            <p>Class 7, Science | Live Class</p>
            <p>Tuesday, 5:00 - 5:50 PM</p>
            <p>Tomorrow</p>
          </div>
        </section>

        <section className="class-recordings">
          <h2>Access Class Recordings</h2>
          <input type="text" className="search-bar" placeholder="Search for class recordings" />
          <div className="filter-options">
            <span>This week</span> | <span>All subjects</span>
          </div>
          <div className="recording-card">
            <p>Class 7 Math</p>
            <p>Algebraic Equations</p>
            <p>24th October, 2024</p>
          </div>
          <div className="recording-card">
            <p>Class 7 Math</p>
            <p>Differential Maths</p>
            <p>24th October, 2024</p>
          </div>
          <div className="recording-card">
            <p>Class 7 Science</p>
            <p>Fundamentals of Organic Chemistry</p>
            <p>24th October, 2024</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;











