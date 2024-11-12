import React from 'react';
import Select from 'react-select'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';
function Home() {
  //create a effect hook
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home`;
  });
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div>
       <Select options={options} />    </div>
  );
}
export default Home;