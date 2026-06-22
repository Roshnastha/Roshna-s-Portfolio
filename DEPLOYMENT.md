# Deployment Guide for Portfolio

This guide covers deploying your Next.js portfolio application using Docker.

## Prerequisites

- Docker and Docker Compose installed
- A server or VPS to deploy to (Linux recommended)
- Git (for version control)

## Local Docker Build & Test

### 1. Build the Docker image locally

```bash
docker build -t portfolio:latest .
```

### 2. Run the container locally

```bash
docker run -p 3000:3000 portfolio:latest
```

Access the app at `http://localhost:3000`

### 3. Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

This will:
- Build the image
- Start the container
- Map port 3000

To stop: `docker-compose down`

## Deploy to VPS/Server

### 1. Push Docker image to registry (Docker Hub)

```bash
# Login to Docker Hub
docker login

# Tag your image
docker tag portfolio:latest yourusername/portfolio:latest

# Push the image
docker push yourusername/portfolio:latest
```

### 2. On your VPS/Server

```bash
# SSH into your server
ssh user@your-server-ip

# Clone your repository or pull the code
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Pull the latest Docker image
docker pull yourusername/portfolio:latest

# Run with Docker Compose
docker-compose up -d
```

## Production Considerations

### 1. Environment Variables

Create a `.env.production` file:

```env
NODE_ENV=production
# Add other environment variables as needed
```

Update docker-compose.yml to load this file:

```yaml
services:
  web:
    env_file:
      - .env.production
```

### 2. Nginx Reverse Proxy (Optional but Recommended)

Create `nginx.conf`:

```nginx
upstream nextjs_app {
    server web:3000;
}

server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://nextjs_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Update docker-compose.yml:

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - web

  web:
    build: .
    environment:
      NODE_ENV: production
    restart: unless-stopped
```

### 3. SSL/HTTPS with Let's Encrypt

Install Certbot and generate certificates:

```bash
certbot certonly --standalone -d your-domain.com
```

Update Nginx config to use SSL and add Docker volume for certificates.

### 4. Auto-Restart Policy

The docker-compose.yml already includes `restart: unless-stopped`, which will automatically restart the container if it crashes.

### 5. Health Checks

Uncomment the healthcheck in docker-compose.yml to enable container health monitoring.

## Monitoring & Logs

### View logs

```bash
docker-compose logs -f web
```

### Check running containers

```bash
docker-compose ps
```

### Access container shell (for debugging)

```bash
docker-compose exec web sh
```

## Updating Your Application

1. Make changes to your code
2. Commit and push to Git
3. On your server:

```bash
git pull origin main
docker-compose down
docker-compose up --build -d
```

## Troubleshooting

### Container won't start

```bash
docker-compose logs web
```

### Port already in use

Change the port mapping in docker-compose.yml:

```yaml
ports:
  - "8000:3000"  # 8000 is the external port
```

### Build failures

Ensure pnpm-lock.yaml is committed and Node version is 20+.

## Quick Reference Commands

```bash
# Build image
docker-compose build

# Start services
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build -d

# View logs
docker-compose logs -f

# Restart service
docker-compose restart web

# Remove everything (including volumes)
docker-compose down -v
```

## Production Deployment Checklist

- [ ] Update domain name in Nginx config
- [ ] Set up SSL certificates
- [ ] Configure environment variables
- [ ] Enable health checks
- [ ] Set up monitoring/alerts
- [ ] Configure backups
- [ ] Test rollback procedures
- [ ] Document any custom configurations
