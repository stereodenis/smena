import { FlatList, Image, ListRenderItem, Pressable, Text, View } from "react-native";
import styles from "./styles";
import React from "react";
import { formatDate, formatPrice } from "../../helpers";

const ListEmptyComponent = () =>
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>Нет доступных смен в вашем городе</Text>
  </View>

interface Props {
  shifts: Shifts.Shift[],
  handleItemPress(shift: Shifts.Shift): () => void
}

const Presenter = ({ shifts, handleItemPress }: Props) => {
  const renderShiftItem: ListRenderItem<Shifts.Shift> = ({ item: shift }) => {
    const isFullyStaffed = shift.currentWorkers >= shift.planWorkers;
    const availableSpots = Math.max(0, shift.planWorkers - shift.currentWorkers);

    return (
      <Pressable style={styles.card} onPress={handleItemPress(shift)}>
        <View style={styles.content}>
          <View style={{ flex: 1 }}>
            <View style={styles.leftSection}>
              {Boolean(shift.logo) && (
                <Image
                  source={{ uri: shift.logo }}
                  style={styles.logo}
                />
              )}
              <View style={styles.companyInfo}>
                <Text style={styles.companyName} numberOfLines={1}>
                  {shift.companyName}
                </Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>★ {shift.customerRating}</Text>
                  <Text style={styles.feedbacks}>({shift.customerFeedbacksCount})</Text>
                </View>
              </View>
            </View>
            <Text style={styles.workTypeText}>{shift.workTypes.map((wt) => wt.name).join(', ')}</Text>
          </View>

          <View style={styles.rightSection}>
            <Text style={styles.date}>{formatDate(shift.dateStartByCity)}</Text>

            <View style={styles.time}>
              <Text style={styles.timeText}>
                {shift.timeStartByCity}–{shift.timeEndByCity}
              </Text>
            </View>
            <Text style={styles.price}>{formatPrice(shift.priceWorker)} ₽</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.address}>
            {shift.address}
          </Text>
          <View style={[
            styles.status,
            isFullyStaffed && styles.statusFull
          ]}>
            <Text style={styles.statusText}>
              {isFullyStaffed ? 'Мест нет' : `Осталось: ${availableSpots}`}
            </Text>
          </View>
        </View>
      </Pressable>
    )
  };

  return (
      <View style={[styles.container]}>
        <FlatList
          data={shifts}
          renderItem={renderShiftItem}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
  );
}

export default Presenter
