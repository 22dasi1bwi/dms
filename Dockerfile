FROM openjdk:11-jdk-slim-stretch

#Create non-root user
RUN useradd appuser --gid=100 --uid=1337 -m

COPY backend/target/backend-1.jar /var/opt/backend.jar

USER appuser
CMD java -jar /var/opt/backend.jar
