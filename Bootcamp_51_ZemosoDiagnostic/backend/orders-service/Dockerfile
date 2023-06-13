FROM openjdk:latest
ADD target/orders-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9002
ENTRYPOINT ["java", "-jar", "orders-0.0.1-SNAPSHOT.jar"]