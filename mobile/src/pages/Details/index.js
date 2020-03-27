import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Details() {
  const navigation = useNavigation();
  const message =
    'Hello AJAPRA, I am contacting you, because I want to help theincident "Cachorro atropelado" in the amount of R$ 120,00.';

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=5547987654321&text=${message}`);
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Hero of "Cachorro atropelado"',
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
        <Text style={styles.incidentValue}>AJAPRA</Text>

        <Text style={styles.incidentProperty}>INCIDENT:</Text>
        <Text style={styles.incidentValue}>Cachorro atropelado</Text>

        <Text style={styles.incidentProperty}>VALUE:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
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
