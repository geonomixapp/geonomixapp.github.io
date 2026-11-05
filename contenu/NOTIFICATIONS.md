# Brancher les notifications de Geonomix

Trois notifications, peu nombreuses, chacune réglable par le lecteur dans sa page Profil :
- ⚔️ « C'est à toi de jouer » / « Ton adversaire a joué » (Duel) ;
- 📉 « X t'a dépassé au classement » (top 20, une par jour au plus) ;
- 🔴 Dernière minute : un fait majeur (une par jour au plus).

Code : `notifs.js` (appli), `sw.js` (affichage), `contenu/supabase-notifier.ts` (envoi),
`contenu/supabase-notifs.sql` (base), `.github/workflows/notif-flash.yml` + `tools/flash-nouvelles.mjs` (Dernière minute).

**Règle de sécurité : aucune clé secrète n'est jamais envoyée à Claude.** Tu les colles toi-même dans Supabase et GitHub.

## 1. Fabriquer les clés (une seule fois)
1. Ouvre https://geonomixapp.github.io/cles-notifs.html et touche « Fabriquer les clés ».
2. Envoie la **clé publique** à Claude (il la met dans `notifs.js`).
3. Garde la page ouverte pour l'étape 2.

## 2. La fonction d'envoi dans Supabase
1. Supabase > ton projet > **Edge Functions** > **Secrets** : ajoute trois secrets
   - `VAPID_PUBLIC_KEY` = la clé publique ;
   - `VAPID_PRIVATE_KEY` = la clé privée ;
   - `NOTIF_SECRET` = un mot de passe long que tu inventes (au moins 30 caractères, lettres et chiffres).
2. **Edge Functions** > **Deploy a new function** > **Via Editor** : nom `notifier`, colle tout le contenu de `contenu/supabase-notifier.ts`, puis **Deploy**.
3. Dans les réglages de la fonction `notifier`, **désactive « Verify JWT »** (elle vérifie elle-même `NOTIF_SECRET`).

## 3. La base
1. **SQL Editor** > New query : colle `contenu/supabase-notifs.sql` > **Run**.
2. Nouvelle requête, une seule ligne (avec TON mot de passe à la place de MOT-DE-PASSE) :
   `select vault.create_secret('MOT-DE-PASSE', 'notif_secret');` > **Run**.

## 4. La Dernière minute (GitHub)
Dépôt geonomixapp/geonomixapp.github.io > **Settings** > **Secrets and variables** > **Actions** > **New repository secret** :
- `NOTIF_URL` = `https://xnwaiyhquydhpcqnovtc.supabase.co/functions/v1/notifier`
- `NOTIF_SECRET` = le même mot de passe qu'à l'étape 2.

## 5. Tester
Sur iPhone/iPad : ajoute le site à l'écran d'accueil, ouvre-le depuis l'icône, Profil > « Activer les notifications ».
Puis joue un duel contre un ami : il doit recevoir « C'est à toi de jouer ».
