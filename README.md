# Vectra / Corsa OS — Retro Infotainment MVP

Protótipo React inspirado no visual âmbar retrô dos Chevrolet/Opel dos anos 90/2000, com referência visual nas telas criadas durante o planejamento.

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço mostrado pelo Vite.

## Resolução base

O layout foi pensado para **1280x720**, ideal para prototipação de centrais multimídia entre 7 e 9 polegadas.

## Estrutura

```txt
src/
 ├─ components/
 │   ├─ BootScreen.jsx
 │   ├─ BottomStatus.jsx
 │   ├─ MainCard.jsx
 │   ├─ Sidebar.jsx
 │   └─ TopBar.jsx
 │
 ├─ screens/
 │   ├─ Apps.jsx
 │   ├─ BoardComputer.jsx
 │   ├─ Home.jsx
 │   ├─ Mirror.jsx
 │   ├─ Music.jsx
 │   ├─ Navigation.jsx
 │   ├─ Phone.jsx
 │   ├─ Radio.jsx
 │   └─ Settings.jsx
 │
 ├─ data/
 │   └─ menu.js
 │
 ├─ styles/
 │   └─ global.css
 │
 ├─ App.jsx
 └─ main.jsx
```

## Próximos passos

- Adaptar o logo para Corsa OS, Vectra OS ou MyLink Heritage.
- Criar animações mais reais de boot.
- Integrar com APIs simuladas.
- Transformar em PWA.
- Testar em uma central Android ou Raspberry Pi.
