import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StyleSheet, Switch, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNotifications } from '../redux/actions'; // Assurez-vous que l'action est correcte
import store from '../redux/store'; // Assurez-vous que le store est correctement importé

const AppComponent = () => {
  const dispatch = useDispatch();
  const { notificationsEnabled } = useSelector((state) => state.settings);  // L'état `settings` doit être accessible

  const handleToggleNotifications = () => {
    dispatch(toggleNotifications());  // L'action pour basculer les notifications
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleToggleNotifications}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Compte</Text>
        <Text style={styles.optionSubtitle}>Gérer votre compte et vos informations</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Langue</Text>
        <Text style={styles.optionSubtitle}>Sélectionner votre langue préférée</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Déconnexion</Text>
        <Text style={styles.optionSubtitle}>Quittez votre compte actuel</Text>
      </TouchableOpacity>

      <Button title="Réinitialiser les paramètres" color="#ff6347" onPress={() => alert('Réinitialisation des paramètres')} />
    </View>
  );
};

const App = () => (
  <Provider store={store}> 
    <AppComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  optionTitle: {
    fontSize: 18,
    color: '#333',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default App;

