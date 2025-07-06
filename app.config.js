export default {
  expo: {
    name: "MPU-Check",
    slug: "mpu-check",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.freshexpo.mpu-check",
      usesAppleSignIn: true,
      googleServicesFile: "./GoogleService-Info.plist",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: [
              "com.googleusercontent.apps.19781117641-ds4qspmrbtovet444882f89h6jshf1ie"
            ]
          }
        ]
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.freshexpo.mpu-check"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    runtimeVersion: "1.0.0",
    sdkVersion: "53.0.0",
    extra: {
      eas: {
        projectId: "da30f2c7-1f70-40c6-9c35-4b2651ebdaff"
      }
    },
    owner: "dadina",
    plugins: [
      "expo-web-browser",
      "expo-apple-authentication",
      "@react-native-google-signin/google-signin"
    ],
    scheme: "mpu-check"
  }
};