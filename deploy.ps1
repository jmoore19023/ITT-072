# ── Deploy all projects to gh-pages ──────────────────────
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

# ── Build all projects ───────────────────────────────────
$projects = @(
  "project-1-vite-starter",
  "project-3-react-app",
  "project-4-interactive-dashboard",
  "project-5-chatbot",
  "final-portfolio"
)

foreach ($p in $projects) {
  Write-Host "Building $p..." -ForegroundColor Cyan
  Set-Location "$root\$p"
  npm run build
  Set-Location $root
}

# ── Set up staging folder ────────────────────────────────
$stage = "$root\_stage"
if (Test-Path $stage) { Remove-Item -Recurse -Force $stage }
New-Item -ItemType Directory $stage | Out-Null

# ── Vite portfolio at root ───────────────────────────────
Write-Host "Copying Vite portfolio to root..." -ForegroundColor Cyan
Copy-Item -Force "$root\project-1-vite-starter\dist\index.html" "$stage\index.html"
Copy-Item -Recurse -Force "$root\project-1-vite-starter\dist\assets" "$stage\assets"
if (Test-Path "$root\project-1-vite-starter\dist\favicon.svg") {
  Copy-Item -Force "$root\project-1-vite-starter\dist\favicon.svg" "$stage\favicon.svg"
}

# ── Habit tracker ────────────────────────────────────────
Write-Host "Copying Habit Tracker..." -ForegroundColor Cyan
Copy-Item -Force "$root\Habit-Tracker.html" "$stage\Habit-Tracker.html"
Copy-Item -Force "$root\app.js" "$stage\app.js"
Copy-Item -Force "$root\habit-tracker.css" "$stage\habit-tracker.css"

# ── portfolio2 ───────────────────────────────────────────
Write-Host "Copying portfolio2..." -ForegroundColor Cyan
New-Item -ItemType Directory "$stage\portfolio2" | Out-Null
Copy-Item -Recurse -Force "$root\portfolio2\*" "$stage\portfolio2\"

# ── project-3-react-app ──────────────────────────────────
Write-Host "Copying project-3-react-app..." -ForegroundColor Cyan
New-Item -ItemType Directory "$stage\project-3-react-app\assets" -Force | Out-Null
Copy-Item -Force "$root\project-3-react-app\dist\index.html" "$stage\project-3-react-app\index.html"
if (Test-Path "$root\project-3-react-app\dist\favicon.svg") {
  Copy-Item -Force "$root\project-3-react-app\dist\favicon.svg" "$stage\project-3-react-app\favicon.svg"
}
if (Test-Path "$root\project-3-react-app\dist\icons.svg") {
  Copy-Item -Force "$root\project-3-react-app\dist\icons.svg" "$stage\project-3-react-app\icons.svg"
}
Copy-Item -Recurse -Force "$root\project-3-react-app\dist\assets\*" "$stage\project-3-react-app\assets\"

# ── project-4-interactive-dashboard ─────────────────────
Write-Host "Copying project-4-interactive-dashboard..." -ForegroundColor Cyan
New-Item -ItemType Directory "$stage\project-4-interactive-dashboard\assets" -Force | Out-Null
Copy-Item -Force "$root\project-4-interactive-dashboard\dist\index.html" "$stage\project-4-interactive-dashboard\index.html"
if (Test-Path "$root\project-4-interactive-dashboard\dist\favicon.svg") {
  Copy-Item -Force "$root\project-4-interactive-dashboard\dist\favicon.svg" "$stage\project-4-interactive-dashboard\favicon.svg"
}
Copy-Item -Recurse -Force "$root\project-4-interactive-dashboard\dist\assets\*" "$stage\project-4-interactive-dashboard\assets\"

# ── project-5-chatbot ────────────────────────────────────
Write-Host "Copying project-5-chatbot..." -ForegroundColor Cyan
New-Item -ItemType Directory "$stage\project-5-chatbot\assets" -Force | Out-Null
Copy-Item -Force "$root\project-5-chatbot\dist\index.html" "$stage\project-5-chatbot\index.html"
if (Test-Path "$root\project-5-chatbot\dist\favicon.svg") {
  Copy-Item -Force "$root\project-5-chatbot\dist\favicon.svg" "$stage\project-5-chatbot\favicon.svg"
}
Copy-Item -Recurse -Force "$root\project-5-chatbot\dist\assets\*" "$stage\project-5-chatbot\assets\"

# ── final-portfolio ──────────────────────────────────────
Write-Host "Copying final-portfolio..." -ForegroundColor Cyan
New-Item -ItemType Directory "$stage\final-portfolio\assets" -Force | Out-Null
Copy-Item -Force "$root\final-portfolio\dist\index.html" "$stage\final-portfolio\index.html"
if (Test-Path "$root\final-portfolio\dist\favicon.svg") {
  Copy-Item -Force "$root\final-portfolio\dist\favicon.svg" "$stage\final-portfolio\favicon.svg"
}
Copy-Item -Recurse -Force "$root\final-portfolio\dist\assets\*" "$stage\final-portfolio\assets\"

# ── Push to gh-pages ─────────────────────────────────────
Write-Host "Pushing to gh-pages..." -ForegroundColor Cyan
Set-Location $stage
git init
git add .
git commit -m "deploy all projects"
git push --force https://github.com/jmoore19023/ITT-072.git HEAD:gh-pages

Set-Location $root
Write-Host "Done! All projects deployed." -ForegroundColor Green