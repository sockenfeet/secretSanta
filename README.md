# secretSanta
Automatic secret santa assigner

run from root directory:
```node index.js```
(fixing the 'run' script is an open ticket)

Plan is a few branches with versions implementing different algorithms
Will update which does what as I go
Currently just one algorithm which simulates drawing names from a hat, with replace/redraw if someone draws themselves, plus a bit of cleverness to ensure the last person never draws themselves.

To come:
Randomise the list, everyone buy for next in the list
Randomise the list, everyone buy for the person n positions further down the list (overflowing back to the start)
Simulate drawing names from a hat, with replace/retry, if the last person draws themselves just start again entirely
Original list is list A, shuffle to create list B, person in position x in list A buys for person in position x in list B. If clash, reshuffle list and retry.

Right now I'm prioritising writing unit tests over expanding the choice of algorithms.
