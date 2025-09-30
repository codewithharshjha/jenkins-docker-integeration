pipeline {
    agent any

    environment {
        REGISTRY = "hjha3987361" // your DockerHub username
        DOCKER_CREDENTIALS = credentials('Tarnidevi@2024') // set this in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MohitSojitra/e-commerce-store.git'
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                sh '''
                echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin
                docker tag ecommerce-project_backend $REGISTRY/ecommerce-backend:latest
                docker tag ecommerce-project_frontend $REGISTRY/ecommerce-frontend:latest
                docker push $REGISTRY/ecommerce-backend:latest
                docker push $REGISTRY/ecommerce-frontend:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down && docker-compose pull && docker-compose up -d'
            }
        }
    }
}
