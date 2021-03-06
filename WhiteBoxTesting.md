#Code Analysis/ White-box testing

##Bug1

###Bug source

![Bug 1](docs/bug1.png?raw=true)

###Explanation
 
 Consider a `recipient` is allowed to be added to a `message`. If the `current user` doesn�t have permission to modify recipients, the supplied messages should be added to `failed messages` array. In this case the current code returns true in `canRecieveMessage `function and the `message` will be added to the `successfulMessages` array.


###Test

 Test case for `canRecieveMessage` function.

 Expected output : `failedmessages` size should return `2`
 Actual output   : `failedmessages` size `0`

```
public TestAddrecipientscanRecieveMessageFunction()
{
//Create test users
 User recipient = new User (�user123�);
 User currentUser = new User(�user456�);
 //Create test messages
 Message Message1 = new Message (�Test1�);
 Message Message2 = new Message (�Test2�);
 // setHasPermissionToModifyRecipients for users
 recipient.setHasPermissionToModifyRecipients(false);
 currentUser.setHasPermissionToModifyRecipients(false);

 Message1.setAddRecipientAllowed(recipient, true)
 Message2.setAddRecipientAllowed(recipient, true)
 ArrayList<Message> messages = new ArrayList<Message>();
 messages.add(Message1);
 messages.add(Message2);
 assertEquals(messages.size(),2);
 ArrayList<Message> result = rec.addRecipientToAllMessages(messages, currentUser, recipient)
 //Failed messages should have size 2
 assertEquals(results.size(),2);
}

```
  

##Bug2

###Bug source

![Bug 2](docs/bug2.png?raw=true)

###Explanation

`addRecipient` function is not called when the `successfulMessages` array is not empty. The code checks if the `successfulMessages` array is empty, and tries to add the recipient to messages in `successfulMessages`. 

###Test

Expected output :  Sending two successful messages should add recipient to the messages
Actual output   :  Sending two successful messages doesn�t add recipient to the messages

```
public TestAddrecipientsAddRecipientFunctionCalledWhenSuccessfulMessages()
{

//Create test users
 User recipient = new User (�user123�);
 User currentUser = new User(�user456�);
 //Create test messages
 Message Message1 = new Message (�Test1�);
 Message Message2 = new Message (�Test2�);
 // setHasPermissionToModifyRecipients for users
 recipient.setHasPermissionToModifyRecipients(true);
 currentUser.setHasPermissionToModifyRecipients(true);

 Message1.setAddRecipientAllowed(recipient, true)
 Message2.setAddRecipientAllowed(recipient, true)
 ArrayList<Message> messages = new ArrayList<Message>();
 messages.add(Message1);
 messages.add(Message2);
 assertEquals(messages.size(),2);
 ArrayList<Message> result = rec.addRecipientToAllMessages (messages, currentUser, recipient)
 //Assuming a function to check the number of the messages for a given recipient //(messagesWithRecipient ())
 //Below function should pass. Due to the bug in the code it fails
 assertEquals(messagesWithRecipient(recipient).size(),2);
}

```


##Bug3

###Bug source

![Bug 3](docs/bug2.png?raw=true)

###Explanation
 
 `current user` is passed to `addRecipient` function. `recipient` should be passed.

###Test

 Expected output :  Sending two successful messages should add recipient to the messages
 Actual output   :  Sending two successful messages doesn�t add recipient to the messages


```
public TestAddrecipientsAddedRecipientToaddRecipientFunction()
{
//Create test users
 User recipient = new User (�user123�);
 User currentUser = new User(�user456�);
 //Create test messages
 Message Message1 = new Message (�Test1�);
 Message Message2 = new Message (�Test2�);
 // setHasPermissionToModifyRecipients for users
 recipient.setHasPermissionToModifyRecipients(true);
 currentUser.setHasPermissionToModifyRecipients(true);

 Message1.setAddRecipientAllowed(recipient, true)
 Message2.setAddRecipientAllowed(recipient, true)
 ArrayList<Message> messages = new ArrayList<Message>();
 messages.add(Message1);
 messages.add(Message2);
 assertEquals(messages.size(),2);
 ArrayList<Message> result = rec.addRecipientToAllMessages(messages, currentUser, recipient)
 //Assuming a function �verifyPassedRecipientToaddRecypient()� to verify that recipient is passed to //�addRecipient� function
 assertEquals(verifyPassedRecipientToaddRecipient(), true);
}
```


