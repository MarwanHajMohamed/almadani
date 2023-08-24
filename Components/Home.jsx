import { useState } from "react";
// React Native Imports
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActionSheetIOS,
  Linking,
  TouchableOpacity,
} from "react-native";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// External Libraries Imports
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import ImageBlurLoading from "react-native-image-blur-loading";

// Stock Images Imports
import Logo from "../assets/Logo-03.png";
import Van from "../assets/Transportation/vanExterior1.png";
import Rentals from "../assets/flatRentals2.png";

// import Translation from "../assets/translation.png";
import Translation from "../assets/Translation/translation1.png";

export default function Home({ navigation }) {
  const [lang, setLang] = useState("Arabic");

  const handleLang = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "English", "عربي"],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setLang("en");
        } else if (buttonIndex === 2) {
          setLang("ar");
        }
      }
    );
  };

  const vanImages = [
    require("../assets/Transportation/vanExterior1.png"),
    require("../assets/Transportation/vanInterior1.png"),
    require("../assets/Transportation/vanExterior5.png"),
  ];

  const flatImages = [require("../assets/flatRentals2.png")];

  const translationServicesImages = [
    require("../assets/Translation/translation1.png"),
    require("../assets/Translation/translation2.png"),
    require("../assets/Translation/translation3.png"),
  ];

  const transportEn = [
    "Private chauffeur",
    "Medical transport",
    "Airport transfers",
    "Corporate transport",
  ];

  const transportAr = [
    "شوفير الخاص",
    "نقل طبي",
    "رحلات المطار",
    "النقل للشركات",
  ];

  const transportLink =
    "whatsapp://send?text=Hello!+I'd+like+to+enquire+about+your+transportation+services.+Can+you+please+provide+me+with+more+details+about+the+options+available+and+the+rates?+Thank+you!&phone=447427523026";

  const transportLinkAr =
    "whatsapp://send?text=مرحبًا!+أود+الاستفسار+حول+خدمات+النقل+الخاصة+بك.+هل+يمكنك+تزويدي+بمزيد+من+التفاصيل+حول+الخيارات+المتاحة+والأسعار؟+شكرًا+لك!&phone=447427523026";

  const flatRentalsLink =
    "whatsapp://send?text=Hi+there!+I'd+like+to+enquire+for+a+flat+to+rent.+Could+you+please+share+information+about+the+available+properties,+such+as+location,+rent,+and+any+additional+details?+Much+appreciated!&phone=447427523026";

  const flatRentalsLinkAr =
    "whatsapp://send?text=مرحبًا!+أود+الاستفسار+عن+شقة+للإيجار.+هل+يمكنك+مشاركة+معلومات+حول+العقارات+المتاحة،+مثل+الموقع+والإيجار+وأي+تفاصيل+إضافية؟+أكون+شاكرًا+جدًا!&phone=447427523026";

  const translationServices =
    "whatsapp://send?text=Hello!+I'm+interested+in+person+translation+services.+Could+you+please+provide+me+with+more+details+about+the+availability+for+appointments?+Thank+you!&phone=447427523026";

  const translationServicesAr =
    "whatsapp://send?text=مرحبًا!+أنا+مهتم+بخدمات+الترجمة+الشخصية.+هل+يمكنك+تزويدي+بمزيد+من+التفاصيل+حول+التوفر+للمواعيد؟+شكرًا+لك!&phone=447427523026";

  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={["white", "white", "rgba(149, 161, 222, 0.50)"]}
      >
        <View style={styles.logoContainer}>
          <ImageBlurLoading
            style={styles.logo}
            source={Logo}
            withIndicator={false}
          />
        </View>
        <View style={styles.servicesContainer}>
          <View>
            {lang === "en" ? (
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: -0.4,
                }}
              >
                Services
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: -0.4,
                }}
              >
                خدمات
              </Text>
            )}
          </View>
          <View style={styles.serviceButtonContainer}>
            <TouchableOpacity
              style={styles.serviceButton}
              onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                lang === "en"
                  ? Linking.openURL(transportLink)
                  : Linking.openURL(transportLinkAr);
              }}
              activeOpacity={0.6}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.navigate("Description", {
                  service: lang === "en" ? "Transport" : "تنقل",
                  imgs: vanImages,
                  lang: lang,
                  link: lang === "en" ? transportLink : transportLinkAr,
                });
              }}
            >
              <ImageBlurLoading
                style={styles.img}
                source={Van}
                withIndicator={false}
              ></ImageBlurLoading>

              <View style={styles.textContainer}>
                {lang === "en" ? (
                  <Text style={styles.text}>Transport</Text>
                ) : (
                  <Text style={styles.textAr}>تنقل</Text>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.serviceButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.navigate("Description", {
                  service: lang === "en" ? "Flat Rentals" : "تأجير الشقق",
                  imgs: flatImages,
                  lang: lang,
                  link: lang === "en" ? flatRentalsLink : flatRentalsLinkAr,
                });
              }}
              onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                lang === "en"
                  ? Linking.openURL(flatRentalsLink)
                  : Linking.openURL(flatRentalsLinkAr);
              }}
            >
              <ImageBlurLoading
                source={Rentals}
                style={styles.img}
              ></ImageBlurLoading>
              <View style={styles.textContainer} intensity={100}>
                {lang === "en" ? (
                  <Text style={styles.text}>Flat Rentals</Text>
                ) : (
                  <Text style={styles.textAr}>تأجير الشقق</Text>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onLongPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                lang === "en"
                  ? Linking.openURL(translationServices)
                  : Linking.openURL(translationServicesAr);
              }}
              activeOpacity={0.6}
              style={styles.serviceButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.navigate("Description", {
                  service:
                    lang === "en" ? "Translation Services" : "خدمات الترجمة",
                  imgs: translationServicesImages,
                  lang: lang,
                  link:
                    lang === "en" ? translationServices : translationServicesAr,
                });
              }}
            >
              <ImageBlurLoading style={styles.img} source={Translation} />
              <View style={styles.textContainer}>
                {lang === "en" ? (
                  <Text style={styles.text}>Translation Services</Text>
                ) : (
                  <Text style={styles.textAr}>خدمات الترجمة</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Pressable
          style={styles.language}
          onPress={() => {
            handleLang(),
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
        >
          <FontAwesomeIcon icon={faGlobe} size={25} />
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
    height: "100%",
    backgroundColor: "rgb(255, 255, 255)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: -40,
    marginBottom: 50,
  },
  logo: {
    width: "50%",
    height: 100,
  },
  serviceButtonContainer: {
    gap: 20,
    marginTop: 10,
  },
  serviceButton: {
    backgroundColor: "#f3f3f3",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    height: 170,
    alignItems: "center",
    borderRadius: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 20,
    letterSpacing: 0.25,
    letterSpacing: -0.4,
    fontWeight: "200",
  },
  textAr: {
    fontSize: 20,
    letterSpacing: 0.25,
    letterSpacing: -0.4,
    fontWeight: "200",
    textAlign: "right",
  },
  logoLoad: {
    width: "30%",
    marginLeft: 40,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 5,
    height: 50,
  },
  img: {
    backgroundColor: "#f3f3f3",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  language: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
});
