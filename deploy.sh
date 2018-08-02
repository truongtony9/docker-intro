# do not have anything in git yet, if do then uncomment git pull
# git pull
docker build -f Dockerfile-prod -t docker-intro-demo-image .
docker rm -f docker-intro-demo-container
docker run -d -p 3001:3001 --restart always --name="docker-intro-demo-container" -i docker-intro-demo-image
docker container prune -f
docker image prune -f

