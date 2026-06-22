# Quick Deploy Guide for www.shrestharoshna.com.np

Your domain is already set up! Here's what to do next:

## 📋 Pre-Deployment Checklist

Before deploying, verify your domain is pointing to your server:

```bash
nslookup www.shrestharoshna.com.np
# Should show your server IP
```

If it shows your nameserver IP, you're ready!

## 🚀 Deploy in 3 Steps

### Step 1: SSH into Your Server
```bash
ssh root@YOUR_SERVER_IP
# or if you have a different user:
ssh user@YOUR_SERVER_IP
```

### Step 2: Install Docker & Clone Project
```bash
# Install Docker
curl -fsSL https://get.docker.com | sh

# Clone your portfolio
cd /opt
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Step 3: Generate SSL Certificate & Deploy
```bash
# Install Certbot
apt install -y certbot

# Generate SSL certificate (IMPORTANT: domain must be pointing to this IP)
certbot certonly --standalone \
  -d www.shrestharoshna.com.np \
  -d shrestharoshna.com.np \
  --agree-tos \
  --no-eff-email \
  -m your-email@gmail.com

# Deploy your portfolio!
docker-compose up -d --build
```

## ✅ Verify It's Live

Visit these URLs in your browser:
- https://www.shrestharoshna.com.np ✅
- https://shrestharoshna.com.np ✅

Both should show your portfolio!

## 📊 Check Status

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Check system resources
docker stats
```

## 🔄 Update Your Portfolio

After making changes locally:

```bash
# Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main

# On server
cd /opt/portfolio
git pull origin main
docker-compose up --build -d

# Done! Changes live in seconds
```

## ⚠️ Troubleshooting

### Domain not working?
```bash
# Check if domain resolves to your IP
nslookup www.shrestharoshna.com.np

# Check if containers are running
docker-compose ps

# Check logs for errors
docker-compose logs
```

### SSL certificate error?
```bash
# Verify domain is pointing to this server first!
nslookup www.shrestharoshna.com.np

# Then regenerate:
certbot delete --cert-name shrestharoshna.com.np
certbot certonly --standalone \
  -d www.shrestharoshna.com.np \
  -d shrestharoshna.com.np
```

### Port already in use?
```bash
# Find process using port 80 or 443
sudo lsof -i :80
sudo lsof -i :443

# Kill it and restart
docker-compose restart nginx
```

## 🛠️ Useful Commands

```bash
# Start/Stop/Restart
docker-compose up -d
docker-compose down
docker-compose restart

# Logs
docker-compose logs -f web
docker-compose logs -f nginx

# Shell access
docker-compose exec web sh

# Check certificate expiration
certbot certificates
```

## 📅 SSL Auto-Renewal

Certbot auto-renewal is already configured. To verify:

```bash
certbot renew --dry-run
```

---

**That's it!** Your portfolio will be live at https://www.shrestharoshna.com.np 🎉

If you run into issues, check the logs first:
```bash
docker-compose logs -f
```
