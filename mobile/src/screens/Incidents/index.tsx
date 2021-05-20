import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { DETAILS } from '../../config/routes';
import api from '../../services/api';
import { Incident } from '../../types/incident';
import s from './styles';

export default function Incidents() {
  const { navigate } = useNavigation();
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [incidentsCount, setIncidentsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (incidentsCount > 0 && incidentsCount === incidents.length) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', { params: { page } });

    setIncidents([...incidents, ...response.data]);
    setIncidentsCount(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  const navigateToDetails = useCallback((incident: Incident) => {
    navigate(DETAILS, { incident });
  }, []);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={s.headerText}>
          Total of{' '}
          <Text style={s.headerTextBold}>{incidentsCount} incidents</Text>
        </Text>
      </View>

      <Text style={s.title}>Welcome</Text>
      <Text style={s.description}>
        Choose an incident below and save the day:
      </Text>

      <FlatList
        style={s.incidentList}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={s.incident}>
            <Text style={s.incidentProperty}>NGO:</Text>
            <Text style={s.incidentValue}>{incident.name}</Text>
            <Text style={s.incidentProperty}>INCIDENT:</Text>
            <Text style={s.incidentValue}>{incident.title}</Text>
            <Text style={s.incidentProperty}>VALUE:</Text>
            <Text style={s.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={s.detailsButton}
              onPress={() => {
                navigateToDetails(incident);
              }}
            >
              <Text style={s.detailsButtonText}>Further details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
