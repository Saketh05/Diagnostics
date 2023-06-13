FROM openjdk:latest
ADD target/users-0.0.1-SNAPSHOT.jar  /tmp
WORKDIR /tmp
EXPOSE 9004
ENTRYPOINT ["java", "-jar", "users-0.0.1-SNAPSHOT.jar"]