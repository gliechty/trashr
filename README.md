# trashr

###https://app.moqups.com/gliechty/n3lLJpnZYb/edit/page/a8e3f8202

###https://trello.com/b/CbhKHcpc/project-1

##By Guy Liechty, WDI 2016

##Trashr is a behavioral enforcement gaming module in which users manipulate cascading trash items into the proper receptacles. 

##Trash items are created in the DOM every 5 seconds and animated with CSS animations. Their initial position is determined with a randomized margin calculation via a js function, and the css animation transfers their position from 0 to 500px down. 

##an event listener allows users to manipulate the trajectory of the trash items left or right, using the arrow keys. A runnning score is calculated using a setTimeout function that measures the left margin of an object at the end of its animated trajectory. A running timer counts the score and determines whether a user passes a level when the full time has elapsed. Trash items are removed from the DOM after they finish their trajectory, ie when another item is created (in Level 1, every 5 seconds.) If a user is unable to achieve a minimum score during the time alotted, they are redirected to the instruction page via a link on a pop-up modal. 


