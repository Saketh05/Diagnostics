FROM openjdk:latest
ADD target/addresses-0.0.1-SNAPSHOT.jar  /tmp
WORKDIR /tmp
EXPOSE 9001
ENTRYPOINT ["java", "-jar", "addresses-0.0.1-SNAPSHOT.jar"]