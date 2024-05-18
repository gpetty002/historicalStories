## Notes

#### 11 May 2024

Before commiting, make sure to re-add the .env file to gitignore. Our database doesn't connect when you have the .env file name inside of gitignore. So you will have to remember to remove and re-add this name to the file before every commit and connection.

Data model. We want to store

- user's saved stories
- user's email
- user's password
- data user joined
- user's fav genres based on their saved stories
- date last time user read

The genres they save can be later used for an ML model that we can train.

#### 12 May 2024

Test user created "email": "lol@gmail.com", "password": "soccer", "username": "dogggggg"

I got the sign in to work. Learning about how server and client communicate. Response is what the server sends to the client. Requests is what the client sends to the server; its requesting information that we have stored.

I can send the email and password of a user in a body when I fetch a response from the server, to check for the user's email and validate it comparing the password we have stored. Our response should include other information about them. Like their username, how many genres they like, etc.

I'm trying to figure out why Login doesn't work like Signup. They both deal with POST-ing a request. I'm curious if it has to do with the way I'm storing the email and password. I feel like this shoudn't matter though.

They're on the same server as the back end too and I'm using the correct local host domain and port.

I will keep comparing and researching why its not reaching the login's endpoint.

#### 13 May 2024

I'm able to get through the login screen. My endpoint is working. I had everything correct the day before but I think I needed to restart my server and client sides. Once I came back the next day, the data passed through the routes just fine.

I am having a new issue however. I am now unable to simply render the user's username using the data I passed through with route.params. All of the data shows up correctly. Its all there. Its now just parsing the data.

I have a feeling that the issue has to do with some async call or the logic behind the screen having to render first. I think the screen is rendering but is unable to get the data passed through in time. Almost like there's a delay that is preventing the data from updating in time with the rendering of the screen. I need to figure out how to use the async calls correctly to avoid this issue.

#### 16 May 2024

Attempted to run app as a quick demo for a friend, but I couldn't login. I later realized that I forgot to remove .env from the git ignore file. I also realized because I had changed locations, my wifi network was different. This changed my IP address. MongoDB was unable to connect to my DB because it didn't recognize my new IP address and prevented me from connecting to the DB.

I need to make note anytime I move locations to make sure I've updated my IP address.

#### 17 May 2024

I figured out why my username wasn't rendering on my page. I wasn't accessing the data the correct way. I kept doing "route.params" and I'd receive the entire parameter which is fine. However, I wanted to reference this under a new variable "userData" and call "userData.username" this wouldn't have worked. I needed to also do "route.params.route" to be able to easily access the other keys in the route.

My next move is to start building and organizing the AI model. The way I'm thinking about this: a user can hit any of the genre cards or even search for a genre in the search bar and include a date. So let's say a user does "romance 1516", I'd then send this data to the backend in an endpoint. I'd use a POST method. After, my definition for the endpoint would deal with the Python scripts that breakdown this data and I'd get the important data back.

Data I want to send to the backend to process:

- Genre
- Date (if user includes this)

Data I want from backend after processing:

- Story text
- Date story occurred
- Genre (maybe for scalability, what if the user is able to do a random feature where they don't know what kind of genre they want)
- Image (this could be developed later)
