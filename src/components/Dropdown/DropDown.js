import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import ImagePath from '../../common/ImagePath';
import Colors from '../../common/Colors';

const Dropdown = props => {
  const [selectedItem, setSelectedItem] = useState(props.placeholder);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = item => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity key={item.id} onPress={() => handleItemClick(item)}>
        <View style={styles.itemContainer}>
          <Text allowFontScaling={false} style={styles.itemText}>
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...styles.container, ...props.containerStyle}}>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={toggleDropdown}>
        <Text style={styles.selectedItemText}>
          {selectedItem.label || selectedItem}
        </Text>
        <View style={styles.arrowContainer}>
          <View>
            {showDropdown ? (
              <Image source={ImagePath.arrowUp} style={styles.arrows} />
            ) : (
              <Image source={ImagePath.arrowDown} style={styles.arrows} />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdownContent}>
          {props?.items.map(item => (
            <ScrollView key={item.id}>{renderItem(item)}</ScrollView>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
  },
  selectedItemText: {
    flex: 1,
    fontSize: 18,
  },
  arrowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownContent: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#ff9947',
  },
  itemContainer: {
    paddingHorizontal: 15,
    height: 35,
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
    alignSelf: 'center',
    color: 'black',
  },
  arrows: {
    width: 22,
    height: 22,
  },
});

export default Dropdown;
