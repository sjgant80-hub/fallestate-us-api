// fallestate-us-api · Express HTTP wrapper around fallestate-us-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'fallestate-us', version: '1.0.0' }));

app.get('/', (_req, res) => res.json({ tool: 'fallestate-us', note: 'no callable exports detected' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('fallestate-us-api listening on :' + PORT));
