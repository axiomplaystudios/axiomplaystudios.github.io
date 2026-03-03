# WeighSnap Privacy Policy

Effective date: February 11, 2026
Last updated: March 3, 2026

## 1. Overview
WeighSnap ("we", "our", or "us") is a mobile application that helps you record and track body weight and related health metrics. The app does not require an account, and most data is stored locally on your device by default. We collect (a) data you enter, (b) data needed for optional features you enable (such as ads, cloud backup, health sync, and in-app purchases), and (c) limited automatic usage, crash, and performance data in Android release builds. If you submit feedback in the app, we collect your message, optional email address, and limited app/device/profile context to help us respond and troubleshoot; this feedback is stored in Cloud Firestore (Google). WeighSnap is currently available only on Android via Google Play. If we add other platforms, we will update this policy. This Privacy Policy explains what data we collect, how we use it, and the choices you have.

## 2. Who We Are / Contact
Developer: axiomplaystudios
Privacy contact: axiomplaystudios@gmail.com

## 3. Data We Collect
We collect data you provide, data required for optional features you enable, and limited diagnostics/usage data on Android release builds.

### A. Data you enter in the app
- Weight entries (value, unit, timestamp) and optional notes.
- Profile details and preferences you choose to provide, such as name/nickname, age, sex/gender, height, current and goal weight, activity level, and body measurements (for example, waist/hip/neck circumference).
- Profile photo (optional). If you choose a photo from your device, the image is cropped and stored locally in the app's private storage for display. It is not uploaded or shared unless you export or back up your device separately.
- Settings and preferences (units, themes, reminders, onboarding status, and app security settings).

### B. Health platform data (optional, Android)
If you enable health data sync, the app can read and/or write weight records using Health Connect on Android. We only access the data types you authorize (weight only) and only while the feature is enabled.

### C. Cloud backup data (optional)
If you enable Google Drive backup and sign in with Google, the app:
- Receives your Google account email address to show your sign-in status.
- Creates a backup file containing your profiles, weight entries, and preferences.
- Stores the backup in your Google Drive app data folder (appDataFolder).

### D. Purchases (optional)
If you buy the "Remove Ads" one-time purchase, the app receives purchase and entitlement information from Google Play Billing (such as purchase tokens). We do not receive your payment card details.

### E. Ads and consent data (if ads are enabled)
WeighSnap uses the Google Mobile Ads SDK and Google's User Messaging Platform (UMP) for ad consent. These services may collect and use:
- Device identifiers such as the advertising ID/app set ID.
- IP address (which can be used to estimate general location).
- Ad interactions (for example, views, taps).
- Diagnostics and performance data related to ads.
- Consent status/choices used to determine ad personalization where required by law.

We only request ads after consent where required. If you purchase Remove Ads, the app skips initializing the Mobile Ads SDK.

### F. Analytics, crash, and performance data (Firebase)
On Android release builds only, WeighSnap uses Firebase Analytics, Crashlytics, and Performance. Collection is disabled in debug and test builds and on non-Android platforms. These services may collect:
- App usage events (for example, onboarding completion, weight entry added, backup created/restored) and screen views.
- Device and app information (for example, app version, OS version, device model, locale).
- Crash logs and stack traces.
- Performance and stability metrics (for example, app start time, screen render time, network timing).

Our analytics events avoid sending your raw weight values or notes; they focus on app actions, settings (for example, weight unit), and counts.

### G. Support communications and in-app feedback
If you contact us by email or submit feedback in the app, we receive the content you provide (message and optional email).

When you submit feedback in-app, we also attach limited context to help diagnose issues, such as:
- App version and build number, and build type (release/debug).
- Device and platform info (manufacturer, model, OS version).
- Locale and time zone.
- The screen and entry point that opened the feedback form.
- Profile context and preferences (profile ID/name, units, date format, theme, notification preference, app locale preference).

We store in-app feedback in a Cloud Firestore (Google) collection named `feedback`.

### H. Permissions you may grant
- Notifications: for reminders you schedule in the app (local notifications only).
- Health data (Android): for optional Health Connect sync.
- Storage/files: for export or import of your data.
- Photos/media: to select a profile photo (optional).
- Biometrics (optional): for app lock. Biometric data is handled by the operating system; we only receive a success/failure result.
- Advertising ID (Android): used by the ad SDK if ads are enabled.

