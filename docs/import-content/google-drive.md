---
sidebar_position: 4
description: Why the Google Drive importer was removed from Panels, and how to import your Drive comics using the official Google Drive app and the Files app instead.
---

# Google Drive integration retirement

Google is forcing us to remove our Google Drive importer, and there isn't much we can do about it. 

Early this year, Google decided to make some changes to their [Google Drive API Scopes](https://developers.google.com/drive/api/guides/api-specific-auth), making some of them "sensitive" or "restricted".

Panels importer uses the `drive.readonly` scope that allowed us read-only access to your Google Drive files and folders so we can import your selected files into Panels. 
That scope is now **restricted** and requires us to go through a verification process to continue using it. 
We would be happy to verify the app integration if it wouldn't require getting a yearly CASA Tier 2 Security assessment that costs between **$15K-$75K** (depending on the characteristics of each app) and only has a validation of 1 year. Not only we can't afford that cost, it's completely impossible that we could assume that every year. 

The alternative that Google gives is to change the scope to `drive.file`, which should allow us to access your files **only if we use** the new [Google Drive Picker API](https://developers.google.com/drive/picker/guides/overview). Unfortunately, Google Drive Picker API is only available for web apps, not iOS. 

These changes in Google's policy force us to indefinitely remove the Google Drive importer until Google Drive Picker API is available for Swift or Objective-C. 
Obviously, this does not only affect panels. There are many developers of many apps in the same situation. Here are a few 

[https://stackoverflow.com/questions/77537180/is-there-a-way-to-use-google-drive-picker-in-an-ios-app](https://stackoverflow.com/questions/77537180/is-there-a-way-to-use-google-drive-picker-in-an-ios-app)

[https://www.googlecloudcommunity.com/gc/Workspace-Q-A/Drive-API-Auth-Scope-Changes-Handling-Changing-Remvoing-Scopes/m-p/674909](https://www.googlecloudcommunity.com/gc/Workspace-Q-A/Drive-API-Auth-Scope-Changes-Handling-Changing-Remvoing-Scopes/m-p/674909 ) 

[https://www.gmass.co/blog/google-oauth-verification-security-assessment](https://www.gmass.co/blog/google-oauth-verification-security-assessment)

### My Google Drive account is already connected, and it's still working. 

Even if your account still works and you can import files into Panels, we don't know how long it will continue working. 
From the next version, we will show a warning when you try to import files using the Google Drive importer, letting you know that it might eventually stop working. The warning message will include a link to this post. 
You can continue using your linked account, but we will remove the button to add new connections. 

### OK, but now what? how do I get my files from Google Drive into Panels?

Soon, we won't be able to access your files using our own integration, so you're going to have to use [Google Drive](https://apps.apple.com/us/app/google-drive/id507874739)  official app to access your files. Install it from the AppStore and make sure Google Drive is enabled in your Files.app Locations.

You can then use the ["Import from Files" importer](from-your-device.md#files-app). The experience is a bit worse because it blocks the UI until the files are downloaded, but it works. 


| ![](/img/google-drive-retirement-1.png) | ![](/img/google-drive-retirement-2.jpeg)  |  ![](/img/google-drive-retirement-3.jpeg) |
|---|---|---|
| ![](/img/google-drive-retirement-4.jpeg)  |  ![](/img/google-drive-retirement-5.jpeg) | ![](/img/google-drive-retirement-6.jpeg)  |





Additionally, you can simply download the files using the Google Drive app and copy them into the folder "On my iPhone/iPad > Panels", or inside your [iCloud Drive library](/libraries/icloud-drive.md), and they will appear when you go back to Panels. 


### Future

We understand that this may not be the most ideal situation for many users. However, please understand that this situation is beyond our control, and unfortunately, it's a part of the risk associated with integrating third-party services.

Rest assured, we'll be monitoring any updates from Google, and should they ever introduce an iOS native Drive Picker, we'll bring this integration back.


:::note

This post was originally posted on the Panels Community 

https://community.panels.app/t/google-drive-integration-removal/2056

:::