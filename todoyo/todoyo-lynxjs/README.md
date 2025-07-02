## Rspeedy project

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

### Architecture Lynx

Allora ho bisogno di struttirare un progetto react rispettando la clean architecture e deve essere solo visualizzazione mobile

Modifica

Architettato progetto React mobile seguendo principi Clean Architecture.

2s

Certo, ti aiuterò a strutturare un progetto React seguendo i principi della Clean Architecture, ottimizzato solo per la visualizzazione mobile.

Ecco una struttura che rispetta questi requisiti:

## Struttura Clean Architecture

src/
├── core/ # Dominio dell'applicazione
│ ├── entities/ # Modelli di business
│ ├── useCases/ # Casi d'uso dell'applicazione
│ └── repositories/ # Interfacce per l'accesso ai dati
├── data/ # Implementazione dati
│ ├── repositories/ # Implementazione concreta dei repository
│ ├── datasources/ # Sorgenti dati (API, localStorage, etc.)
│ └── mappers/ # Convertitori tra modelli API e entità di dominio
├── presentation/ # UI Layer
│ ├── pages/ # Componenti pagina
│ ├── components/ # Componenti UI riutilizzabili
│ │ ├── common/ # Componenti comuni (Button, Input, etc.)
│ │ ├── layout/ # Componenti layout (Header, Footer, etc.)
│ │ └── specific/ # Componenti specifici per feature
│ ├── hooks/ # Custom hooks
│ ├── context/ # Context API per lo stato globale
│ └── styles/ # Stili CSS/SCSS globali
├── infrastructure/ # Configurazioni e servizi esterni
│ ├── api/ # Configurazione API
│ ├── storage/ # Servizi di storage (localStorage, etc.)
│ └── navigation/ # Configurazione routing
├── utils/ # Utilità e helper functions
├── constants/ # Costanti dell'applicazione
└── App.js # Componente root dell'applicazione

## Run project

### Development

```bash
npm run dev
```
