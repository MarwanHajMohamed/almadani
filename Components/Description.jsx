import React from "react";
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ImageBlurLoading from "react-native-image-blur-loading";

export default function Description({ route }) {
  const { service, imgs, description, link, lang } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {lang === "en" ? (
          <Text style={styles.titleEn}>{service}</Text>
        ) : (
          <Text style={styles.title}>{service}</Text>
        )}
      </View>

      <View style={styles.imagesContainer}>
        {imgs.map((item, key) => {
          return (
            <ImageBlurLoading
              key={key}
              style={styles.imageContainer}
              source={item}
              withIndicator={false}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.link}
          onPress={() => {
            Linking.openURL(link);
          }}
        >
          <Text style={styles.buttonText}>
            {lang === "en" ? "Book now" : "أحجز الأن"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    margin: 30,
    height: "80%",
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: -0.4,
    textAlign: "right",
  },
  titleEn: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: -0.4,
    textAlign: "left",
  },
  link: {
    backgroundColor: "#201975",
    borderRadius: 5,
    height: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  imageContainer: {
    width: "100%",
    height: 190,
    borderRadius: 20,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
