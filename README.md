# secretSanta
Automatic secret santa assigner

Before running need to set up authentication for sending the emails. The 'from' email is a const in src/emails/sendEmail, I'll get that read from the terminal at some point. For a gmail address you can set up auth using the instructions here: https://developers.google.com/identity/protocols/OAuth2

run from src directory:

```node index.js```

(fixing the 'start' script is an open ticket)

Plan is a few branches with versions implementing different algorithms
Will update which does what as I go
Currently just one algorithm which simulates drawing names from a hat, with replace/redraw if someone draws themselves, plus a bit of cleverness to ensure the last person never draws themselves.

To come:
Randomise the list, everyone buy for next in the list
Randomise the list, everyone buy for the person n positions further down the list (overflowing back to the start)
Simulate drawing names from a hat, with replace/retry, if the last person draws themselves just start again entirely
Original list is list A, shuffle to create list B, person in position x in list A buys for person in position x in list B. If clash, reshuffle list and retry.

Right now I'm prioritising writing unit tests over expanding the choice of algorithms.
