# Action

This app supports wireless switches sold in various Action stores.

Drivers for Eurodomest, Impuls and SelectPlus are rewritten for better stability. 
Please remove and repair these devices again if you use any of these drivers.

##What's new

####v2.1.4
Fixed bug where bell animation would not stop when pairing the Selectplus doorbell
Set the debounce timeout of Selectplus doorbell to 1 second (Homey will ignore button presses until the signal is not received for 1 second)

####v2.1.3
Fixed bug where the app would crash after removing a promax device.<br/>
Fixed bug where testing a promax socket and then clicking back would not respond to the remote anymore.
