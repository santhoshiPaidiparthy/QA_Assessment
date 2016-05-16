# Specification Review

## Question1
  Read the specification and identify any aspect that is unclear or risky. From this, provide a written list of questions you would ask the Product Manager to clarify this spec before development begins.

### List of questions

##### Change Password

  * How can `Change Password` have the same behavior for both `user` and `CSR`?
    * From the screen shot for reset password, it prompts for new password/confirm passwor. CSR should have a different option, Ex: To send a reset link to the user.
    
  * What is the difference between `writable users` and `users`? How does `Change password` behaviour differ for `writable user` and `user`?

  * How does users navigate to the `change password` page?

#### Profile Page / Edit Profile 

  * When `CSR` is editing a profile, does the profile edit page options change for `writable user` and other `user`? If not how does the CSR differentiate between writable users and other users?

  * How does the `CSR` navigate to `edit profile` page for a user?

  * How does `edit profile` look for CSR user? Does it have additional option for Different user profile access?

  * Are there any required fields on edit profile page?
  
  * Are there any specific validations for fields on the edit profile page?

#### Sign up Page

  * What kind of information should a `writable usr` and other `user` provide when signing up?

#### Settings Page  

  * Clicking on remove linked account what will result ? 

  * How can I link it back if it is removed ? where will be that option available in settings?

  * Can CSR user remove the linked account and deactivate profile ?

  * What happens if I signed in using facebook account and removed the link in the settings page ? Does it mean account with the home away deleted ?  or homeAway login  will be operating independently with same login credentials of facebook?


## Question2

  Imagine that the Product Manager is about to leave on a months holiday, and the feature will be implemented and shipped while she is away. She is in a hurry and has to leave work to catch her flight in 10 minutes.
  From your list, choose 3-5 questions that you believe are the most important for her to answer before she leaves. Justify your choices. Why did you select those questions? What answers do you expect to receive? How would you expect the answers to affect the development work?


  * What is the difference between `writable users` and `users`? How does `Change password` behaviour differ for `writable user` and `user`?
  * How does the `CSR` navigate to `edit profile` page for a user?
  * How does users navigate to the `change password` page?

 I would ask above three questions. These will provide information about the missing links while navigaing between different pages. This will help in starting with basic page structure design/development.

  









