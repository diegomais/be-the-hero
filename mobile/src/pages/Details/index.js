import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { incident } = route.params;
  const message = `Hello ${
    incident.name
  }, I am contacting you, because I want to help the incident "${
    incident.title
  }" in the amount of ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Hero of "${incident.title}"`,
      recipients: ['diegomais.dev@gmail.com'],
      body: message,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
          <Feather name="arrow-left" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} of {incident.city}-{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>INCIDENT:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALUE:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this incident.</Text>

        <Text style={styles.heroDescription}>Contact us:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
