# Lab 8 - Starter

Yizhou Wang

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

I would test within a Github action that runs whenever code is pushed. While Github would automatically test with the test file every time when I push/modify codes in Github, manually running is not automatic, and running them all after all development is completed contradicts the characteristic of automated tests that scripts are tested based on certain events such as codes pushed to repo. In other words, every time when codes are pushed to repo, we should have a test.

2) Would you use an end to end test to check if a function is returning the correct output? 

No. We can use unit testing.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes because unit testing is used for testing individual parts (such as a feature) of the code.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes because unit testing is used for testing individual parts (such as a feature) of the code.

