# GestionCitasMedicas

# CRM Medical Services

### GitHub

---

Git Remote:

```text
git remote add origin https://github.com/killthmxall/CRMS_FRONTEND.git
```
---

Pasos para la actualización del repositorio:
Siempre realizar un "pull" como primer paso.

```text
git pull origin main
```

```text
git init
```

```text
git status
```

```text
git add .
```

```text
git commit -m "Describir el cambio que se hace"
```

```text
git branch -M main
```

```text
git push -u origin main --force
```

---

Git Clone:

```text
git clone https://github.com/killthmxall/CRMS_FRONTEND.git
```

---

Backend:

```text
pip install -g virtualenv
```

```text
virtualenv venv
```

```text
.\venv\Scripts\activate.ps1
```

```text
pip install -r .\requirements.txt      
```

```text
uvicorn main:app --reload  
```



