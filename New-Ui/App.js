import React from 'react';
import Homepage from './Homepage';
import settings from './settings'

export default function App() {
  return (<><Homepage/>
    <settings/></>
  )
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardExpiry: {
    color: '#fff',
  },
  cardCVV: {
    color: '#fff',
  },
  cardLogo: {
    alignSelf: 'flex-end',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  transactionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: 'blue',
  },
  transactionList: {
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionDetails: {
    marginLeft: 10,
    flex: 1,
  },
  transactionCategory: {
    color: '#666',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
});
