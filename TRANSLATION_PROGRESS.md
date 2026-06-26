# Progresso da Tradução PT-BR — TGStation BR

## Status Geral

- **Fase atual:** Fase 2 (Tradução de UI) em andamento
- **Strings traduzidas:** ~480 (UI base + VotePanel/Vending/Cargo/Crafting + PDA/Messenger + PreferencesMenu + apps NtOS + PowerMonitor/Signaler/StationAlertConsole/JobManager/AccessList)
- **Total estimado:** ~10.000-15.000 strings

## Progresso por Fase

> Estimativas aproximadas. A Fase 2 é medida por **arquivos de interface tgui com i18n aplicado** (43 de 754 ≈ 6%). A cobertura por "uso real" é maior, pois priorizamos as interfaces de maior visibilidade (inputs, votação, vending, cargo, crafting, PDA, preferências).

| Fase | Escopo | Concluído | Restante |
|---|---|---|---|
| **Fase 1 — Infraestrutura** | Sistema i18n (DM + TGUI), preferência de idioma, loader, hook | **100%** | **0%** |
| **Fase 2 — Tradução de UI** | Interfaces tgui (43/754 arquivos) + JSONs DM (ui/balloon/jobs/chat) | **~6%** | **~94%** |
| **Fase 3 — Gameplay** | Nomes/descrições de itens, `to_chat`/`visible_message`, examine, flavor text | **0%** | **100%** |

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
| `tgui/packages/tgui/i18n/locales/pt-br.json` | ~462 | Completo (base + inputs + votação + vending + cargo + crafting + PDA/messenger + preferências + apps NtOS + records/manifest/netmonitor/card/status + power/signaler/alertas/jobmanager/access) |

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
| `tgui/packages/tgui/interfaces/PreferencesMenu/` | Parcial | Navegação/chrome — abas de personagem/jogo, perfis, controles do editor, busca, categorias de prefs de jogo, popup de exclusão e nomes alternativos. **Rótulos individuais de cada preferência (`feature.name`) ficam em inglês (lote futuro).** |
| `tgui/packages/tgui/interfaces/NtosNotepad.tsx` | Completo | App de bloco de notas do PDA — barra de menus (Arquivo/Editar/Formatar/Exibir/Ajuda + itens), barra de status, diálogo "Sobre", popup de alterações não salvas. Branding/versão (NtOS, NT Corporation) mantidos em inglês |
| `tgui/packages/tgui/interfaces/NtosNetDownloader.tsx` | Completo | App de download de programas — disco rígido, busca, progresso, botões de estado (Instalado/Incompatível/Sem Acesso/Sem Espaço), aviso de fonte não verificada. Categorias via `t(category)` |
| `tgui/packages/tgui/interfaces/NtosFileManager.tsx` | Completo | Gerenciador de arquivos do PDA — diálogo de impressão (formatos, deslocamentos), tabela de arquivos (cabeçalhos, tooltips de ação), seção "Disco de Dados" |
| `tgui/packages/tgui/interfaces/NtosCrewManifest.jsx` | Completo | Manifesto da tripulação — título + botão "Imprimir". Nomes de departamento/tripulantes vêm do servidor (inglês) |
| `tgui/packages/tgui/interfaces/NtosNetMonitor.jsx` | Completo | Monitor de rede NtNet — abas, aviso de transmissores, conectividade sem fio, sistemas de segurança (IDS), log do sistema, página de tablets |
| `tgui/packages/tgui/interfaces/NtosRecords.jsx` | Completo | Registros de pessoal (segurança/médico) — cabeçalho, filtro e rótulos de campo (Cargo, Tipo Sanguíneo, Status Criminal, etc.). Valores dos registros vêm do servidor (inglês) |
| `tgui/packages/tgui/interfaces/NtosCard.tsx` | Parcial | Console de ID do PDA — login/inserir ID, detalhes (nome/idade/cargo), modelos, impressão, encerrar contrato. **`AccessList` (componente compartilhado de acessos) ainda em inglês — lote futuro.** |
| `tgui/packages/tgui/interfaces/common/StatusDisplayControls.tsx` | Completo | Controles de display de status (compartilhado por `NtosStatus` e `CommunicationsConsole/ChangingStatus`) — botões de imagem (Logo, Risco Biológico, Radiação), mensagem e envio |
| `tgui/packages/tgui/interfaces/common/AccessList.jsx` | Completo | Lista de acessos (compartilhado por `NtosCard`, `IdentificationComputer` e consoles de ID) — título "Acessos". Regiões/acessos e `trim`/wildcards vêm do servidor (inglês) |
| `tgui/packages/tgui/interfaces/PowerMonitor.tsx` | Completo | Monitor de energia (compartilhado por `NtosPowerMonitor` + console standalone) — fornecimento/consumo, ordenação, tabela de áreas (carga, tooltips Eqp/Lgt/Env), status On/Off |
| `tgui/packages/tgui/interfaces/Signaler.tsx` | Completo | Sinalizador (compartilhado por `NtosSignaler` + dispositivo standalone) — frequência, código, reset, enviar sinal, tooltip de tempo de espera |
| `tgui/packages/tgui/interfaces/StationAlertConsole.jsx` | Completo | Console de alertas da estação (compartilhado por `NtosStationAlertConsole` + console standalone) — títulos por categoria (Fogo/Atmosfera/Energia/Arrombamento/Movimento/Câmera), "Sistemas normais", contadores de fontes/câmeras |
| `tgui/packages/tgui/interfaces/NtosJobManager.jsx` | Completo | Gerenciador de vagas de cargo do PDA — aviso de acesso, tempo de espera, cabeçalhos (Priorizado/Vagas), botões Abrir/Fechar. Nomes de cargo vêm do servidor (inglês) |

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
- [x] PreferencesMenu — navegação/chrome (abas, perfis, editor de personagem, busca, categorias de prefs)
- [ ] PreferencesMenu — rótulos individuais de cada preferência (`feature.name`/descrições) e antagonistas
- [x] Apps NtOS — Notepad, NetDownloader, FileManager (utilitários principais)
- [x] Apps NtOS — Records, Crew Manifest, NetMonitor, Card, Status (consoles de informação/ID)
- [x] Componentes compartilhados — AccessList, PowerMonitor, Signaler, StationAlertConsole (NtOS + máquinas standalone) + NtosJobManager
- [ ] Demais apps NtOS (Newscaster, Radar, RoboControl, SpaceBetting, GasAnalyzer, etc.)
- [ ] Balloon alerts — aplicar `T()` nos mais comuns
- [ ] Job display names — aplicar nos contextos de display

