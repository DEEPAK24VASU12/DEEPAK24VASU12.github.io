# Deepak Vasudevan — Portfolio Website

> **PL/SQL Developer → Data Engineer** | Flask + HTML/CSS/JS | Hosted on Render

A dark futuristic portfolio website showcasing the transition from Oracle PL/SQL development into data engineering, featuring real production projects, skills, and contact information.

---

## 🏗️ Project Structure

```
portfolio/
├── app.py                    # Flask application entry point
├── requirements.txt          # Python dependencies
├── templates/
│   └── index.html            # Main HTML template
├── static/
│   ├── style.css             # All styles (dark futuristic theme)
│   ├── script.js             # Animations, typing effect, interactions
│   └── Deepak_Vasudevan_Resume.pdf   # Resume file (add manually)
└── README.md
```

---

## ⚡ Local Development

```bash
# 1. Clone the repository
git clone https://github.com/deepakvasudev24/portfolio.git
cd portfolio

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the Flask dev server
python app.py

# 5. Open in browser
# http://localhost:5000
```

---

## 📤 GitHub Repository Setup (One-Time)

```bash
# Initialize git in the project folder
git init

# Stage all files
git add .

# Initial commit
git commit -m "feat: initial portfolio website"

# Set main branch
git branch -M main

# Add your GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/deepakvasudev24/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## 🚀 Deployment — Option 1: Render (Recommended)

Render offers **free hosting** for Flask apps with automatic deploys from GitHub.

### Step-by-step:

1. Go to [render.com](https://render.com) and sign up with your GitHub account
2. Click **New → Web Service**
3. Connect your GitHub repository: `deepakvasudev24/portfolio`
4. Configure:
   - **Name:** `deepak-portfolio`
   - **Region:** Singapore (closest to Chennai)
   - **Branch:** `main`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
   - **Instance Type:** Free
5. Click **Create Web Service**
6. Wait ~3 minutes — Render auto-builds and deploys
7. Your live URL: `https://deepak-portfolio.onrender.com`

### Environment Variables (if needed):
In Render dashboard → Environment → Add:
```
FLASK_ENV = production
```

---

## 🌐 Deployment — Option 2: PythonAnywhere

1. Sign up at [pythonanywhere.com](https://www.pythonanywhere.com)
2. Go to **Files** tab → Upload all project files
3. Open a **Bash console**:
   ```bash
   pip install flask gunicorn --user
   ```
4. Go to **Web** tab → **Add new web app**
5. Choose **Flask** → Point to your `app.py`
6. Set **Source code** directory to `/home/yourusername/portfolio`
7. Set **WSGI file** to point to your Flask app
8. Hit **Reload** — your site goes live at `yourusername.pythonanywhere.com`

---

## 📄 Deployment — Option 3: GitHub Pages (Static Export)

GitHub Pages only supports static files. For a Flask portfolio, use **Option 1 (Render)** instead.
However, if you want a static version:

1. Remove Flask (convert to pure HTML/CSS/JS)
2. Push to a repo named `deepakvasudev24.github.io`
3. Site auto-publishes at `https://deepakvasudev24.github.io`

---

## 🔄 Future Updates Workflow

Every time you add a project, certification, or update content:

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new GitHub repositories to portfolio"

# Push to GitHub (Render auto-deploys in ~2 minutes)
git push
```

### Common update commit messages:
```bash
git commit -m "feat: add surgery pipeline GitHub repo link"
git commit -m "feat: add new certification - AWS Cloud Practitioner"
git commit -m "fix: update contact email address"
git commit -m "content: update skills section with Kafka"
git commit -m "style: improve mobile responsiveness"
```

---

## 📝 How to Add GitHub Repositories

In `templates/index.html`, find the `#github` section and update `.repo-preview` blocks:

```html
<div class="repo-preview glass">
  <div class="repo-lang py"></div>
  <div class="repo-info">
    <span class="repo-name">surgery-patient-journey-pipeline</span>
    <span class="repo-desc">Medallion ETL · PySpark · dbt · Airflow · PostgreSQL</span>
  </div>
  <!-- Change "Soon" to a clickable link: -->
  <a href="https://github.com/deepakvasudev24/surgery-patient-journey-pipeline" 
     target="_blank" class="repo-status">View →</a>
</div>
```

---

## 📧 Contact Form Setup (Formspree)

To make the contact form actually send emails:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. In `templates/index.html`, update the form tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onsubmit="handleFormSubmit(event)"` attribute

---

## 📎 Resume File

Place your resume PDF at:
```
static/Deepak_Vasudevan_Resume.pdf
```

The `/download-resume` route in `app.py` serves it automatically.

---

## 🎨 Tech Stack

| Layer | Tech |
|-------|------|
| Backend | Python Flask |
| Frontend | HTML5 + CSS3 + Vanilla JS |
| Fonts | Orbitron · Syne · JetBrains Mono |
| Hosting | Render (free tier) |
| Version Control | Git + GitHub |

---

## 👤 Author

**Deepak Vasudevan**  
PL/SQL Developer → Data Engineer  
Chennai, India  
[LinkedIn](https://linkedin.com/in/deepakvasudev24) · [GitHub](https://github.com/deepakvasudev24)
