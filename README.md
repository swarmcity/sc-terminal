# Swarm City Terminal

The Swarm City Terminal is the starting point of the user journey in Swarm City. The Swarm City Terminal will be the main entry screen into the Swarm City ecosystem and will be the browser for the hashtags ( starting with #ridesharing ). It provides the Swarm City citizens the possibility to create and and manage a basic profile and exchange SWT tokens in a wallet.

## New user
A new swarm city member opens the app (terminal.swarm.city) and can create his own wallet in Swarm City. He must choose a strong password (min 9 characters) and needs to enter this twice. A new user account is created.

## New session on device with my wallet
A user that already has a wallet installed on his device, can open the app and unlock it by entering his password.

## Terminal
The new user enters the terminal view, with empty avatar, empty username, empty balance, reference currency and an overview of all games provided in Swarm City (to start with ridesharing).

## Profile
By clicking on the profile picture or the username, the user goes to the profile view.
On the profile view, you see your profile picture, username, history of all transactions, button to make backup, and the shortcode to sync another device.

To personalize his account, the user can change his profile picture and username. The user can upload a file for profile picture, or take a picture with the camera in his device. The image can be cropped before saving. A user can set the currency to which he wants the SWT tokens to refer to. The user can choose between BTC/ETH/USD/EUR. In the balance of the wallet, this reference currency will be shown, besides the SWT token balance. On the profile screen, the user sees a history of all transactions he made.

## Making a backup
Next to the avatar and username, there is a warning sign, it will be there as long as the user hasn’t made a backup. Clicking on it, or on the avatar/username, takes the user to the profile view, with on top of it, instructions to make a backup.
The user can download the json file and can choose to store it on the device or on a cloud storage.

## Wallet
By clicking on the balance on the terminal, the user goes to wallet view.
He sees his SWT balance, the reference currency, a button to do a transaction and a button to top up your SWT token balance with tokens you have on another wallet.

The user can send tokens to another user, by entering the amount and the shortcode of the receiver. Once the transaction is completed, the current status of that transaction is shown and gets updated until done.
The user can receive tokens by giving his shortcode to the person wanting to send tokens.

## Importing ARC tokens
The SWT token can import an ARC wallet and automatically convert your ARC tokens into SWT tokens.

## Importing a backup file
The user can import the SWT wallet by uploading the json file and entering the password, or by entering the private key from the paper wallet.

The user can transfer SWT tokens straight from any other wallet into the SWT terminal, by making a transaction to this new address of this newly created terminal.

## Existing user on a new device
A user that opens the app, has the option to click on the button to upload the backup or sync with another device.
The user can upload the json file, enter the password and the user account gets imported.
The user can also choose to sync two devices. To do so he needs the device where the terminal is already active (device A) and the new device, that he wants to sync (new device). The user is asked to get the new device and device A ready. On the new device he is asked to enter a shortcode to sync. The user gets this shortcode on device A, in his profile view. When the shortcode is entered on new device, a dialogue pops up on device A, asking for permission to sync the account on a new device. If permission is granted, the user account is imported on the new device.
