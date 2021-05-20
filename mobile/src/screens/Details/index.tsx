import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { composeAsync } from 'expo-mail-composer';
import React, { useCallback, useMemo } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import getEnvironment from '../../config/environment';
import { Incident } from '../../types/incident';
import s from './styles';

type RouteParams = {
  incident: Incident;
};

export default function Details() {
  const { email } = getEnvironment();
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { incident } = params as RouteParams;

  const message = useMemo(
    () =>
      `Hello ${
        incident.name
      }, I am contacting you, because I want to help the incident "${
        incident.title
      }" in the amount of ${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(incident.value)}.`,
    []
  );

  const sendWhatsApp = useCallback(() => {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }, []);

  const sendMail = useCallback(() => {
    composeAsync({
      subject: `Hero of "${incident.title}"`,
      recipients: [email],
      body: message,
    });
  }, []);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require('../../../assets/logo.png')} />
        <TouchableOpacity style={s.detailsButton} onPress={goBack}>
          <Feather name="arrow-left" size={16} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={s.incident}>
        <Text style={[s.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={s.incidentValue}>
          {incident.name} of {incident.city}-{incident.state}
        </Text>

        <Text style={s.incidentProperty}>INCIDENT:</Text>
        <Text style={s.incidentValue}>{incident.description}</Text>

        <Text style={s.incidentProperty}>VALUE:</Text>
        <Text style={s.incidentValue}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Text>
      </View>

      <View style={s.contactBox}>
        <Text style={s.heroTitle}>Save the day!</Text>
        <Text style={s.heroTitle}>Be the hero of this incident.</Text>

        <Text style={s.heroDescription}>Contact us:</Text>

        <View style={s.actions}>
          <TouchableOpacity style={s.action} onPress={sendWhatsApp}>
            <Text style={s.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.action} onPress={sendMail}>
            <Text style={s.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
