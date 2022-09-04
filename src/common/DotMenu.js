import * as React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';
import BottomPopUp from './PopUP/BottomPopUp';
import PopUpBottomOpen from './PopUP/PopUpBottomOpen';


const popupModalArr = {
    heading: "Report",
    subHeading: "Why are you reporting this post?",
    description: "Yor repost is anonymous, except if you're reporting an intellectual property infringement. If somwone is in immediate danger, call the local emergency services - please don't wait.",
    data: [
        {
            text: "It's spam"
        },
        {
            text: "Don't like"
        },
        {
            text: "False information"
        },
        {
            text: "Scam or fraud"
        },
        {
            text: "Something else"
        }
    ]
}
const DotMenu = (props) => {

    const [isOpen, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false)

    const handleOpen = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const onPressItemHandler = (value) => {
        props.setMenuVal(value);
        // setOpen(false);
        // if (value == "Report") {
        //     handleOpen()
        // }else{
            props.navigation.navigate('CreatePost');
        // }
    };

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    // style={{ marginTop: 70 }}
                    style={styles.menu}
                    visible={isOpen}
                    onDismiss={() => setOpen(false)}
                    anchor={
                        <TouchableOpacity >
                            <EntypoIcon name="dots-three-horizontal" onPress={() => setOpen(true)} size={20} style={styles.menuIcon} />
                        </TouchableOpacity>
                    }
                >
                    {
                        props.menuItmArr.length > 0 &&
                        props.menuItmArr.map((item, i) => {
                            return <>
                                <Menu.Item
                                    onPress={() => onPressItemHandler(item.text)}
                                    title={props.isLike_you ? "nikita" : item.text}
                                />
                            </>
                        })
                    }
                </Menu>
            </View>
            {
                props.menuVal && props.menuVal == "Report" ?
                    <View>
                        <PopUpBottomOpen
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            show={show}
                            onTouchOutSide={handleClose}
                            popupModalData={popupModalArr}
                            setShow={setShow}
                        />
                    </View>
                    :
                    <></>
            }
        </View>

    );
};

export default DotMenu;

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 30,
        zIndex: 999
    }
});