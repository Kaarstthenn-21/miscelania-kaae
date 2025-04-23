¡Perfecto! Aquí tienes el fragmento actualizado del `README.md`, incluyendo el diagrama como una imagen remota con un título apropiado:

---

```markdown
## 📐 Arquitectura de Despliegue — SPA en AWS

Este proyecto implementa una arquitectura **serverless y altamente disponible** para desplegar una SPA (Single Page Application) utilizando servicios gestionados de AWS.

### 🧩 Componentes del sistema

1. **AWS WAF**  
   Firewall para aplicaciones web que bloquea ataques comunes como inyecciones y bots.

2. **Amazon Route 53**  
   Servicio de DNS que enruta el tráfico desde el dominio público hacia el CDN de CloudFront.

3. **Amazon S3 (Simple Storage Service)**  
   Almacén de archivos estáticos como HTML, CSS, JS e imágenes. Funciona como origen de CloudFront.

4. **Amazon CloudFront**  
   Red de distribución de contenido (CDN) que acelera el acceso global a los archivos, maneja caching, compresión y HTTPS.

5. **AWS Certificate Manager (ACM)**  
   Servicio que emite y administra certificados SSL/TLS usados por CloudFront para ofrecer HTTPS de forma automática y segura.

---

### 🔁 Flujo de la arquitectura

```text
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
             ▲        │
             │        ▼
         [ AWS ACM ] [ AWS WAF ]
```

---

### 🖼️ Diagrama

**SPA - Deploy**  
*Fecha: April 23, 2025*

![SPA Deploy Diagrama](https://images.kaarstthenn.online/SPA%20-%20Deploy%20-%20Pa%CC%81gina%201.png)
```

---
