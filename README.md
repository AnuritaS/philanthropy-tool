# 📊 Philanthropy Effectiveness Evaluation Tool

> A master's-level data visualization portfolio project analyzing grantmaking strategy, sector allocation, geographic focus, and impact evaluation across two major U.S. environmental justice foundations: **Tides Foundation** and **Kresge Foundation** (2015–2024).

[![Live Demo](https://img.shields.io/badge/Live-Dashboard-4ECDC4?style=for-the-badge)](https://YOUR-USERNAME.github.io/philanthropy-effectiveness-tool/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Recharts](https://img.shields.io/badge/Recharts-2.x-E8651A?style=for-the-badge)](https://recharts.org/)

---

## 🎯 Project Overview

This tool demonstrates applied knowledge of **philanthropic capital allocation**, **impact evaluation frameworks**, and **data visualization** for policy and nonprofit sector roles.

**Key questions explored:**
- How do Tides and Kresge differ in sector concentration (measured via Herfindahl-Hirschman Index)?
- Which grant structures — general operating vs. project-specific — correlate with higher impact scores?
- How does BIPOC-led organization prioritization affect measurable outcomes?
- Where are each foundation's geographic gaps relative to environmental justice need?

---

## 📐 Analytical Framework

| Framework | Application |
|---|---|
| **OECD DAC Criteria** (2019) | Relevance, Coherence, Effectiveness, Efficiency, Impact, Sustainability |
| **Candid PCS** (2022) | NTEE sector classification, grant type taxonomy |
| **CEP Benchmarks** | Grantee perception, general operating support norms |
| **NCRP Power-Building Standards** | BIPOC-led org prioritization, unrestricted funding |
| **MacArthur Big Bets Model** | Multi-year, high-trust grant structures |
| **HHI Concentration Index** | Sector and geographic diversification analysis |

---

## 📊 Dashboard Features

| Tab | Analysis |
|---|---|
| **Overview** | KPIs, disbursement trends 2015–2024, foundation comparison |
| **Sectors** | NTEE-coded allocation, HHI index, sector-level disbursements |
| **Geography** | Census region focus, urban/rural classification |
| **Grant Size** | Size bucket distribution, grant type breakdown, concentration metrics |
| **Impact** | OECD DAC radar chart, impact score by grant type, BIPOC equity differential |
| **Strategy** | Best-practice scorecard, strategic recommendations |

---

## 🗃️ Dataset

**Simulated dataset** (n=1,200 grants) calibrated to real-world parameters:

- **Tides Foundation**: Median grant ~$150K; 68% BIPOC-led orgs; West/South geographic tilt; frontline justice & civil rights sectors
- **Kresge Foundation**: Median grant ~$360K; 55% BIPOC-led orgs; Midwest anchor; housing & climate resilience sectors

### Real Dataset Sources (for upgrading this project)
| Source | URL | Cost |
|---|---|---|
| Candid / Foundation Center | foundationcenter.org | Subscription / API |
| IRS Form 990/990-PF on AWS S3 | registry.opendata.aws | Free |
| Urban Institute NCCS Archive | nccs.urban.org | Free |
| Open990 | open990.org | Free (CSV downloads) |
| GrantStation | grantstation.com | Trial available |

---

## 🛠️ Stata Simulation Code

`/stata/simulate_grants_dataset.do` generates the full 1,200-observation dataset with:
- Log-normal grant size distributions (calibrated to foundation medians)
- NTEE sector weights, Census region weights, urban/rural classification
- Composite impact score based on OECD DAC + CEP frameworks
- OLS and Logit regressions with robust standard errors
- HHI concentration analysis by sector

---

## 🚀 Running Locally

```bash
git clone https://github.com/YOUR-USERNAME/philanthropy-effectiveness-tool.git
cd philanthropy-effectiveness-tool
npm install
npm run dev
```

---

## 📡 Deployment

Deployed via GitHub Pages using GitHub Actions (auto-deploys on push to `main`).

---

## 📚 References

- OECD DAC (2019). *Better Criteria for Better Evaluation*. OECD Publishing.
- Twersky, F., Buchanan, P., & Threlfall, V. (2013). Listening to Those Who Matter Most: The Beneficiaries. *Stanford Social Innovation Review.*
- Center for Effective Philanthropy (2021). *What Donors Know.* CEP Research.
- National Committee for Responsive Philanthropy (2023). *Power-Building Philanthropy Standards.*
- Candid (2022). *Philanthropy Classification System Update.*
- Tides Foundation (2024). *Annual Report.*
- Kresge Foundation (2024). *Social Investment Practice Report.*

---

## 👤 Author

Built as a master's-level portfolio project demonstrating expertise in philanthropic capital analysis, impact evaluation methodology, and public policy data visualization.
