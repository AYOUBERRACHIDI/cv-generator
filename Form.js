    import React, { useState } from 'react';

    const Form = ({ setCvData }) => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    profilePicture: null,
    skills: [''],
    languages: [{ name: '', level: '' }],
    hobbies: [''], 
    experiences: '',
    education: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
        };
        reader.readAsDataURL(file);
    }
    };

    const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
    };

    const handleLanguageChange = (index, field, value) => {
    const newLanguages = [...formData.languages];
    newLanguages[index][field] = value;
    setFormData({ ...formData, languages: newLanguages });
    };

    const handleHobbyChange = (index, value) => {
    const newHobbies = [...formData.hobbies];
    newHobbies[index] = value;
    setFormData({ ...formData, hobbies: newHobbies });
    };

    const handleAddSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ''] });
    };

    const handleAddLanguage = () => {
    setFormData({ ...formData, languages: [...formData.languages, { name: '', level: '' }] });
    };

    const handleAddHobby = () => {
    setFormData({ ...formData, hobbies: [...formData.hobbies, ''] });
    };

    const handleRemoveLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({ ...formData, languages: newLanguages });
    };

    const handleRemoveHobby = (index) => {
    const newHobbies = formData.hobbies.filter((_, i) => i !== index);
    setFormData({ ...formData, hobbies: newHobbies });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setCvData(formData);
    };

    return (
    <form onSubmit={handleSubmit} className="cv-form">
        <h2>Informations Personnelles</h2>
        <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Téléphone" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Adresse" onChange={handleChange} />
        <input type="text" name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleFileChange} required/>

        <h3>Compétences</h3>
        {formData.skills.map((skill, index) => (
        <input
            key={index}
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            placeholder="Compétence"
        />
        ))}
        <button type="button" onClick={handleAddSkill}>Ajouter une compétence</button>

        <h3>Langues</h3>
        {formData.languages.map((language, index) => (
        <div key={index} className="language-input">
            <input
            type="text"
            value={language.name}
            onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
            placeholder="Langue"
            required
            />
            <select
            value={language.level}
            onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
            required
            >
            <option value="">Niveau</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            </select>
            <button type="button" onClick={() => handleRemoveLanguage(index)}>Supprimer</button>
        </div>
        ))}
        <button type="button" onClick={handleAddLanguage}>Ajouter une langue</button>

        <h3>Loisirs</h3>
        {formData.hobbies.map((hobby, index) => (
        <div key={index} className="hobby-input">
            <input
            type="text"
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e.target.value)}
            placeholder="Loisir"
            required
            />
            <button type="button" onClick={() => handleRemoveHobby(index)}>Supprimer</button> 
        </div>
        ))}
        <br></br>
        <button type="button" onClick={handleAddHobby}>Ajouter un loisir</button>

        <h3>Expériences Professionnelles</h3>
        <textarea name="experiences" placeholder="Décrivez vos expériences" onChange={handleChange} />

        <h3>Éducation</h3>
        <textarea name="education" placeholder="Décrivez votre formation" onChange={handleChange} />

        <button type="submit">Générer CV</button>
    </form>
    );
    };

    export default Form;
