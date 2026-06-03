## Objetivo

Substituir o logotipo atual pelo novo logo "PATHOTEC" do manual de marca anexado, mantendo o texto auxiliar "Anatomia Patológica Veterinária" como elemento separado ao lado, como já é hoje.

## Passos

1. **Recortar o logo do manual**
   - Abrir o PNG anexado e recortar a versão horizontal "PATHOTEC" (sem o subtítulo "Laboratório de Anatomia Patológica Veterinária"), com fundo transparente.
   - Recortar também o ícone circular (favicon) em arquivo separado, com fundo transparente.
   - Salvar como PNGs temporários em `/tmp/` e enviá-los como assets via `lovable-assets create`.

2. **Substituir o asset principal**
   - Criar `src/assets/pathotec-logo-v2.png.asset.json` (novo wordmark) e atualizar `src/components/Logo.tsx` para apontar para ele.
   - Remover o asset antigo problemático (`pathotec-logo.svg.asset.json` com fundo branco vetorizado) via `assets--delete_asset`.

3. **Atualizar o favicon**
   - Criar `src/assets/pathotec-icon.png.asset.json` com o ícone redondo.
   - Atualizar `src/routes/__root.tsx` (tag `<link rel="icon">`) para usar o novo ícone.

4. **QA visual**
   - Verificar no preview que o logo aparece nítido, sem fundo branco, em header e rodapé.
   - Conferir favicon na aba.

## Detalhes técnicos

- Recorte feito com Python + Pillow (já disponível no sandbox), aplicando crop nas coordenadas do wordmark "PATHOTEC" e do círculo do ícone, com remoção do fundo branco via canal alpha (threshold).
- Componente `Logo` mantém o `<img>` simples — sem mudanças estruturais, apenas troca da fonte do asset.
- Texto "Anatomia Patológica Veterinária" continua renderizado ao lado do logo via JSX (não embutido na imagem).
