# Hosted Landing Pages Installation Guide
### Basic Breakdown and Heirarchy
 - this project exists to allow us to create a landing page for a client, and to act as a gateway between the client and an asset using MarPro
 - this project uses several terms and libraries to make everything come together smoothly
 
 #####Node Package Manager and Bower
  - These are dependency managers that allow us to download and install libraries and packages from remote locations to our project, and keep track of everything with version control
 
 #####Grunt
  - Grunt is a javascript taskrunner that you control from the command line, it does things such as:
  - serves the project to localhost with one command: ```grunt serve```
  - compiling SASS
  - compiling templated HTML/JS
  - building to a finalized location, with production level paramaters
  - vendor prefixing, minification, obfuscation
  
 #####Handlbars and SASS
  - handlebars is an HTML/JS templating langauge that allows us to create templates for the landing pages and populate abstracted values with client specific info
  - syntax looks like this:
 
  ```<h1> {{myVariable}} </h1>```
 
  - this variable is then set by JS during runtime
  - SASS is essentially CSS turned up to 11, with tons of extra features that make it more of a scripting language, such as variables and loops
  - this allows use to template out pieces of the landing page to be more client specific
   
  
  
### Prerequisites and Dependencies
These particular software packages are required before cloning and running this repo
##### Download and install Node.js 
>https://nodejs.org/

 - this is the platform on which we base the entire project, using node package manager to download and manage individual libraries and api's
 - node package manager (npm) is a way to download libraries packaged into git repo's without cloning the repo, it also allows you to keep track of all your dependencies in one place, and version control it with git. 
 - npm is installed automatically alongside node. 
 
##### Download and install git 
>http://git-scm.com/
 
 - git allows you to clone this repo, download all its contents, make modifications, submit them, and pull changes
 - git comes with a really nice windows shell called Bash, I would recommend using it if your only experience with the command line is cmd.exe
 - If you are using mac or linux just use the terminal

##### Download and Install Ruby
>https://www.ruby-lang.org/en/downloads/

 - Ruby allows us to write SCSS/SASS (syntactically awesome style sheets) and compile it into CSS, adding it to the final build of our project.
 - SASS is really awesome

###Installation
After installing the previous parts, do the following to set up this project:
#####Check your PATH environmental variables 
 - Sometimes if your machine has been in dev for a while, your paths can get a bit weird and rely on extensions or may have conflicts. 
 - Open your system/user environmental variables and open the PATH variable. Your path contains locations on your hard drive that act as a reference point for your command prompt/ terminal to use libraries and code that you installed.
 - Your path should just be a list of directories separated by semicolons, make sure you have Ruby and NPM in there.
 - My path contains these directories, so make sure yours do too, although they may be in other locations on your drive depending on where you installed them:
 
 ```
 C:\Ruby22-x64\bin;
 C:\Users\Nikita\AppData\Roaming\npm;
 ```
  
#####Install SASS through ruby's dependency manager
 - ruby comes with a way to manage your libraries, called 'gems', and it's very similar to NPM but we only use it for SASS
 - if your path is correctly configured, you can open any terminal and enter the following command:
 
 ```gem install sass```
 
 - SASS is now installed and able to be compiled by our project
 
#####Install Bower through NPM
 - Bower is a dependency manager for our project that will allow us to keep track of certain css/js libraries we use and always have the most up-to-date versions
 - to install Bower open your terminal and enter the following command:
 
 ```npm install bower -g```
 
#####Clone this repository
 - This repo contains every landing page and assets for them, as well as templates and modular pieces for building more pages
 - if you are not familiar with the command line, you should first decide on a location where you want to clone this repo
 - the command ```cd``` allows you to change directory, booting a terminal will start you at your user root
 - This is probably where your github folder is after you installed it, so cloning the project here isn't a bad idea
 
 ```cd Documents/Github ```
 
 - To clone this repo open your terminal and type the following commands:
 
 ```git clone https://github.com/adeka/hlp.git ```



#####Configure the directory, install dependecies and run the project
 - Once you have cloned the repo, ```cd``` into the directory:
 
 ```cd hlp```
 
 - run the following command to download and install the project's dependencies from NPM:
 
 ```npm install```
 
 - this command finds a file in the directory called package.json, and reads its contents to know what libraries it needs to download and install from NPM in order for the project to work
 - Next we must install all the bower dependencies, so run this command:
 
 ```bower install```
 
 - this does something similar, but with a different json file in the bower folder
 - if all goes well, you should have all the parts necessary to run the project. Run the following command:
 
 ```grunt serve```
 
 - this will pop open a tab in your browser where the entire project is being served to a web server on your localhost
 
###Project Heirarchy
 - The main folder contains several files and folders that make everything work correctly
 - *.sass-cache*, *.tmp*, and *test* folder are built by grunt when you use the command ```grunt serve```
 - these are temporary files that allow you to test the project locally
 - the actual code is contained in the *app* folder
 - *bower_components* and *node_modules* are folders that contain the libraries and dependencies we installed with bower and npm
 - package.json and bower.json contain dependeny names and version numbers
 - grunt.js contains javascript commands that tell our grunt server how to behave and where to look for assets and code
 - the *dist* folder is the directory that grunt builds the final landing page to when you run the command ```grunt build```