> **Nota sobre categorias de vending (`Vending.tsx`):** os nomes de categoria vêm do servidor (`product_categories`). São exibidos via `t(name)` — as universais (`Contraband`, `Premium`) e genéricas comuns estão em `pt-br.json`; nomes sem tradução caem no fallback (inglês). A chave de cor `CATEGORY_COLORS` e a seleção continuam usando o `name` original em inglês.
>
> **Colisão de chave resolvida (`Vote`):** "Vote" (botão) → "Votar"; o rótulo por opção usa a chave distinta `"{name} Vote"` → "Votação de {name}", evitando conflito de tradução para a mesma palavra.

> **Nota sobre `tgui_input` (DM):** os títulos default (`"Select"`, `"Text Input"`, `"Number Input"`, `"Key Input"`) vêm dos procs em `code/modules/tgui_input/*.dm`, mas são traduzidos no **frontend** via `t(title)` — sem modificar o DM, mantendo merge-friendly. As chaves correspondentes estão em `pt-br.json`.

> **Nota sobre `Cargo/`:** todos os 7 arquivos do diretório usam `useTranslation()`. O título da aba (`Section`) é traduzido via `t(toTitleCase(tab))` (chaves `Catalog`/`Active Requests`/`Cart`/`Help`). Termos SS13 mantidos em inglês dentro de frases traduzidas: **shuttle, cargo, CentCom, PDA, MULE/MULEbot, QM, disposals**. O texto longo de ajuda (`CargoHelp.tsx`) teve as constantes `ORDER_TEXT`/`DISPOSAL_TEXT` normalizadas para uma única linha (HTML colapsa espaços) e é traduzido via `t(CONST)`; os passos numerados mantêm as **referências literais de menu** (`Delivery Bot Control`, `Scan for Active Bots`, etc.) em inglês, pois apontam para apps ainda não traduzidos.

