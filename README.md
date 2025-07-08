Steps to follow:

1. Initialize a Next.js Project
2. Add Authentication via NextAuth (Google Provider)
3. Create Schema for User, Space, ActiveStream, StreamHistory
4. Create enfpoints that lets
    a. a user create a space
    b. end users add streams
    c. end users upvote/downvote on streams
    d. Lets everyone fetch the current streams (with their upvotes)
5. Create a websocket server where
    a. Users can subscribe to streams (updates on a certain room)
    b. Users get back an update whenever upvotes changes
6. Create the frontend
    a. Landing page
    b. Spaces page
    c. Individual space page