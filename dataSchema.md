**Data Schema

**Users
 - email -> input / req / string / unique
 - name -> input / req / string
 - userName -> input / req / string / unique
 - password -> input / req / string
 - createdOn ->  calc'd / req / date
 - userID -> calc'd / req / string / unique
 




**Posts
 - subject -> input / req / string
 - text -> input / req / string
 - image  -> input / string
 - likes ->   calc'd / number
 - posterID ->   calc'd / req / string / from logged in userID
 - createdOn ->   calc'd / req / date