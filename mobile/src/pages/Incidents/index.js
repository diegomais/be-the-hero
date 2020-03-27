import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [incidentsTotal, setIncidentsTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (incidentsTotal > 0 && incidentsTotal === incidents.length) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', { params: { page } });

    setIncidents([...incidents, ...response.data]);
    setIncidentsTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate('Details', { incident });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of{' '}
          <Text style={styles.headerTextBold}>{incidentsTotal} incidents</Text>
        </Text>
      </View>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>
        Choose an incident below and save the day:
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>INCIDENT:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>VALUE:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => {
                navigateToDetail(incident);
              }}
            >
              <Text style={styles.detailsButtonText}>Further details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
