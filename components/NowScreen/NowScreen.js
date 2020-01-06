import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Button
} from 'react-native';
import resources from '../../data/resources';
import EmergencyItem from './EmergencyItem';
import Footer from '../Footer/Footer';

const NowScreen = props => {
	const emergencyItems = resources.map((resource, index) => (
		<EmergencyItem key={index} resource={resource} />
	));

	return (
		<>
			<Text style={styles.header}>Emergency Contacts</Text>
			<ScrollView style={styles.container}>
				{emergencyItems}
				<Footer />
			</ScrollView>
		</>
	);
};

NowScreen.navigationOptions = ({ navigation }) => ({
	title: 'Now',
	headerStyle: {
		backgroundColor: '#fff'
	},
	headerTintColor: '#102b59',
	headerTitleStyle: {
		fontWeight: 'bold'
	},
	headerRight: (
		<Button title='Home' onPress={() => navigation.navigate('Home')} />
	)
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#102b59'
	},
	header: {
		fontSize: 32,
		paddingBottom: 20,
		paddingTop: 20,
		paddingRight: 15,
		paddingLeft: 15,
		backgroundColor: '#102b59',
		color: 'white',
		fontWeight: 'bold'
	},
	nav: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10
	}
});

export default NowScreen;