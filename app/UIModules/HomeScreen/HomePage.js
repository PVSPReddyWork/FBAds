import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import AppStyleConstants, {AppHeight, AppWidth} from '../../Constants/AppStyleConstants';
import {
  ADD_EXPENSE_PAGE,
  EXPENSES_YEARS_LIST,
  DISPLAY_ITEMS_LIST,
  SETTINGS_PAGE,
  WEB_VIEW_TEST_PAGE,
} from '../../Constants/PageNameConstants';

import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomContainerView from '../../CustomComponents/CustomContainerView';
import CustomSectionView from '../../CustomComponents/CustomSectionView';
import CustomTouch from '../../CustomComponents/CustomTouch';
/*
import CustomButton from '../../CustomComponents/CustomButton';
import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomContainerView from '../../CustomComponents/CustomContainerView';
import { RUPEE_ADD_ICON, RUPEE_LIST_ICON, GROCERIES_LIST_ICON, SETTINGS_ICON } from './../../Assets/ImageHelper';
import CustomSectionView from '../../CustomComponents/CustomSectionView';
import CustomTouch from '../../CustomComponents/CustomTouch';

import { ceil } from 'react-native-reanimated';
*/
class HomePage extends React.Component {
  // const [isVisibleModal, setIsVisibleModal] = useSta
  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
    };
  }

  dataItems = [
    {
      key: 1,
      name: 'Add Expense',
      // icon: RUPEE_ADD_ICON,
      navigationId: ADD_EXPENSE_PAGE,
    },
    {
      key: 2,
      name: 'Display Expenses',
      // icon: RUPEE_LIST_ICON,
      navigationId: EXPENSES_YEARS_LIST,
    },
    {
      key: 3,
      name: 'Groceries List',
      // icon: GROCERIES_LIST_ICON,
      navigationId: DISPLAY_ITEMS_LIST,
    },
    {
      key: 4,
      name: 'Settings',
      // icon: SETTINGS_ICON,
      navigationId: SETTINGS_PAGE,
    },
  ];

  onItemSelectionhandler = (item) => {
    //this.props.navigation.navigate(item.navigationId);
    this.props.navigation.navigate(WEB_VIEW_TEST_PAGE);
  }


  /*
  viewCellTemplateDesign = (item) => {
    console.log('HomePage >>>> viewCellTemplateDesign >>>> item: ', item);
    const uiViewCell = (
      <CustomTouch
        isRequiredFeedback={true}
        childData={{navigationId:"WebView"}}
        onPress={this.onItemSelectionhandler}
        // style={styles.listItemHolder}
      >
        <View style={styles.listItemHolder}>
          <Image source={item.icon} />
          <Text style={styles.listItemFontStyle}>{item.name}</Text>
        </View>
      </CustomTouch>
    );
    return uiViewCell;
  };
  */

  render() {
    const mainUIComponent = (
      <>
        <CustomContainerView>
          <CustomHeader title="Home" {...AppStyleConstants.headerStyle} hideBackButton={true} />

          <ScrollView style={styles.mainContainerStyle}>
            <View style={styles.sectionHolderViewStyle}>
              {/*<CustomSectionView itemsData={this.dataItems} columnsNeeded={2} rowHolderStyle={styles.rowHolderStyle} viewCellTemplate={this.viewCellTemplateDesign} /> */}
              <CustomTouch isRequiredFeedback={true} onPress={this.onItemSelectionhandler}style={styles.listItemHolder} >
              <View style={styles.listItemHolder}>
                <Text style={styles.listItemFontStyle}>Login</Text>
              </View>
      </CustomTouch>
            </View>
          </ScrollView>
        </CustomContainerView>
      </>
    );
    return mainUIComponent;
  }
}


const styles = StyleSheet.create({
  listItemFontStyle: {
    color: AppStyleConstants.colors.LIST_ITEM_FONT_COLOR,
    marginTop: 15,
  },
  listItemHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyleConstants.colors.LIST_ITEM_BACKGROUND_COLOR,
    width: ((AppWidth - 80)/2),
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 2.5,
  },
  rowHolderStyle: {
    marginBottom: 20,
    justifyContent: 'space-around',
    height: ((AppWidth - 80)/2),
  },
  sectionHolderViewStyle: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  mainContainerStyle: {
    backgroundColor: AppStyleConstants.colors.MAIN_BODY_COLOR,
  }
});

export default HomePage;
