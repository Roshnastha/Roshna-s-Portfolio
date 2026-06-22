# Deployment Guide - www.shrestharoshna.com

Complete step-by-step guide to deploy your portfolio to your custom domain with SSL/HTTPS.

## Prerequisites

- VPS or Server with Ubuntu 20.04+ or similar Linux distribution
- Domain: www.shrestharoshna.com already registered
- SSH access to your server
- Docker and Docker Compose installed on server
- Git installed on server

## Step 1: DNS Configuration

Point your domain to your server IP address.

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add:

### A Record:
```
Type: A
Name: @ (or leave blank)
Value: YOUR_SERVER_IP
TTL: 3600

Type: A
Name: www
Value: YOUR_SERVER_IP
TTL: 3600
```

**Verification:** Wait 5-10 minutes, then test:
```bash
nslookup shrestharoshna.com
nslookup www.shrestharoshna.com
```

Both should resolve to YOUR_SERVER_IP

## Step 2: Server Setup

### SSH into your server:
```bash
ssh root@YOUR_SERVER_IP
```

### Update system packages:
```bash
apt update && apt upgrade -y
```

### Install Docker:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker $USER
```

### Install Docker Compose:
```bash
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Install Certbot (for SSL):
```bash
apt install -y certbot python3-certbot-nginx
```

## Step 3: Clone Repository

```bash
cd /opt
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

## Step 4: Generate SSL Certificate

**IMPORTANT:** Your domain must be pointing to your server IP for this to work!

```bash
certbot certonly --standalone \
  -d shrestharoshna.com \
  -d www.shrestharoshna.com \
  --agree-tos \
  --no-eff-email \
  -m your-email@example.com
```

This creates certificates at:
```
/etc/letsencrypt/live/shrestharoshna.com/
```

### Auto-renewal setup:
```bash
certbot renew --dry-run
```

## Step 5: Configure and Deploy

### Update Nginx config (if needed):
Edit `nginx.conf` to ensure domains are correct:
```bash
nano nginx.conf
```

Verify the `server_name` line shows your domains.

### Start Docker containers:
```bash
docker-compose up -d --build
```

### Verify it's running:
```bash
docker-compose ps
docker-compose logs -f
```

## Step 6: Test Your Domain

Visit in browser:
- https://www.shrestharoshna.com
- https://shrestharoshna.com

You should see your portfolio live!

## Step 7: Firewall Setup

If you have UFW enabled:
```bash
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw enable
```

## Ongoing Maintenance

### View logs:
```bash
cd /opt/portfolio
docker-compose logs -f web
docker-compose logs -f nginx
```

### Update your application:
```bash
cd /opt/portfolio
git pull origin main
docker-compose up --build -d
```

### Check SSL expiration:
```bash
certbot certificates
```

### Renew SSL certificates manually:
```bash
certbot renew --force-renewal
```

## Troubleshooting

### Domain not resolving?
```bash
nslookup shrestharoshna.com
# Should show YOUR_SERVER_IP
```

### SSL certificate issues?
```bash
certbot certificates
certbot delete --cert-name shrestharoshna.com
# Then regenerate following Step 4
```

### Container won't start?
```bash
docker-compose down
docker-compose logs
```

### Port 80/443 already in use?
```bash
sudo lsof -i :80
sudo lsof -i :443
# Kill the process and retry
```

### Nginx config errors?
```bash
docker-compose exec nginx nginx -t
```

## Performance & Security Checklist

- ✅ SSL/HTTPS configured
- ✅ HTTP redirects to HTTPS
- ✅ Security headers enabled
- ✅ Gzip compression enabled
- ✅ Docker health checks enabled
- ✅ Auto-restart on failure enabled
- ✅ Firewall configured
- ✅ Auto-renewal for SSL setup

## Useful Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Rebuild (after code changes)
docker-compose up --build -d

# View all logs
docker-compose logs -f

# Restart nginx
docker-compose restart nginx

# SSH into Next.js container
docker-compose exec web sh

# Check system resources
docker stats
```

## Additional Resources

- Let's Encrypt: https://letsencrypt.org/
- Docker: https://docs.docker.com/
- Next.js: https://nextjs.org/docs/
- Nginx: https://nginx.org/en/docs/

---

**Support:** If you encounter issues, check the logs first:
```bash
docker-compose logs -f
```

Most issues are in the logs!
