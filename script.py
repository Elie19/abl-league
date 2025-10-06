#!/usr/bin/env python3
"""
Génère l’arborescence complète d’un projet Next.js (App Router) telle que décrite.
Usage : python create_tree.py
"""

from pathlib import Path
import os

# --------------------------------------------------
# Configuration : racine du projet
# --------------------------------------------------
PROJECT_ROOT = Path.cwd()  # ou Path("mon-projet") pour créer dans un sous-dossier

# --------------------------------------------------
# Arborescence à créer (fichiers vides ou avec un squelette minimal)
# --------------------------------------------------
TREE = {
    # Dossiers contenant un fichier .gitkeep pour être versionnés même vides
    "public/images": [".gitkeep"],

    # Fichiers simples
    "public/logo.svg": "",
    "public/favicon.ico": "",

    "styles/globals.css": "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",

    ".eslintrc.json": "{}\n",
    ".prettierrc": "{\n  \"semi\": true,\n  \"singleQuote\": true,\n  \"tabWidth\": 2\n}\n",
    "tailwind.config.ts": (
        "/** @type {import('tailwindcss').Config} */\n"
        "export default {\n"
        "  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],\n"
        "  theme: {\n"
        "    extend: {},\n"
        "  },\n"
        "  plugins: [],\n"
        "};\n"
    ),
    "tsconfig.json": (
        "{\n"
        '  "compilerOptions": {\n'
        '    "target": "es5",\n'
        '    "lib": ["dom", "dom.iterable", "esnext"],\n'
        '    "allowJs": true,\n'
        '    "skipLibCheck": true,\n'
        '    "strict": true,\n'
        '    "forceConsistentCasingInFileNames": true,\n'
        '    "noEmit": true,\n'
        '    "esModuleInterop": true,\n'
        '    "module": "esnext",\n'
        '    "moduleResolution": "node",\n'
        '    "resolveJsonModule": true,\n'
        '    "isolatedModules": true,\n'
        '    "jsx": "preserve",\n'
        '    "incremental": true,\n'
        '    "plugins": [{ "name": "next" }]\n'
        "  },\n"
        '  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],\n'
        '  "exclude": ["node_modules"]\n'
        "}\n"
    ),
    "package.json": (
        "{\n"
        '  "name": "my-next-app",\n'
        '  "version": "0.1.0",\n'
        '  "private": true,\n'
        '  "scripts": {\n'
        '    "dev": "next dev",\n'
        '    "build": "next build",\n'
        '    "start": "next start",\n'
        '    "lint": "next lint"\n'
        "  },\n"
        '  "dependencies": {\n'
        '    "next": "14",\n'
        '    "react": "^18",\n'
        '    "react-dom": "^18"\n'
        "  },\n"
        '  "devDependencies": {\n'
        '    "@types/node": "^20",\n'
        '    "@types/react": "^18",\n'
        '    "@types/react-dom": "^18",\n'
        '    "autoprefixer": "^10.4.19",\n'
        '    "eslint": "^8",\n'
        '    "eslint-config-next": "14",\n'
        '    "postcss": "^8.4.38",\n'
        '    "tailwindcss": "^3.4.3",\n'
        '    "typescript": "^5"\n'
        "  }\n"
        "}\n"
    ),

    # Pages Next.js
    "app/layout.tsx": (
        "export default function RootLayout({\n"
        "  children,\n"
        "}: {\n"
        "  children: React.ReactNode;\n"
        "}) {\n"
        "  return (\n"
        '    <html lang="fr">\n'
        "      <body>{children}</body>\n"
        "    </html>\n"
        "  );\n"
        "}\n"
    ),
    "app/page.tsx": (
        "export default function HomePage() {\n"
        "  return <h1>Accueil</h1>;\n"
        "}\n"
    ),
    "app/teams/page.tsx": (
        "export default function TeamsPage() {\n"
        "  return <h1>Équipes</h1>;\n"
        "}\n"
    ),
    "app/matches/page.tsx": (
        "export default function MatchesPage() {\n"
        "  return <h1>Matchs</h1>;\n"
        "}\n"
    ),
    "app/standings/page.tsx": (
        "export default function StandingsPage() {\n"
        "  return <h1>Classement</h1>;\n"
        "}\n"
    ),
    "app/search/page.tsx": (
        "export default function SearchPage() {\n"
        "  return <h1>Recherche</h1>;\n"
        "}\n"
    ),

    # Routes API
    "app/api/teams/route.ts": (
        "import { NextResponse } from 'next/server';\n"
        "export async function GET() {\n"
        "  return NextResponse.json({ teams: [] });\n"
        "}\n"
    ),
    "app/api/players/route.ts": (
        "import { NextResponse } from 'next/server';\n"
        "export async function GET() {\n"
        "  return NextResponse.json({ players: [] });\n"
        "}\n"
    ),
    "app/api/matches/route.ts": (
        "import { NextResponse } from 'next/server';\n"
        "export async function GET() {\n"
        "  return NextResponse.json({ matches: [] });\n"
        "}\n"
    ),
    "app/api/standings/route.ts": (
        "import { NextResponse } from 'next/server';\n"
        "export async function GET() {\n"
        "  return NextResponse.json({ standings: [] });\n"
        "}\n"
    ),

    # Composants
    "components/Header.tsx": (
        "export default function Header() {\n"
        "  return <header>Header</header>;\n"
        "}\n"
    ),
    "components/Footer.tsx": (
        "export default function Footer() {\n"
        "  return <footer>Footer</footer>;\n"
        "}\n"
    ),
    "components/ThemeToggle.tsx": (
        "export default function ThemeToggle() {\n"
        "  return <button>Toggle theme</button>;\n"
        "}\n"
    ),
    "components/SearchBar.tsx": (
        "export default function SearchBar() {\n"
        "  return <input placeholder=\"Rechercher...\" />;\n"
        "}\n"
    ),
}

# --------------------------------------------------
# Création des fichiers et dossiers
# --------------------------------------------------
def build_tree(base: Path, tree: dict[str, str | list[str]]) -> None:
    for path_spec, content in tree.items():
        target = base / path_spec
        target.parent.mkdir(parents=True, exist_ok=True)

        if isinstance(content, list):  # dossier avec fichiers à l’intérieur
            for file in content:
                (target / file).touch()
        else:  # fichier simple
            target.write_text(content, encoding="utf-8")

if __name__ == "__main__":
    build_tree(PROJECT_ROOT, TREE)
    print("✅ Arborescence créée dans :", PROJECT_ROOT.resolve())