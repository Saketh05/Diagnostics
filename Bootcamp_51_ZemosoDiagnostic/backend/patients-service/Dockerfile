FROM openjdk:latest
ADD target/patients-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9003
ENTRYPOINT ["java", "-jar", "patients-0.0.1-SNAPSHOT.jar"]