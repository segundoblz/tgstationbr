# Progresso da Tradução PT-BR — TGStation BR

## Status Geral

- **Fase atual:** Fase 2 (Tradução de UI) em andamento
- **Strings traduzidas:** ~345 (UI base + VotePanel/Vending/Cargo/Crafting + PDA/Messenger)
- **Total estimado:** ~10.000-15.000 strings

## Infraestrutura

| Componente | Status | Arquivo |
|---|---|---|
| Sistema i18n DM (servidor) | Completo | `code/modules/i18n/i18n.dm` |
| Preferência de idioma do jogador | Completo | `code/modules/client/preferences/ui_locale.dm` |
| Integração TGUI payload | Completo | `code/modules/tgui/tgui.dm` (campo `locale` no config) |
| Sistema i18n TGUI (React) | Completo | `tgui/packages/tgui/i18n/` |
| Loader de locale TGUI | Completo | `tgui/packages/tgui/i18n/loader.ts` |
| Hook useTranslation | Completo | `tgui/packages/tgui/i18n/useTranslation.ts` |
| Tipo Config atualizado | Completo | `tgui/packages/tgui/events/types.ts` |
| Handler update integrado | Completo | `tgui/packages/tgui/events/handlers/update.ts` |
| Include no .dme | Completo | `tgstation.dme` (i18n + ui_locale) |

## Arquivos de Tradução (JSON)

| Arquivo | Strings | Status |
|---|---|---|
| `strings/translations/pt-br/ui.json` | ~55 | Completo (strings base UI) |
| `strings/translations/pt-br/balloon.json` | ~47 | Completo (balloon alerts comuns) |
| `strings/translations/pt-br/jobs_display.json` | ~43 | Completo (jobs principais) |
| `strings/translations/pt-br/chat.json` | ~13 | Parcial (mensagens básicas) |
| `tgui/packages/tgui/i18n/locales/pt-br.json` | ~321 | Completo (base + inputs + votação + vending + cargo + crafting + PDA/messenger) |

## Arquivos Traduzidos

| Arquivo | Status | Notas |
|---|---|---|
| `code/modules/escape_menu/home_page.dm` | Completo | 7 botões principais + recursos |
| `tgui/packages/tgui/interfaces/AlertModal.tsx` | Completo | Botões + título via `useTranslation()`; envia string original no `act()` |
| `tgui/packages/tgui/interfaces/common/InputButtons.tsx` | Completo | Submit/Cancel — **compartilhado** por todos os modais de input |
| `tgui/packages/tgui/interfaces/TextInputModal.tsx` | Completo | placeholder + título |
| `tgui/packages/tgui/interfaces/NumberInputModal.tsx` | Completo | tooltips Min/Max/Reset (interpolados) + título |
| `tgui/packages/tgui/interfaces/KeyComboModal.tsx` | Completo | "Awaiting input..." + título |
| `tgui/packages/tgui/interfaces/CheckboxInput.tsx` | Completo | Min/Max + busca + título |
| `tgui/packages/tgui/interfaces/ListInputWindow/` | Completo | placeholder + tooltips de modo + título |
| `tgui/packages/tgui/interfaces/VotePanel.tsx` | Completo | Painel de votação — títulos, botões, avisos, contadores (interpolados) |
| `tgui/packages/tgui/interfaces/Vending.tsx` | Completo | Vendomatos — título, busca, preço (GRÁTIS), estoque, categorias via `t(name)` |
| `tgui/packages/tgui/interfaces/Cargo/` | Completo | Console de cargo (7 arquivos) — abas, status, carrinho, pedidos, catálogo e ajuda completa |
| `tgui/packages/tgui/interfaces/StackCrafting.tsx` | Completo | Construção a partir de pilhas de material — título, busca, "folha(s)" (plural), multiplicadores |
| `tgui/packages/tgui/interfaces/PersonalCrafting/` | Completo | Menu de fabricação/culinária (index + 2 de content) — abas, filtros, categorias, botões, seções de receita e ajuda |
| `tgui/packages/tgui/interfaces/NtosMain.tsx` | Completo | Tela inicial do PDA/NtOS — menu principal, detalhes da ID, seção pAI, lista de programas |
| `tgui/packages/tgui/interfaces/NtosMessenger/` | Completo | App de mensagens do PDA (index + ChatScreen) — contatos, busca, conversas, anexos, "enviar para todos", dimmers |

## Decisões de Design

### Termos mantidos em inglês
- **Siglas:** AI, HoS, HoP, CMO, CE, RD, QM, PDA, ID, ERT, CentCom, NanoTrasen, EMP, DNA, SM, APC, SMES
- **Termos SS13:** shuttle, robust, grief/griefer, traitor, changeling, heretic, blob, revenant, cult, wizard, syndicate, nuke ops, antag, admin, deadchat, ghost, gibbed, airlock, EVA, maint, medbay, brig, permabrig, sec, engi, atmos, cargo, bridge, escape

### Padrões adotados
- Chave de tradução = string original em inglês
- Fallback automático para inglês quando tradução não existe
- Locale padrão do servidor: `pt-br` (jogador pode trocar para `en` nas Preferências do Jogo)
- Jobs mantêm `#define` original (chaves de DB), tradução é apenas display
- DM usa `T(key, locale)` e `client_T(client, key)`
- TGUI usa `t(key)` e hook `useTranslation()`
- **Importante (TGUI):** ao traduzir botões/ações, exibir `t(valor)` mas enviar o **valor original** em inglês no `act()` — o servidor compara contra a string original. Ver `AlertModal.tsx` como referência.
- A preferência `ui_locale` aplica via `apply_to_client()`: seta `client.i18n_locale`, chama `load_translations()` e faz `send_full_update()` nas TGUIs abertas

