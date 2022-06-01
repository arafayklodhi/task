import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: { flex: 1 },
    imgTopOverLayOut: { width: '100%' },
    logo: { width: '100%', bottom: '10%', alignSelf: 'center' },
    ViewText: { alignSelf: 'center', bottom: '5%' },
    ViewTexttxt: { fontSize: width * 0.045, fontFamily: 'RedHatDisplay-Bold' },
    socialBtnView: { alignSelf: 'center', width: '70%', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: width * 0.02, marginVertical: height * 0.02 },
    socialBtnViewBtn: { padding: width * 0.02, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: width * 0.02, elevation: 3, width: '45%' },
    socialBtnViewBtnImg: { height: height * 0.025, width: width * 0.043, marginLeft: width * 0.02 },
    socialBtnViewBtnText: { fontFamily: 'RedHatDisplay-Black', marginHorizontal: width * 0.03, fontSize: width * 0.035 },
    lineView: { width: '85%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' },
    line: {
        width: '40%',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
    },
    lineViewText: { marginHorizontal: width * 0.02, textAlign: 'center', fontFamily: 'RedHatDisplay-Black', fontSize: width * 0.034 },
    KeyboardAvoidingView: { width: '90%', alignSelf: 'center', marginTop: height * 0.02 },
    KeyboardAvoidingViewText: { textAlign: 'left', marginBottom: height * 0.02 },
    ViewTextInput: { paddingVertical: height * 0.005, backgroundColor: '#c8cacc', borderRadius: width * 0.02, alignSelf: 'center', width: '98%', paddingLeft: width * 0.02 },
    forgotPassText: { textAlign: 'right', marginRight: width * 0.05, marginTop: height * 0.02, fontFamily: 'RedHatDisplay-Black' },
    btnView: { alignSelf: 'center', width: '95%', marginTop: '20%' },
    btnViewTouch: { paddingVertical: height * 0.02, width: '100%', alignItems: 'center', justifyContent: 'center', elevation: 3, borderRadius: width * 0.02, marginVertical: height * 0.03 },
    btnViewTouchText: { fontFamily: 'RedHatDisplay-Black' },
})