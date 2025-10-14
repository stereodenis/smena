import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { TRootScreenProps } from "../../navigation";
import { PATHS } from "../../paths";
import styles from "./styles";
import { getFillPercentage, getProgressColor } from "./helpers";
import { formatDate, formatPrice } from "../../helpers";

const ShiftScreen = ({ route: {params: { shift }} }: TRootScreenProps<PATHS.SHIFT>) => {
  const openMap = () => {
    const url = `https://maps.google.com/?q=${encodeURIComponent(shift.address)}`;
    Linking.openURL(url).catch(err => console.error('Ошибка открытия карты:', err));
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          {Boolean(shift.logo) && (
            <Image
              source={{ uri: shift.logo }}
              style={styles.logo}
            />
          )}
          <View style={styles.companyText}>
            <Text style={styles.companyName}>{shift.companyName}</Text>
            <View style={styles.ratingContainer}>
              <StarRatingDisplay
                rating={shift.customerRating}
                starSize={16}
                color="#FFD700"
                emptyColor="#E5E5E5"
              />
              <Text style={styles.feedbacksCount}>
                ({shift.customerFeedbacksCount})
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.workTypeBadge}>
        <Text style={styles.workTypeText}>{shift.workTypes.map((wt) => wt.name).join(', ')}</Text>
      </View>

      <View style={styles.timeSection}>
        <Text style={styles.dateText}>
          {formatDate(shift.dateStartByCity)}
        </Text>
        <View style={styles.timeContainer}>
          <View style={styles.timeBlock}>
            <Text style={styles.timeLabel}>Начало</Text>
            <Text style={styles.timeValue}>
              {shift.timeStartByCity}
            </Text>
          </View>
          <View style={styles.timeSeparator}>
            <Text style={styles.timeSeparatorText}>—</Text>
          </View>
          <View style={styles.timeBlock}>
            <Text style={styles.timeLabel}>Окончание</Text>
            <Text style={styles.timeValue}>
              {shift.timeEndByCity}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addressSection} onPress={openMap}>
        <Text style={styles.addressLabel}>Адрес:</Text>
        <Text style={styles.addressText}>{shift.address}</Text>
      </TouchableOpacity>

      <View style={styles.workersSection}>
        <View style={styles.workersHeader}>
          <Text style={styles.workersTitle}>Набор персонала</Text>
          <Text style={styles.workersCount}>
            {shift.currentWorkers}/{shift.planWorkers}
          </Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${getFillPercentage(shift)}%`,
                backgroundColor: getProgressColor(shift)
              }
            ]}
          />
        </View>
        <Text style={styles.workersStatus}>
          {getFillPercentage(shift) >= 100
            ? 'Смена полностью укомплектована'
            : `Осталось ${shift.planWorkers - shift.currentWorkers} мест`}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Оплата за смену:</Text>
          <Text style={styles.priceValue}>{formatPrice(shift.priceWorker)} ₽</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.actionButton,
            getFillPercentage(shift) >= 100 && styles.disabledButton
          ]}
          disabled={getFillPercentage(shift) >= 100}
        >
          <Text style={styles.actionButtonText}>
            {getFillPercentage(shift) >= 100 ? 'Мест нет' : 'Откликнуться'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShiftScreen;
