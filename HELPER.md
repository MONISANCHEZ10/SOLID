## Context

I'm starting the node-solid-server, I created the SSL certificate so that:

- I'm initiating SOLID  ``single-user mode server``, and run correctly, this way I get config.son parameter setting file `` ":multiuser": false`` .
Expected Behavior:
- Create user,login, upload pic, update user data , and add contacts.
- The start ``multi-user mode server``,  I do to change the mode is to modify the ``config.json `` file, parameter ``"multiuser": true``.
Expected Behavior:
- Create users, login to different users, upload photo, update data and add contacts.

Real behavior:
- Creating users: no problem.
- Login:
    -  Web Browser
  
  ``` 
  Strange: Error 500 trying to read your preferences file.Fetcher: <https://user1.localhost:8443/settings/prefs.ttl> 
  Internal Server ErrorWeb error: 500 (Internal Server Error) on PATCH of <https://user5.localhost:8443/profile/card>  

```

- Console 
    
    ```
CONSOLE DEBUG="SOLID:*" solid start
Solid server (5.2.3) running on https://localhost:8443/
Press <ctrl>+c to stop
  solid:get / on localhost +0ms
  solid:get / on localhost +4s
  solid:get / on localhost +168ms
  solid:get / on localhost +82ms
  solid:get / on localhost +30s
  solid:get HEAD only +8ms
  solid:get / on localhost +85ms
  solid:get /profile/card on user5.localhost +13s
  solid:get    sending data browser file: /usr/lib/node_modules/solid-server/node_modules/mashlib/dist/index.html +2ms
  solid:get /favicon.ico on user5.localhost +895ms
  solid:get /profile/card on user5.localhost +216ms
  solid:get /settings/publicTypeIndex.ttl on user5.localhost +13s

```
ACTIONS DONE
Which can be considered the SSL certificate problem, I have returned to generate and assign read and execute permissions (755).
Clear history and cache, also try another browser as indicated in solving the problem:
https://github.com/solid/node-solid-server/issues/1093
https://github.com/solid/node-solid-server/issues/1251


