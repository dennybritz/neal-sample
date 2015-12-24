# neal-React Sample Page

This is a sample page for [neal-react](http://www.github.com/dennybritz/neal-react), reactjs components for building landing pages.


## Develop locally

Transpile the Javascript using Babel and watch for changes:

```bash
git clone https://github.com/dennybritz/neal-sample.git
cd neal-sample
npm install
npm run watch
```

Run with webpack:

```bash
npm run serve
```

Run inside a docker container:

```
docker run -p 3000:80 -v "$PWD"/public:/usr/local/apache2/htdocs/ httpd:2.4
```

Visit `http://<YOUR_DOCKER_MACHINE_IP>:3000`