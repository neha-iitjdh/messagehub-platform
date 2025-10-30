const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MessageHub - Distributed Messaging Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .container {
            max-width: 1000px;
            padding: 2rem;
            text-align: center;
            animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .logo {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }
        
        .status-badge {
            display: inline-block;
            background: rgba(76, 175, 80, 0.9);
            padding: 0.7rem 1.5rem;
            border-radius: 30px;
            font-size: 1rem;
            margin: 1.5rem 0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .architecture-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 3rem 0;
        }
        
        .service-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.15);
        }
        
        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            justify-content: center;
            margin: 2.5rem 0;
            padding: 2rem 0;
            border-top: 1px solid rgba(255,255,255,0.2);
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        
        .tech-badge {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(10px);
            padding: 0.6rem 1.2rem;
            border-radius: 20px;
            font-size: 0.95rem;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 3rem;
        }
        
        .btn {
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .btn-primary {
            background: white;
            color: #1e3c72;
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
        }
        
        .btn-secondary {
            background: rgba(255,255,255,0.1);
            color: white;
            border: 2px solid white;
        }
        
        .endpoint-info {
            background: rgba(0,0,0,0.2);
            padding: 2rem;
            border-radius: 15px;
            margin: 2rem 0;
            text-align: left;
        }
        
        .endpoint {
            font-family: 'Courier New', monospace;
            background: rgba(0,0,0,0.3);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin: 0.5rem 0;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            .architecture-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🚀</div>
        <h1>MessageHub</h1>
        <p class="subtitle">Distributed Multi-Channel Messaging Orchestration Platform</p>
        
        <div class="status-badge">
            ⚡ Active Development | Launch: February 2026
        </div>
        
        <p style="font-size: 1.1rem; line-height: 1.8; margin: 2rem auto; max-width: 700px; opacity: 0.9;">
            Enterprise-grade microservices backend ecosystem built with Node.js, featuring 
            event-driven architecture, polyglot persistence, and comprehensive observability.
        </p>
        
        <div class="architecture-grid">
            <div class="service-card">
                <div class="service-icon">🔐</div>
                <h3>Auth Service</h3>
                <p style="font-size: 0.9rem; opacity: 0.9;">JWT + OAuth2 + RBAC</p>
            </div>
            <div class="service-card">
                <div class="service-icon">💬</div>
                <h3>Message Service</h3>
                <p style="font-size: 0.9rem; opacity: 0.9;">Real-time messaging</p>
            </div>
            <div class="service-card">
                <div class="service-icon">📊</div>
                <h3>Analytics Service</h3>
                <p style="font-size: 0.9rem; opacity: 0.9;">Data aggregation</p>
            </div>
            <div class="service-card">
                <div class="service-icon">🔔</div>
                <h3>Notification Service</h3>
                <p style="font-size: 0.9rem; opacity: 0.9;">Multi-channel alerts</p>
            </div>
        </div>
        
        <div class="endpoint-info">
            <h3 style="margin-bottom: 1rem;">🌐 API Endpoints (Coming Soon)</h3>
            <div class="endpoint">GET /api/health - Health check</div>
            <div class="endpoint">GET /api/docs - API documentation</div>
            <div class="endpoint">POST /api/auth/login - Authentication</div>
            <div class="endpoint">WS /api/ws - WebSocket connection</div>
        </div>
        
        <div class="tech-stack">
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">Express</span>
            <span class="tech-badge">NestJS</span>
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">PostgreSQL</span>
            <span class="tech-badge">MongoDB</span>
            <span class="tech-badge">Redis</span>
            <span class="tech-badge">RabbitMQ</span>
            <span class="tech-badge">Kafka</span>
            <span class="tech-badge">Elasticsearch</span>
            <span class="tech-badge">Neo4j</span>
            <span class="tech-badge">GraphQL</span>
            <span class="tech-badge">gRPC</span>
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">Kubernetes</span>
        </div>
        
        <div class="links">
            <a href="https://github.com/neha-iitjdh/messagehub-platform" class="btn btn-primary">
                📁 View on GitHub
            </a>
            <a href="https://github.com/neha-iitjdh/messagehub-platform/tree/main/docs" class="btn btn-secondary">
                📚 Documentation
            </a>
        </div>
        
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.2); opacity: 0.8;">
            <p><strong>Built by Neha Sharma</strong></p>
            <p>M.Tech Computer Science & Engineering, IIT Jodhpur</p>
        </div>
    </div>
</body>
</html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'MessageHub Platform',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    message: 'Coming soon - Active development'
  });
});

app.get('/api/docs', (req, res) => {
  res.json({
    message: 'API Documentation coming soon',
    github: 'https://github.com/neha-iitjdh/messagehub-platform',
    docs: 'https://github.com/neha-iitjdh/messagehub-platform/tree/main/docs'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 MessageHub Platform running on port ${PORT}`);
});
