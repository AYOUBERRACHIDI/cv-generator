import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './components/PDFDocument';

const App = () => {
  const [cvData, setCvData] = useState(null);

  return (
    <div className="App">
      <h1>Générateur de CV</h1>
      <Form setCvData={setCvData} />
      {cvData && (
        <div>
          <h2>Aperçu du CV</h2>
          <Preview data={cvData} />
          <PDFDownloadLink
            document={<PDFDocument data={cvData} />}
            fileName="cv.pdf"
          >
            {({ loading }) => (loading ? 'Génération du PDF...' : 'Télécharger le CV')}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default App;