## 4. How We Use Data
We use your data to:
- Provide core functionality (tracking, charts, trends, and insights).
- Calculate derived metrics (for example, BMI) based on data you enter.
- Sync data with Health Connect when you enable it.
- Create, restore, or delete backups when you use Google Drive backup.
- Show ads, manage ad consent, and manage the ad-removal purchase.
- Understand app usage, diagnose crashes, and monitor performance (Android release builds only).
- Respond to and troubleshoot feedback and support requests, including reviewing in-app feedback and related context stored in Cloud Firestore.

## 5. Sharing and Third-Party Services
We do not sell your personal information. We only share data with third parties when it is necessary to provide features you enable:

- Google Mobile Ads and Google UMP: for ads and consent management.
- Google Play Billing (Google Play Store): for in-app purchases.
- Google Sign-In and Google Drive API: for optional cloud backup (Drive appDataFolder).
- Health Connect (Android): for optional health data sync.
- Firebase (Google): for analytics, crash reporting, and performance monitoring on Android release builds.
- Cloud Firestore (Google): for storing in-app feedback submissions and attached context.

These providers process data under their own privacy policies. We recommend reviewing them.

## 6. Legal Bases (GDPR/UK)
If you are in the EEA, UK, or Switzerland, we process your data under the following legal bases:
- Contract: to provide core app functionality (tracking, charts, and insights).
- Consent: for optional features such as Health Connect sync, Google Drive backup, ad personalization (where required), and analytics/crash/performance collection on Android release builds.
- Legitimate interests: to maintain app security, prevent fraud, and improve reliability (limited diagnostics and performance data).

## 7. Your Choices and Controls
- Use the app to add, edit, or delete entries and profiles.
- Disable health sync at any time and revoke permissions in your device settings.
- If you wrote data to Health Connect, you may need to delete it there; the app may not be able to remove health records from that platform.
- Sign out of Google and delete your backup from Google Drive.
- Export your data to CSV and store or share it as you choose.
- Control ad personalization in the consent flow or your device settings, reset the advertising ID, or remove ads via the in-app purchase.
- Analytics and diagnostic data collection is enabled only in Android release builds.
- Contact us to request access, correction, or deletion of data (see Section 14).

Depending on where you live, you may also have additional rights (such as the right to access, delete, correct, object to processing, or receive a copy of your data). We will respond to verified requests as required by applicable law.

## 8. Data Retention
- Local data stays on your device until you delete it or uninstall the app.
- Google Drive backups remain until you delete them in the app or in Google Drive.
- Analytics, crash, and performance data are retained by Google under their own retention policies.
- Feedback submissions are retained only as long as needed to respond to your request and to comply with legal obligations; you can request deletion (see Section 14).

## 9. Security
We use reasonable safeguards to protect data, including secure storage for PIN hashes and encrypted network connections for data sent over the internet. No method of storage or transmission is 100% secure.

## 10. Children's Privacy
WeighSnap is not intended for children, and the minimum age to use the app is 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.

## 11. International Transfers
Your data may be processed in countries other than your own when using third-party services (for example, Google). Those providers handle data under their own security and compliance frameworks.

## 12. Third-Party Links
The app may include links to third-party services. We are not responsible for their privacy practices.

## 13. Changes to This Policy
We may update this policy from time to time. If changes are material, we will notify you in the app and update the "Last updated" date.

## 14. Contact and Requests
To request access, correction, or deletion of your data, contact us at:
axiomplaystudios@gmail.com

## 15. California Privacy Rights (CCPA/CPRA)
If you are a California resident, you have the right to know, access, delete, and correct your personal information, and to opt out of the sale or sharing of personal information. We do not sell or share your personal information as defined by California law. If you wish to exercise your rights, contact us at the email above.

We may collect the following categories of personal information:
- Identifiers (for example, device identifiers used for ads and analytics, and your Google account email if you enable Google Drive backup).
- Internet or network activity information (app usage events on Android release builds).
- Geolocation (approximate, inferred from IP for ad delivery).
- Sensitive personal information (health data you enter or sync).

We use this information only for the purposes described in this policy and to provide the optional features you enable.

---

Thank you for using WeighSnap.
