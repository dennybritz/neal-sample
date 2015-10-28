# Neal-React Sample Page

This is a sample page for [neal-react](http://www.github.com/dennybritz/neal-react), reactjs components for building landing pages.


## Develop locally

Build a minified Javacript version:

```bash
git clone git@github.com:dennybritz/neal-sample.git
cd neal-sample
npm install
npm run watch
```

Run inside a webserver with docker:

```
cd neal-sample
docker run -p 3000:80 -v "$PWD"/public:/usr/local/apache2/htdocs/ httpd:2.4
```

Visit `http://<YOUR_DOCKER_MACHINE_IP>:3000`


## Deploying to AWS

Simply copy the `public/` directory to an AWS S3 bucket and enable [Static Website Hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).