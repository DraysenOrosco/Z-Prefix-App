How to use

Start backend.

Start frontend.

Login at /login.

Visit /inventory to see and add items.

Inventory Management App
also forgot to fix the application name...

This app is made to help users see and add inventory items. You can see items even if youre not logged in. If youre login, you can add your own items too.

How to run

Run backend server on port 3000 first. use command npm start in the base folder aka full-stack-repetitions 

Then run frontend cd into the my-vite-react-app  and start up the app with npm run dev.

Open your browser and go to homepage at http://localhost:5173.

Features

View all inventory items when not logged in.

When logged in, see only your items plus some public items, further development will be made to fix the issue of not seeing all items when logged in.

You can add new items if you logged in if not then the user cannot add any items.

Login with username and password (no signup page now, users made manually will be fixed within further development of this application).

Pages

Home: Simple landing page.

Login: Enter username and password to login.
current useable accounts: 
username: james
password: hello123

username: alex
password: bye321

username: sam
password: hey213

Inventory: Shows items, form to add items if logged in.

Notes

Passwords are stored hashed is planned, but currently just saved as plain text currently will encrypt to further surcure the app.

No signup, so you must add users by hand or seed them in database.

The UI is simple and not styled well but it works.

You need backend running before frontend or else fetch requests fail.

