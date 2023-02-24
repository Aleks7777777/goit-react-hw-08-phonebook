import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import styles from './ContactsView.module.css';

export default function ContactsView() {
	return (
		<div className={styles.section}>
			<h1 className={styles.title}>PHONEBOOK</h1>
			<h2>New contact</h2>
			<ContactForm />

			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	);
}