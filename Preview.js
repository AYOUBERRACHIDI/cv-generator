    import React from 'react';

    const Preview = ({ data }) => (
    <div className="cv-preview">
    
    <img src={data.profilePicture} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
    <h3>{data.name}</h3>
    <p>Email: {data.email}</p>
    <p>Téléphone: {data.phone}</p>
    <p>Adresse: {data.address}</p>
    <p>LinkedIn: {data.linkedin}</p>

    <h3>Compétences</h3>
    <ul>
        {data.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
        ))}
    </ul>

    <h3>Langues</h3>
    <ul>
        {data.languages.map((language, index) => (
        <li key={index}>{`${language.name} - ${language.level}`}</li>
        ))}
    </ul>

    <h3>Loisirs</h3>
    <p>{data.hobbies}</p>

    <h3>Expériences Professionnelles</h3>
    <p>{data.experiences}</p>

    <h3>Éducation</h3>
    <p>{data.education}</p>
    </div>
    );

    export default Preview;
