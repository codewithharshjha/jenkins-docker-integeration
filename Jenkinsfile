pipeline {
    agent any

    environment {
        REGISTRY = "hjha3987361"
        DOCKER_CREDENTIALS = credentials('harshjha2003')
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/codewithharshjha/jenkins-docker-integeration.git'
            }
        }

        stage('Build Images') {
            steps {
                sh '''
                    set -e
                    DOCKER_BUILDKIT=0 docker-compose build --no-cache
                '''
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                sh '''
                    set -e
                    echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin
                    docker tag ecommerce-backend:latest $REGISTRY/ecommerce-backend:$IMAGE_TAG
                    docker tag ecommerce-frontend:latest $REGISTRY/ecommerce-frontend:$IMAGE_TAG
                    docker push $REGISTRY/ecommerce-backend:$IMAGE_TAG
                    docker push $REGISTRY/ecommerce-frontend:$IMAGE_TAG
                '''
            }pipeline {
    agent any

    environment {
        REGISTRY = "hjha3987361"
        DOCKER_CREDENTIALS = credentials('harshjha2003')
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/codewithharshjha/jenkins-docker-integeration.git'
            }
        }

        stage('Build Images') {
            steps {
                sh '''
                    set -e
                    DOCKER_BUILDKIT=0 docker-compose build --no-cache
                    docker images
                '''
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                sh '''
                    set -e
                    echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin
                    
                    # Push with :latest tag
                    docker push $REGISTRY/ecommerce-backend:latest
                    docker push $REGISTRY/ecommerce-frontend:latest
                    
                    # Also tag with build number
                    docker tag $REGISTRY/ecommerce-backend:latest $REGISTRY/ecommerce-backend:$IMAGE_TAG
                    docker tag $REGISTRY/ecommerce-frontend:latest $REGISTRY/ecommerce-frontend:$IMAGE_TAG
                    docker push $REGISTRY/ecommerce-backend:$IMAGE_TAG
                    docker push $REGISTRY/ecommerce-frontend:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -e
                    docker-compose pull
                    docker-compose up -d --remove-orphans
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker system prune -af || true'
            }
        }
    }
}

        }

        stage('Deploy') {
            steps {
                sh '''
                    set -e
                    docker-compose pull
                    docker-compose up -d --remove-orphans
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker system prune -af || true'
            }
        }
    }
}
