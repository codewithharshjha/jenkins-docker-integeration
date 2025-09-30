pipeline {
    agent any

    environment {
        REGISTRY = "hjha3987361" // DockerHub username
        DOCKER_CREDENTIALS = credentials('harshjha2003') // Jenkins credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/codewithharshjha/jenkins-docker-integeration.git'
            }
        }

        stage('Build Images') {
            steps {
                // Disable BuildKit to avoid docker-buildx dependency
                sh '''
                    set -e
                    DOCKER_BUILDKIT=0 docker-compose build
                '''
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                sh '''
                    set -e
                    echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin
                    docker tag ecommerce-backend:latest $REGISTRY/ecommerce-backend:latest
                    docker tag ecommerce-frontend:latest $REGISTRY/ecommerce-frontend:latest
                    docker push $REGISTRY/ecommerce-backend:latest
                    docker push $REGISTRY/ecommerce-frontend:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    set -e
                    docker-compose down
                    docker-compose pull
                    docker-compose up -d
                '''
            }
        }
    }
}
