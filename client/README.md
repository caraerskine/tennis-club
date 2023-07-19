Welcome to Public Tennis Club!
NYC Tennis Match Booking App

This is an SPA to schedule tennis matches at various clubs all over New York City!

The cost of this booking app is a $5 one-time flat fee. It is payable through
the Stripe API. For purposes of the App, this is in testing mode and is functional,
but no money is exchanged and all account information is "blank" in test mode.

The app has 5 navigation buttons at the top: about, home, clubs, matches.  
The site is secure and requires a login to see your individual matches. 
Users can sign up and create a profile with a picture, username and more.
All users can see all 5 area tennis clubs. 
You can add a match to a club, delete a match, and edit your match. 
You can invite another user to play a tennis match, these match invites are handled with ActionMailer.
You can see if your match is pending, accepted, or rejected and sort accordingly.
You and your tennis match partner can leave comments on a completed match.


GOALS ACHIEVED

MVP: As a user, I can:
Sign up for an account
Log in to the site & remain logged in
Log out
View a list of all tennis clubs
Modify or delete a match
Create a new match

CREATE -Allow users to create a new match

READ -Display data of clubs and matches

UPDATE -Allow current user to edit a match

DELETE -Allow current user to delete a match

DEPLOYED This app is deployed on Render as a publicly available app: https://tennis-club.onrender.com/

MY GIT URL of repo https://github.com/caraerskine/tennis-club.git

STYLING I used some CSS and MUI https://mui.com/joy-ui/react-input/

-You need Rails to run the back end
Open a terminal window, cd into 'tennis-club' and run 'rails s'

-You need React to run the front end from within the directory 
Run npm install and npm run server 
Open a second terminal window, cd into 'client' and run 'npm start'


