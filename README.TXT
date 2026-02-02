// codigo de ejemplo
spring:
  application:
    name: RestAPI
  
  datasource:
    url: jdbc:mysql://localhost:3306/crudusers?useSSL=false&serverTimezone=UTC
    username: app_user
    password: password_de_ejemplo
  jpa:
    hibernate:
      ddl-auto: update
