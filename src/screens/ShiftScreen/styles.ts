import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  companyText: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1c1c1e',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbacksCount: {
    fontSize: 14,
    color: '#8e8e93',
    marginLeft: 6,
  },
  workTypeBadge: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  workTypeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  timeSection: {
    marginVertical: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1e',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBlock: {
    flex: 1,
  },
  timeLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1e',
  },
  timeSeparator: {
    paddingHorizontal: 12,
  },
  timeSeparatorText: {
    fontSize: 18,
    color: '#8e8e93',
    fontWeight: '300',
  },
  addressSection: {
    marginTop: 16,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  addressLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginRight: 8,
    fontWeight: '500',
  },
  addressText: {
    fontSize: 14,
    color: '#1c1c1e',
    flex: 1,
    fontWeight: '500',
  },
  workersSection: {
    marginTop: 16,
  },
  workersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workersTitle: {
    fontSize: 14,
    color: '#8e8e93',
    fontWeight: '500',
  },
  workersCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1c1c1e',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e1e5e9',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  workersStatus: {
    fontSize: 12,
    color: '#8e8e93',
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34c759',
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginLeft: 16,
  },
  disabledButton: {
    backgroundColor: '#C7C7CC',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

})
