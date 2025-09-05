plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.partenopeteam.todoyo"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.partenopeteam.todoyo"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

dependencies {

    implementation("org.lynxsdk.lynx:lynx:3.4.1")
    implementation("org.lynxsdk.lynx:lynx-jssdk:3.4.1")
    implementation("org.lynxsdk.lynx:lynx-trace:3.4.1")
    implementation("org.lynxsdk.lynx:primjs:2.14.1")



    // integrating image-service
    implementation("org.lynxsdk.lynx:lynx-service-image:3.4.1")

    // image-service dependencies, if not added, images cannot be loaded; if the host APP needs to use other image libraries, you can customize the image-service and remove this dependency
    implementation("com.facebook.fresco:fresco:2.3.0")
    implementation("com.facebook.fresco:animated-gif:2.3.0")
    implementation("com.facebook.fresco:animated-webp:2.3.0")
    implementation("com.facebook.fresco:webpsupport:2.3.0")
    implementation("com.facebook.fresco:animated-base:2.3.0")

    // integrating log-service
    implementation("org.lynxsdk.lynx:lynx-service-log:3.4.1")

    // integrating http-service
    implementation("org.lynxsdk.lynx:lynx-service-http:3.4.1")

    implementation("com.squareup.okhttp3:okhttp:4.9.0")

    //add xelemet's dependencies
    implementation("org.lynxsdk.lynx:xelement:3.4.1")
    implementation("org.lynxsdk.lynx:xelement-input:3.4.1")

    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.2.1")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.6.1")
}