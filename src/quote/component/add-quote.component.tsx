import React, {useState} from 'react';
import Modal from 'react-native-modal';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text, View, StyleSheet, TouchableHighlight} from 'react-native';

import {Quote} from '../quote.type';
import {postQuote} from '~/api/request.api';
import {VALIDATION} from '../quote.constant';
import {alert} from '~/component/alert/alert.component';
import {TextArea, Input} from '~/component/form/input-element.component';
import Loader from '~/component/loader/spinner.component';
import {ActionButton, CloseButton} from '~/component/form/button.component';

const quoteValidation = [
  {
    required: true,
    errorMessage: 'This field cannot be empty.',
  },
  {
    min: 5,
    errorMessage: 'Your quote must at least 5 character.',
  },
  {
    max: 300,
    errorMessage: 'Your quote must be less then 300 character.',
  },
];

const submitQuote = async (quote: Quote, setIsPosting: Function) => {
  setIsPosting(true);

  const {error} = await postQuote({
    content: quote.quote,
    author: quote.author,
  });

  if (error) {
    setIsPosting(false);

    return alert.error(VALIDATION.QUOTE_POST_FAILED);
  }

  setIsPosting(false);
};

const AddQuoteForm = ({
  isModalVisible,
  setModalVisible,
}: {
  isModalVisible: boolean;
  setModalVisible: Function;
}) => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [isPosting, setIsPosting] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Modal
        animationOutTiming={1000}
        animationOut={'slideOutDown'}
        isVisible={isModalVisible}>
        <View style={styles.form}>
          <Text style={styles.title}>
            Submit a Quote
            <MIcon style={styles.title} name="format-quote" />
          </Text>
          <TextArea
            handler={setQuote}
            rules={quoteValidation}
            placeholder="Write your Quote here..."
          />
          <Input placeholder="Author" handler={setAuthor} />

          <View style={styles.buttons}>
            {isPosting ? (
              <Loader />
            ) : (
              <>
                <ActionButton
                  label="Post"
                  value={quote}
                  handler={async function () {
                    await submitQuote({quote, author}, setIsPosting);
                    setQuote('');
                    setAuthor('');
                    setModalVisible(false);
                  }}
                />
                <CloseButton
                  label="Cancel"
                  handler={function () {
                    setModalVisible(false);
                  }}
                />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const AddQuote = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <AddQuoteForm
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <Button title="Add Quote" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export const AddQuoteFloatingBtn = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#02183b"
      style={styles.addQuote}
      onPress={() => setModalVisible(true)}>
      <>
        <AddQuoteForm
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
        <MIcon style={styles.icon} name="format-quote" />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: '#78797a',
    fontWeight: 'bold',
  },
  buttons: {
    flex: 0,
    marginTop: 10,
    flexDirection: 'row',
  },
  addQuote: {
    width: 40,
    height: 40,
    padding: 10,
    zIndex: 8888,
    right: 20,
    bottom: 20,
    position: 'absolute',
    borderRadius: 100 / 2,
    backgroundColor: '#02183b',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddQuote;
