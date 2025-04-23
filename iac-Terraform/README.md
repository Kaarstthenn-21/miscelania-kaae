# Scalable Java Application on AWS Using Terraform

![java-aws](https://images.kaarstthenn.online/SPA%20-%20Deploy%20-%20Deploy-Java-terraform.png)

## 🐾 Java Application

Este proyecto utiliza una aplicación Java de código abierto basada en Spring Boot:

➡️ [`spring-projects/spring-petclinic`](https://github.com/spring-projects/spring-petclinic)

## 🛠️ Tools & AWS Services

### 🔧 DevOps Tools

- Jenkins
- Packer
- Ansible
- Terraform

### ☁️ AWS Services

- Application Load Balancer (L7)
- Autoscaling Group
- AWS Secrets Manager
- Amazon RDS (MySQL)

## 🔄 Project Workflow

1. **Build** la aplicación Java.
2. Usa **Packer** y **Ansible** para construir una AMI con el código de la aplicación:
   - Configura el sistema de logs de la aplicación.
   - Instala y configura el agente de **CloudWatch** para monitoreo de logs.
3. Utiliza **Terraform** para aprovisionar:
   - Una instancia **RDS MySQL**, almacenando usuario y contraseña en **AWS Secrets Manager**.
   - Un **Application Load Balancer (ALB)**.
   - Un **Launch Template** usando la AMI creada con Packer.
   - Un **Auto Scaling Group** basado en el Launch Template, asociado al ALB.
4. Verifica la aplicación accediendo a través del **endpoint del Load Balancer**.
5. Verifica los **logs en CloudWatch**.

## 📚 Recursos Útiles

- [RDS Password Rotation with Terraform](https://advancedweb.hu/how-to-set-up-amazon-rds-password-rotation-with-terraform/)