> **Nota sobre `StackCrafting`/`PersonalCrafting`:** traduzida apenas a **interface fixa** — abas (`Category`/`Type`/`Ingredient`/`Material`), botões (`Make`→Fazer, `Craft`→Fabricar, `Cook`→Cozinhar), checkboxes, seções de receita (`Ingredients`/`Materials`/`Catalysts`/`Tools`/`Machinery`/`Structures`/`Steps`) e mensagens. **Nomes de receitas, itens, ingredientes e ferramentas vêm do servidor e ficam em inglês (Fase 3).** As **categorias** (left-nav e filtros de culinária) são exibidas via `t(category)` — as chaves correspondem exatamente aos `#define CAT_*`/`CUISINE_*`/`DISH_*`/`MEAL_*` em `code/__DEFINES/crafting.dm`; a comparação lógica (`activeCategory === 'Foods'`, cores, ícones) continua usando a string **original em inglês**, então traduzir só o display é seguro. Mantidos em inglês: **`Blood Cult`** (termo de antag), cozinhas de espécie/lore (**Lizard, Martian, Mothic**) e nomes idênticos em PT (Pizza, Sushi, Taco, Burrito, Tribal). Pluralização de "sheet"/"sheets" feita com duas chaves (`{count} sheet`/`{count} sheets`).

> **Nota sobre `NtosMain`/`NtosMessenger` (PDA):** traduzida a **interface fixa** do PDA — menu principal, seção "Details", lista de "Programs", e todo o app SpaceMessenger (contatos, busca, conversa, anexos, dimmers de erro). **Nomes/descrições de apps (`app.desc`, `program.desc`), nível de alerta (`alert_name`), nomes e cargos vêm do servidor e ficam em inglês (Fase 3).** Mantidos em inglês: marcas/versões (**SpaceMessenger V6.5.x**, **NtOS**, **Syndix**), siglas (**PDA, ID, pAI, NT**). `ChatScreen.tsx` é um **componente de classe** (React `Component`), então usa a função autônoma `import { t } from '../../i18n'` em vez do hook `useTranslation()` — `t()` lê o locale do `store` em tempo de render e o full update do servidor já re-renderiza a árvore ao trocar de idioma. Pluralização de "unread message(s)" feita com duas chaves; botões alternados (`Ringer: On/Off`, `Send / Receive`, `Sort by: {mode}`, `Attach Virus: {state}`) usam chaves separadas ou interpolação.

> **Nota sobre `PreferencesMenu/`:** traduzido o **chrome/navegação** (alta visibilidade — todo jogador passa por aqui): abas de Personagem (`Character`, `Occupations`, `Antagonists`, `Quirks and Personality`) e de Jogo (`Settings`, `Keybindings`), perfis de personagem (`New Character`), controles do editor (tooltips `Rotate`/`Species`/`Gender`/`Delete Character`), busca de aparência (`Select {name}`), popup de exclusão (`DeleteCharacterPopup`) e nomes alternativos (`names.tsx`). **As categorias de preferências de jogo (`feature.category`) são exibidas via `t(category)` no `TabbedMenu`** — só os rótulos de exibição (botão de aba e título da `Section`); as chaves de `categoryRefs`/`key` continuam usando a string **original em inglês** (igual ao padrão de Vending). Categorias traduzidas: `ACCESSIBILITY`→ACESSIBILIDADE, `GAMEPLAY`→JOGABILIDADE, `SOUND`→SOM, `TOOLTIPS`→DICAS; mantidas em inglês (fallback automático, sem chave): `ADMIN`, `CHAT`, `GHOST`, `RUNECHAT`, `UI`. **Os rótulos individuais de cada preferência (`feature.name`) e descrições — definidos nos arquivos TS de `preferences/features/*` — ainda ficam em inglês**, assim como `Loadout` e `Quirks` (termos de jogo). O `title` em `PreferencesMenu/index.tsx` é código morto (não renderizado), então não foi tocado.

