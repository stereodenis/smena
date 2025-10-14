import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList, ListRenderItem,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

const ShiftListPage = () => {
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [shifts, setShifts] = useState<Shifts.Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const insets = useSafeAreaInsets()

  useEffect(() => {
    Geolocation.setRNConfiguration({ skipPermissionRequests: false, authorizationLevel: 'whenInUse' })
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLocation({latitude, longitude})
        setLoading(false)
      },
      (e) => {
        setError("ERROR")
        setLoading(false)
        console.log(e)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    )

  }, []);

  useEffect(() => {
    if (location) {
      fetchShifts(location.latitude, location.longitude)
    }
  }, [location]);


  const fetchShifts = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      const apiUrl = `https://mobile.handswork.pro/api/shifts/map-list-unauthorized?latitude=${latitude}&longitude=${longitude}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setShifts(data.data);
      setError(null);
    } catch (err) {
      console.error('Ошибка при загрузке смен:', err);
      setError('Не удалось загрузить список смен');
    } finally {
      setLoading(false);
    }
  };

  const renderShiftItem: ListRenderItem<Shifts.Shift> = ({ item }) => {
    return (
      <View style={styles.shiftItem}>
        <Text style={styles.shiftTitle}>{item.companyName || 'Смена'}</Text>
        <Text style={styles.shiftInfo}>Адрес: {item.address || 'Не указан'}</Text>
        <Text style={styles.shiftInfo}>Дата: {item.dateStartByCity || 'Не указана'}</Text>
        <Text style={styles.shiftInfo}>Время: {item.timeStartByCity || 'Не указано'}</Text>
        <Text style={styles.shiftSalary}>{item.priceWorker} ₽</Text>
      </View>
    )
  };

  const renderListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>
        Смены в вашем городе
      </Text>
      {location && (
        <Text style={styles.locationText}>
          Координаты: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
        </Text>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Получаем ваше местоположение...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text
          style={styles.retryText}
          onPress={() => {
            setLoading(true);
            setError(null);
          }}
        >
          Попробовать снова
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <FlatList<Shifts.Shift>
          data={shifts}
          renderItem={renderShiftItem}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={() =>
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Нет доступных смен в вашем городе</Text>
            </View>
          }
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ShiftListPage;
