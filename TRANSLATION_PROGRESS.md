# Progresso da Tradução PT-BR — TGStation BR

## Status Geral

- **Fase atual:** Fase 1 (Infraestrutura) + início Fase 2 (UI)
- **Strings traduzidas:** ~120 (estimativa inicial)
- **Total estimado:** ~10.000-15.000 strings

## Infraestrutura

| Componente | Status | Arquivo |
|---|---|---|
| Sistema i18n DM (servidor) | Completo | `code/modules/i18n/i18n.dm` |
| Integração TGUI payload | Completo | `code/modules/tgui/tgui.dm` (campo `locale` no config) |
| Sistema i18n TGUI (React) | Completo | `tgui/packages/tgui/i18n/` |
| Loader de locale TGUI | Completo | `tgui/packages/tgui/i18n/loader.ts` |
| Hook useTranslation | Completo | `tgui/packages/tgui/i18n/useTranslation.ts` |
| Tipo Config atualizado | Completo | `tgui/packages/tgui/events/types.ts` |
| Handler update integrado | Completo | `tgui/packages/tgui/events/handlers/update.ts` |
| Include no .dme | Completo | `tgstation.dme` |

## Arquivos de Tradução (JSON)

| Arquivo | Strings | Status |
|---|---|---|
| `strings/translations/pt-br/ui.json` | ~55 | Completo (strings base UI) |
| `strings/translations/pt-br/balloon.json` | ~47 | Completo (balloon alerts comuns) |
| `strings/translations/pt-br/jobs_display.json` | ~43 | Completo (jobs principais) |
| `strings/translations/pt-br/chat.json` | ~13 | Parcial (mensagens básicas) |
| `tgui/packages/tgui/i18n/locales/pt-br.json` | ~80 | Completo (strings base frontend) |

## Arquivos Traduzidos (Prova de Conceito)

| Arquivo | Status | Notas |
|---|---|---|
| `code/modules/escape_menu/home_page.dm` | Completo | 7 botões principais + recursos |

## Decisões de Design

### Termos mantidos em inglês
- **Siglas:** AI, HoS, HoP, CMO, CE, RD, QM, PDA, ID, ERT, CentCom, NanoTrasen, EMP, DNA, SM, APC, SMES
- **Termos SS13:** shuttle, robust, grief/griefer, traitor, changeling, heretic, blob, revenant, cult, wizard, syndicate, nuke ops, antag, admin, deadchat, ghost, gibbed, airlock, EVA, maint, medbay, brig, permabrig, sec, engi, atmos, cargo, bridge, escape

### Padrões adotados
- Chave de tradução = string original em inglês
- Fallback automático para inglês quando tradução não existe
- Locale padrão do servidor: `pt-br`
- Jobs mantêm `#define` original (chaves de DB), tradução é apenas display
- DM usa `T(key, locale)` e `client_T(client, key)`
- TGUI usa `t(key)` e hook `useTranslation()`

## Próximos Passos

### Fase 2 — Tradução de UI (prioridade)
- [ ] AlertModal.tsx — traduzir botões via `useTranslation()`
- [ ] Interfaces TGUI mais usadas (PreferencesMenu, VotePanel, etc.)
- [ ] `code/modules/tgui_input/` — inputs e alertas do servidor
- [ ] Balloon alerts — aplicar `T()` nos mais comuns
- [ ] Job display names — aplicar nos contextos de display

### Fase 3 — Gameplay
- [ ] Nomes e descrições de itens
- [ ] Mensagens `to_chat()` e `visible_message()`
- [ ] Texto de examine
- [ ] Flavor text (`strings/*.json`, `strings/*.txt`)

## Como Usar

### No código DM (servidor):
```dm
// Tradução simples
T("Resume", client.i18n_locale)

// Via client helper
client_T(client, "Settings")

// Com parâmetros
T_format("You pick up {1}", locale, item.name)
```

### No TGUI (React/TypeScript):
```tsx
import { t } from 'tgui/i18n';
// ou
import { useTranslation } from 'tgui/i18n/useTranslation';

// Função direta
<Button>{t('Cancel')}</Button>

// Hook em componentes
const { t } = useTranslation();
<Button>{t('Settings')}</Button>
```
