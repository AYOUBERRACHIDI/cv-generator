import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 12,
        color: '#333', 
        fontFamily: 'Helvetica',
        backgroundColor: '#FFFFFF', 
    },
    header: {
        fontSize: 36,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: '#008B8B',
        borderRadius: 3,
        color: '#FFFFFF', 
    },
    section: {
        marginBottom: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftColumn: {
        width: '28%',
        paddingRight: 10,
        backgroundColor: '#008B8B', 
        padding: 10,
        borderRadius: 5,
        alignContent:'center',
        
    },
    rightColumn: {
        width: '72%',
        paddingLeft: 10,
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        marginBottom: 10,
        alignContent: 'center',
    },
    contactInfo: {
        marginBottom: 20,
    },
    contactText: {
        marginBottom: 5,
        color: '#FFFFFF', 
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000000', 
    },
    text: {
        marginBottom: 5,
        
    },
    listItem: {
        marginBottom: 5,
        
    },
    listItemS: {
        marginBottom: 5,
        color: '#FFFFFF', 
    },
    divider: {
        marginVertical: 5,
        height: 1,
        backgroundColor: '#ECECEC',
    },
});

const PDFDocument = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    {data.profilePicture && <Image style={styles.profilePic} src={data.profilePicture} />}
                    <View style={styles.contactInfo}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        <Text style={styles.contactText}>Email: {data.email}</Text>
                        <Text style={styles.contactText}>Téléphone: {data.phone}</Text>
                        <Text style={styles.contactText}>Adresse: {data.address}</Text>
                        <Text style={styles.contactText}>LinkedIn: {data.linkedin}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Langues</Text>
                        {data.languages.map((language, index) => (
                            <Text key={index} style={styles.listItemS}>{`${language.name} - ${language.level}`}</Text>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Loisirs</Text>
                        {data.hobbies.map((hobby, index) => (
                            <Text key={index} style={styles.listItemS}>{hobby}</Text>
                        ))}
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.header}>{data.name}</Text>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Compétences</Text>
                        {data.skills.map((skill, index) => (
                            <Text key={index} style={styles.listItem}>{skill}</Text>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Expériences Professionnelles</Text>
                        <Text>{data.experiences}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Éducation</Text>
                        <Text>{data.education}</Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDFDocument;