## Próximos Passos

### Fase 2 — Tradução de UI (prioridade)
- [x] AlertModal.tsx — traduzir botões via `useTranslation()`
- [x] `tgui_input` (frontend) — todos os modais: text, number, keycombo, checkbox, list + InputButtons compartilhado
- [x] VotePanel.tsx — painel de votação (alta visibilidade, todos os jogadores)
- [x] Vending.tsx — vendomatos (uso constante na rodada)
- [x] Cargo/ — console de cargo completo (catálogo, carrinho, pedidos, status, ajuda)
- [x] StackCrafting.tsx — construção a partir de pilhas de material
- [x] PersonalCrafting/ — menu de fabricação e culinária (alta visibilidade)
- [x] NtOS/PDA — tela inicial (`NtosMain`) + app de mensagens (`NtosMessenger`)
- [ ] PreferencesMenu — menu de preferências de personagem/jogo (alta visibilidade)
- [ ] Demais apps NtOS (Notepad, NetDownloader, Records, etc.)
- [ ] Balloon alerts — aplicar `T()` nos mais comuns
- [ ] Job display names — aplicar nos contextos de display

> **Nota sobre categorias de vending (`Vending.tsx`):** os nomes de categoria vêm do servidor (`product_categories`). São exibidos via `t(name)` — as universais (`Contraband`, `Premium`) e genéricas comuns estão em `pt-br.json`; nomes sem tradução caem no fallback (inglês). A chave de cor `CATEGORY_COLORS` e a seleção continuam usando o `name` original em inglês.
>
> **Colisão de chave resolvida (`Vote`):** "Vote" (botão) → "Votar"; o rótulo por opção usa a chave distinta `"{name} Vote"` → "Votação de {name}", evitando conflito de tradução para a mesma palavra.

> **Nota sobre `tgui_input` (DM):** os títulos default (`"Select"`, `"Text Input"`, `"Number Input"`, `"Key Input"`) vêm dos procs em `code/modules/tgui_input/*.dm`, mas são traduzidos no **frontend** via `t(title)` — sem modificar o DM, mantendo merge-friendly. As chaves correspondentes estão em `pt-br.json`.

> **Nota sobre `Cargo/`:** todos os 7 arquivos do diretório usam `useTranslation()`. O título da aba (`Section`) é traduzido via `t(toTitleCase(tab))` (chaves `Catalog`/`Active Requests`/`Cart`/`Help`). Termos SS13 mantidos em inglês dentro de frases traduzidas: **shuttle, cargo, CentCom, PDA, MULE/MULEbot, QM, disposals**. O texto longo de ajuda (`CargoHelp.tsx`) teve as constantes `ORDER_TEXT`/`DISPOSAL_TEXT` normalizadas para uma única linha (HTML colapsa espaços) e é traduzido via `t(CONST)`; os passos numerados mantêm as **referências literais de menu** (`Delivery Bot Control`, `Scan for Active Bots`, etc.) em inglês, pois apontam para apps ainda não traduzidos.

> **Nota sobre `StackCrafting`/`PersonalCrafting`:** traduzida apenas a **interface fixa** — abas (`Category`/`Type`/`Ingredient`/`Material`), botões (`Make`→Fazer, `Craft`→Fabricar, `Cook`→Cozinhar), checkboxes, seções de receita (`Ingredients`/`Materials`/`Catalysts`/`Tools`/`Machinery`/`Structures`/`Steps`) e mensagens. **Nomes de receitas, itens, ingredientes e ferramentas vêm do servidor e ficam em inglês (Fase 3).** As **categorias** (left-nav e filtros de culinária) são exibidas via `t(category)` — as chaves correspondem exatamente aos `#define CAT_*`/`CUISINE_*`/`DISH_*`/`MEAL_*` em `code/__DEFINES/crafting.dm`; a comparação lógica (`activeCategory === 'Foods'`, cores, ícones) continua usando a string **original em inglês**, então traduzir só o display é seguro. Mantidos em inglês: **`Blood Cult`** (termo de antag), cozinhas de espécie/lore (**Lizard, Martian, Mothic**) e nomes idênticos em PT (Pizza, Sushi, Taco, Burrito, Tribal). Pluralização de "sheet"/"sheets" feita com duas chaves (`{count} sheet`/`{count} sheets`).

> **Nota sobre `NtosMain`/`NtosMessenger` (PDA):** traduzida a **interface fixa** do PDA — menu principal, seção "Details", lista de "Programs", e todo o app SpaceMessenger (contatos, busca, conversa, anexos, dimmers de erro). **Nomes/descrições de apps (`app.desc`, `program.desc`), nível de alerta (`alert_name`), nomes e cargos vêm do servidor e ficam em inglês (Fase 3).** Mantidos em inglês: marcas/versões (**SpaceMessenger V6.5.x**, **NtOS**, **Syndix**), siglas (**PDA, ID, pAI, NT**). `ChatScreen.tsx` é um **componente de classe** (React `Component`), então usa a função autônoma `import { t } from '../../i18n'` em vez do hook `useTranslation()` — `t()` lê o locale do `store` em tempo de render e o full update do servidor já re-renderiza a árvore ao trocar de idioma. Pluralização de "unread message(s)" feita com duas chaves; botões alternados (`Ringer: On/Off`, `Send / Receive`, `Sort by: {mode}`, `Attach Virus: {state}`) usam chaves separadas ou interpolação.

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

## Referências

- **Documentação do código (Doxygen):** https://codedocs.tgstation13.org/ — referência de datums, procs e interfaces do TGStation; útil para localizar o que traduzir e entender a estrutura do código.
