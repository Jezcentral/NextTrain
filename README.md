# NextTrain

The project looked as if it would be a good fit for React, but the test stressed the importance of the script being generic, and not building a Single Page App (like create-react-app), so I wrote the component in vanilla Javascript in a single file.

Admittedly, this made unit testing problematic, so I ended up writing some of the tests in separate scripts, and using Jest to test them, and then copy-and-pasting them into the HTML file. I have included them so you can see my testing methodology, although the scripts that are being tested are not the ones doing the work (although they are identical).

I didn't complete the test. I still need to implement the time limits of the services for North Square and West Market. There is a TODO in the code where I explain where I would have added this to the code.

INSTALLATION NOTES:

To see the page work, just unzip, and click on index.html.

To test the code, you need NPM installed (although Yarn will also work).

1) Navigate to Next_Train_Indicator in Git Bash/Terminal

2) Type: npm install --save-dev jest

3) Add this block of code to your package.json (creating the file package.json if necessary):

{
 "scripts": {
  "test": "jest"
 }
}

4) In Git Bash, type: npm run test
