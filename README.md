# secretSanta
will become: automatic secret santa assigner

Plan is a few branches with versions implementing different algorithms
Will update which does what as I go (I hope)

smartHat:   take each user in turn and assign them another user to buy for, by selecting from a list ("hat") of users yet to be assigned to someone
            if there are 3 or more users left to choose from, pick one at random, if one picks the user being assigned to, retry.
            if there is 1 user left, assign them to the current (last) user.
            if there are 2 users left in the "hat", and one of them is the last user to be assigned to, assign them to the current (penultimate) user
            if there are 2 users left, and neither of them is the last User to be allocated, take one at random, replacing self