> **Nota sobre apps NtOS (`NtosNotepad`/`NtosNetDownloader`/`NtosFileManager`):** traduzida a **interface fixa** de três utilitários principais do PDA. Todos usam o hook `useTranslation()` — incluindo subcomponentes (`NtosNotepadMenuBar`, `StatusBar`, `AboutDialog`, `Program`, `FileTable`, `PrintDialog`), que chamam o hook individualmente. **Notepad:** barra de menus estilo Windows (`File`→Arquivo, `Edit`→Editar, `Format`→Formatar, `View`→Exibir, `Help`→Ajuda) e itens (`New`/`Cut`/`Copy`/`Paste`/`Word Wrap`/`Status Bar`); o `value` interno (`'new'`, `'cut'`, etc.) continua em inglês — só o `displayText` é traduzido. O `PartiallyUnderlined` (sublinhado decorativo de atalho) é cosmético, então traduzir o texto é seguro. `Untitled`→"Sem título" via `t(documentName)`; o nome da app **Notepad** e branding (NtOS, NT Corporation, versão) ficam em inglês. **NetDownloader:** as categorias (`#define PROGRAM_CATEGORY_*` em `code/__DEFINES/modular_computer.dm`) vêm do servidor e são exibidas via `t(category)` — a comparação lógica (`category === selectedCategory`) usa o `name` original; chaves adicionadas: `Device Tools`, `Games`, `Security & Records`, `Engineering`, `Supply`, `Science` (`Equipment` já existia). **FileManager:** `displayText` dos formatos de impressão e `file.type` vêm do servidor (inglês). Strings interpoladas (`Ln {line}, Col {column}`, `{free} GQ free of {total} GQ`, `Downloading: {name}.prg ({percent}%)`) passam parâmetros como string via `String(...)`. **Nomes/descrições de programas (`filedesc`/`fileinfo`) vêm do servidor e ficam em inglês (Fase 3).**

> **Nota sobre componentes compartilhados (`AccessList`/`PowerMonitor`/`Signaler`/`StationAlertConsole`) e `NtosJobManager`:** lote focado em componentes **reutilizados** — cada um é a base tanto do app NtOS quanto da máquina/console standalone (ex.: `PowerMonitor` serve `NtosPowerMonitor` e o monitor de energia físico; `AccessList` serve `NtosCard`, o computador de ID e demais consoles de acesso). Traduzir uma vez beneficia ambos. Todos usam o hook `useTranslation()` em cada subcomponente. **AccessList:** só o título "Acessos"; regiões, nomes de acesso, `trim` e `wildcards` vêm do servidor/são mecânicas (inglês). **PowerMonitor:** fornecimento/consumo (`Supply`/`Draw`), ordenação, cabeçalhos de tabela; abreviações de coluna `Eqp`/`Lgt`/`Env` mantidas (tooltips traduzidos); `area.name` do servidor; `auto`/`manual` idênticos em PT. **Signaler:** frequência/código/sinal; tooltip de tempo de espera interpolado. **StationAlertConsole:** os nomes de categoria (`Fire`/`Atmosphere`/`Power`/`Burglar`/`Motion`/`Camera`) são um **enum fixo do console** e foram traduzidos via `t(category.name)` aninhado em `t('{category} Alarms', ...)` → "Alarmes de Fogo"; a lógica de ordenação (`sortingKey`) continua usando o nome **original em inglês**. Pluralização de "Camera/Cameras" e contagem de "sources" feitas com chaves/params. **NtosJobManager:** aviso de acesso, tempo de espera, cabeçalhos e botões Abrir/Fechar; `slot.title` (nome do cargo) vem do servidor (inglês).

> **Nota sobre apps NtOS de informação (`NtosCrewManifest`/`NtosNetMonitor`/`NtosRecords`/`NtosCard`) e `StatusDisplayControls`:** segundo lote de apps do PDA, traduzida a **interface fixa**. Todos usam o hook `useTranslation()`, inclusive subcomponentes (`MainPage`/`TabletPage` em NetMonitor; `LoginPage`/`IdCardPage`/`TemplateDropdown` em Card), que chamam o hook individualmente. **CrewManifest:** só título e botão; nomes de departamento/tripulantes e cargos vêm do servidor (inglês). **NetMonitor:** abas (`NtNet`/`Tablets` mantidos — termos de marca/empréstimo), avisos, conectividade, sistemas de segurança e log; `relay.name`/`tablet.name`/`log.entry` vêm do servidor. `ENABLED`/`DISABLED` em maiúsculas usam chaves próprias (distintas de `Enabled`/`Disabled`). **Records:** cabeçalho, filtro e **rótulos de campo** traduzidos via `{t('Rank')}: {value}` (label traduzido, valor do servidor em inglês); `DELETED` como fallback de status criminal. **Card:** parcial — login/inserção de ID, detalhes, modelos, impressão e "Encerrar Contrato"; o componente compartilhado **`AccessList`** (regiões/acessos, usado por vários consoles de segurança) **fica em inglês** e merece lote próprio; `trim`, `ID Painter` e `wildcards` mantidos em inglês (mecânicas/itens). **StatusDisplayControls** é **compartilhado** por `NtosStatus` e `CommunicationsConsole/ChangingStatus` — traduzir uma vez beneficia ambos; mantidos em inglês: `Logo` (idêntico) e `Lockdown` (jargão de estação, como `shuttle`).

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