###APP folder and building a new page
 - this folder contains the working dev environment and landing page code
 - all SASS, CSS, JS, and assets must be placed in the *misc* folder
 
 > NOTE: I did not intend for it to be that way, I know it's silly, but that's how our amazon bucket was set up and apparently "cnames are crazy and that's just how it is"
 
 #####HTML file and handlebars template
 
 - To make your landing page, open an existing landing page and copy its contents, make a new *.html* file, name it after the asset you are working with, and paste it in there
 - open the file and scroll down until you see this JS code:
 
 ```
   var context = {
    nav: [
      { url: "http://www.castleford.com.au/#aboutus", title: "About Us" },
      { url: "http://www.castleford.com.au/#blog", title: "Blog" },
      { url: "http://www.castleford.com.au/#contact", title: "Contact" }
    ],
    social : [
     {url : "http://www.facebook.com/pages/Castleford-Media/156827917673806", title : "facebook"},
     {url : "http://twitter.com/castlefordmedia", title: "twitter"},
     {url : "http://www.linkedin.com/company/castleford-media-pty-ltd", title : "linkedin"}
    ],
    logo : "./misc/logo-light.png",
    cta : "./misc/fail.jpg",
    ctaAlignment: "right",
    backgroundImage: "./misc/sea.jpg",
    backgroundPosition: "middle",
    clientURL: "castleford.com.au",
    blurb : "Download 8 Content Marketing Fails by filling out the form to the right.",
    client : "Castleford",
    analyticsCode : 'UA-XXXXX-X',
    host : "castleford.com.au",
    clientID : '348',
    formID : "5",
    headline: "8 Content Marketing Fails",
    summary : [
      { paragraph: "Content marketing is creating a lot of buzz in Australia and New Zealand right now, with more and more businesses looking at content creation and promotion to build their online brands, boost their website traffic and increase their conversions." },
      { paragraph: "But making a success of content marketing requires a co-ordinated, strategic approach that extends well beyond starting a blog or rewriting your website copy. Like any marketing activity, there are lots of little pieces that need to come together for you to a see a return from content marketing." },
      { paragraph: "In this free download, some of our writers, editors, content strategists and account managers share their top content marketing fails. Avoiding these bear traps will help you meet and exceed your ROI expectations and become a content marketing success story." }
    ]
  };
  ```
  
  - this code is what controls the entire page via a Handlebars Template
  - by changing these values, you can build an entire custom page.
  - nav, social and summary are arrays, and can contain as many or as few objects as you want
  - host, clientID, and formID are required fields that you must obtain from the MarPro page for the client's asset
  - everything else is self-explanatory and should match the client's site colors and theme like an integration
  - remember while you are working on this, use ```grunt serve``` to serve the project to a localhost, the project automatically refreshes the page whenever a change is made in the code, so working on these is fast and easy
  
 #####SASS styling
  
 - the last part of making this work and look good is styling it, for which we will use SASS
 - open up the *main.scss* file in *app/misc*
 - find this block of code:
  
  ```
   $xceleration: (
     accent: #c3d057,
     main: #acb93e,
     lightColor: white,
     darkColor: white,
     textColor: #333,
     accentLight: #acb93e,
     accentDark: white,
     headerHeight: 4em,
     navButtonPad: 1em,
     imagePad: 3em
   );
 ```

- this is basically just a list of values for a specific client that makes their landing page look a certain way, after injecting the values into a SASS template.
- copy and paste this block, change the name from $xceleration to $yourClientName, and popular the colors with appropriate values from their site/blog etc.
- scroll down farther until you see this block of code: 

 ```
 #xceleration{
   @include LoadStyle($xceleration);
 }
 ```

- this tells the sass file to apply that list of values whenever it encounters a page with the ID #xceleration
- duplicate this block of code and change the values to match your client name
- go back to you landing page *.html* file and look at the top of the page:

 ```
 <!doctype html>
 <html class="no-js" id="xceleration">
 <head>
 ```

- change the id= to match your client name too, and you should be good to go!

###Build the page

- once you are happy with the way the page looks, run this command:

 ``` grunt build ```

- this outputs your landing pages to the */dist* directory
- find your client in curator, go to "create a new landing page"
- upload your html file
- upload the entire contents of the */misc* folder
- visit your page by looking at the client's CNAME / yourpagename.html

### grunt tricks
- to serve the page to localhost: ```grunt serve```
- this will open a new tab in your browser and sync with your code, so whenever a change is made, it reloads
- to build your project when you are ready: ```grunt build```
- this outputs the project to */dist*
- to do these commands you must be in the */hlp* directory, use ```cd``` to move there
- if your terminal isn't letting you do stuff, press CTRL+C to escape from the current operation
- if your pathname has spaces in it, wrap the whole thing in quotes
