# 📐 Arquitectura de Despliegue — SPA en AWS

**SPA - Deploy**  
*Fecha: 23 de abril de 2025*

![SPA Deploy Diagrama](https://images.kaarstthenn.online/SPA%20-%20Deploy%20-%20Pa%CC%81gina%201.png)

Este proyecto implementa una arquitectura **serverless y altamente disponible** para desplegar una SPA (Single Page Application) utilizando servicios gestionados de AWS.

---

## 🔁 Flujo de la Arquitectura

```
Usuarios ─► Cliente Web
             │
             ▼
       [ Amazon Route 53 ]
             │
             ▼
       [ Amazon CloudFront ]
             │        ▲
             ▼        │
        [ Amazon S3 ] │
                      │
                      ▼
           [ AWS ACM ] [ AWS WAF ]
```
---

## 🧩 Componentes del Sistema

1. **AWS WAF**  
   Firewall de aplicaciones web que protege contra ataques comunes como inyecciones SQL y bots.

2. **Amazon Route 53**  
   Servicio de DNS escalable que enruta el tráfico desde el dominio hacia la distribución de CloudFront.

3. **Amazon S3 (Simple Storage Service)**  
   Almacén de objetos que contiene los archivos estáticos del sitio (HTML, CSS, JavaScript, imágenes). Actúa como origen para CloudFront.

4. **Amazon CloudFront**  
   Red de entrega de contenido (CDN) que proporciona acceso rápido y seguro a nivel global. Gestiona caching, compresión y soporte HTTPS.

5. **AWS Certificate Manager (ACM)**  
   Servicio que gestiona certificados SSL/TLS, utilizados por CloudFront para habilitar HTTPS de manera segura y automatizada.

---

## ⚙️ CI/CD — Automatización del Despliegue

![CI/CD Diagrama](https://images.kaarstthenn.online/SPA%20-%20Deploy%20-%20Pa%CC%81gina%201%20(1).png)

La integración y entrega continua (CI/CD) permite automatizar la construcción, prueba y despliegue de la SPA desde el repositorio fuente hasta el entorno productivo en AWS.

### Pasos del Pipeline:

1. **Commit en Repositorio (Ej. GitHub, GitLab)**  
   Cada cambio en el código fuente desencadena el pipeline automáticamente.

2. **Build del Proyecto**  
   Se genera el paquete estático de la SPA mediante herramientas como Webpack o Vite.

3. **Pruebas Automatizadas**  
   Se ejecutan pruebas unitarias y de integración.

4. **Deploy a S3**  
   Los archivos estáticos se sincronizan en el bucket de Amazon S3.

5. **Invalida Caché de CloudFront**  
   Se realiza una invalidación para garantizar que los usuarios obtengan la versión más reciente de la aplicación.

---

