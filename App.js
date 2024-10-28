import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ListRenderer from './components/ListRenderer';
import LoggingComponent from './components/LoggingComponent';
import RegistrationForm from './components/RegistrationForm';
import withLogging from './components/withLogging';

const names = ['Alice', 'Bob', 'Charlie'];

const EnhancedLoggingComponent = withLogging(LoggingComponent);

const App = () => {
  return (
    <ThemeProvider>
      <h1>React Assessment</h1>
      <ListRenderer names={names} />
      <EnhancedLoggingComponent />
      <RegistrationForm />
    </ThemeProvider>
  );
};

export default App;
