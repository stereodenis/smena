import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";
import Presenter from "./presenter";
import { PATHS } from "../../paths";
import { TRootScreenProps } from "../../navigation";

const ShiftsScreen = ({ navigation }: TRootScreenProps<PATHS.SHIFTS>) => {
  const [location, setLocation] = useState<Shifts.Location | null>(null);
  const [shifts, setShifts] = useState<Shifts.Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


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

  const handleItemPress = useCallback((shift: Shifts.Shift) => () => {
    navigation.navigate(PATHS.SHIFT, { shift })
  }, [navigation])

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

  return <Presenter shifts={shifts} handleItemPress={handleItemPress} />
};

export default ShiftsScreen;
