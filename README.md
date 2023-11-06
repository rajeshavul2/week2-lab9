# Lab Starter Code Repository

Welcome to the Lab Starter Code Repository! This repository serves as the starting point for various labs and exercises.

### Preparation

1. Create a new folder called `dev`. This folder will be used to store all of your lab activities for the fullStack course

2. Inside the `dev` folder, create another folder named `week2`.

3. Within the `week2` folder, clone the repository to your local machine. 

> You will follow a similar process for each week's activities. For example, in week 3, create a new folder inside the "dev" folder named "`week3`" and clone the repository for that week's activities.

### Clone the repo

1. Navigate to the directory where you want to clone the repository e.g `week2`1. 
   
2. Open the terminal in VsCode

3. Once you're in the desired directory, use the `git clone` command followed by the repository URL you copied earlier. For example:
   ```
   git clone https://github.com/Full-Stack-TX00FC40/lab-starter  week2-lab2
   ```

4. Git will download the repository to your local machine. Once the process is complete, you'll have a local copy of the repository.

#### Create a New Repository on GitHub

1. Go to the GitHub website .

2. Click on the plus sign icon in the top right corner of the page, and then select "New repository."

3. Fill in the details for your new repository:
   - Repository name: Choose a name for your new repository.
   - Description (optional): Add a short description to explain the repository's purpose.
   - Visibility: Choose between "Public" or "Private," depending on who should have access.
   - Do not initialize the repository with a `README` file or a `.gitignore` file.

4. Click the "Create repository" button to create your new repository.

#### Change the Origin to Point to Your New Repository

After you've cloned the repository and created a new one on GitHub, follow these steps to change the origin to point to your new repository:

1. Open your terminal or command prompt if it's not already open.

2. Check the remote repositories associated with your local repository using the following command:
```sh
git remote -v
```

This command will display the current remote repository URLs. You should see the original GitHub repository's URL as `origin`.

3. To change the remote URL to point to your new repository on GitHub, use the `git remote set-url origin` command as follows:
```sh
git remote set-url origin https://github.com/yourusername/new-repository.git
```

Replace `yourusername` with your GitHub username and `new-repository` with the name of the repository you created.

4. Verify that the remote URL has been updated by running `git remote -v` again. You should now see the URL of your new repository as `origin`.

5. You can now push your changes to your new GitHub repository using standard Git commands.

### Submission

Upon completing any lab exercise, follow these steps to submit your work:

1. **Stage Your Changes**: 

*Stop the server* if it is running. Add all the changes you've made to the staging area using the following command:

```shell
git add .
```

1. **Commit Your Changes**: Commit your changes with a descriptive message. Replace `#` with the lab number and week number you're working on:

```shell
git commit -m "Solved lab # week #"
```

3. **Push Your Changes**: Push your committed changes to your forked repository on GitHub:

```shell
git push -u origin main
```
