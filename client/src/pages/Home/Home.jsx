import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the CSS for styling
import Table from './../../components/Table/Table'; // Import the Table component
import './Home.css';

function Home({ darkMode, toggleDarkMode }) {
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is your home page content.</p>

        <Tabs>
          <TabList>
            <Tab>Table</Tab>
            <Tab>Gallery</Tab>
            <Tab>Paragraph</Tab>
          </TabList>

          <TabPanel>
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </TabPanel>

          <TabPanel>
            <p>Content for the Gallery tab goes here. You can render a gallery component here.</p>
          </TabPanel>

          <TabPanel>
            <p>Content for the Paragraph tab goes here. You can include text and images here.</p>
            <img src="your-image.jpg" alt="Your Image" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;

