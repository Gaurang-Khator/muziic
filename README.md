Steps to follow:

1. Initialize a Next.js Project 
2. Add Authentication via NextAuth (Google Provider)
3. Create Schema for User, Space, ActiveStream, StreamHistory
4. Create endpoints that lets<br>
    a. a user create a space <br>
    b. end users add streams <br>
    c. end users upvote/downvote on streams <br>
    d. Lets everyone fetch the current streams (with their upvotes)
5. Create a websocket server where
    a. Users can subscribe to streams (updates on a certain room) <br>
    b. Users get back an update whenever upvotes changes <br>
6. Create the frontend
    a. Landing page <br>
    b. Spaces page <br>
    c. Individual space page <br>