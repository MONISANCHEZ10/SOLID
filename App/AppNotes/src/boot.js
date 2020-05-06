const auth = require('solid-auth-client')
 
auth.trackSession(session => {
  if (!session)
    console.log('The user is not logged in')
  else
    console.log(`The user is ${session.webId}`)
})
 
solid.auth.trackSession(session => {
    console.log(session);
  if (!session)
    console.log('The user is not logged in')
  else
    console.log(`The user is ${session.webId}`)
  })

  async function login(idp) {
    const session = await solid.auth.currentSession();
    if (!session)
      await solid.auth.login(idp);
    else
      alert(`Logged in as ${session.webId}`);
  }
  login('https://solid.community');