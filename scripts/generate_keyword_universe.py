#!/usr/bin/env python3
"""
Search Intelligence Universe Generator for Dhruv Pathak Portfolio
Generates exactly 25,000 structured search targets across strategic dimensions:
ROLE, TECHNOLOGY, PROBLEM, INDUSTRY, USE CASE, INTENT, LOCATION, SENIORITY, OUTCOME.
"""

import json
import csv
import os

ROLES = [
    "AI Solutions Engineer",
    "AI Adoption Specialist",
    "AI Consultant",
    "AI Solutions Architect",
    "AI Automation Specialist",
    "AI Technical Consultant",
    "AI Implementation Consultant",
    "AI Agent Specialist",
    "LLM Solutions Architect",
    "Voice AI Engineer",
    "RevOps AI Specialist",
    "Workflow Automation Architect",
    "Client AI Solutions Engineer",
    "Technical AI Consultant",
    "AI Integration Engineer",
    "Conversational AI Architect"
]

TECHNOLOGIES = [
    "LangChain",
    "LangGraph",
    "CrewAI",
    "RAG",
    "Voice AI",
    "ElevenLabs",
    "Retell AI",
    "Vapi",
    "n8n",
    "Make",
    "HubSpot",
    "Apollo.io",
    "Python",
    "FastAPI",
    "Next.js",
    "REST APIs",
    "Vector Databases",
    "OpenAI API",
    "Claude API",
    "LLM Orchestration",
    "Docker",
    "AWS",
    "PostgreSQL",
    "Scikit-learn"
]

PROBLEMS = [
    "manual prospecting",
    "slow lead response time",
    "follow-up leakage",
    "sales rep research fatigue",
    "messy CRM data hygiene",
    "appointment booking delay",
    "manual data entry",
    "inbound lead conversion drop",
    "unstructured data processing",
    "operational workflow bottlenecks",
    "high customer acquisition cost",
    "repetitive admin tasks",
    "lead qualification lag",
    "pipeline visibility gap",
    "manual student admissions inquiry"
]

INDUSTRIES = [
    "SaaS",
    "B2B Services",
    "Admissions & EdTech",
    "Real Estate",
    "Hyperlocal Marketplaces",
    "Professional Services",
    "E-commerce",
    "Sales Operations",
    "Customer Support",
    "Healthcare & Clinics",
    "Agencies",
    "Financial Services"
]

USE_CASES = [
    "inbound voice calling agent",
    "multi-agent lead research",
    "automated account qualification",
    "CRM synchronization",
    "outbound voice qualification",
    "intelligent form intake",
    "lead scoring pipeline",
    "knowledge base retrieval",
    "calendar booking automation",
    "full-stack ERP architecture",
    "student risk prediction model",
    "automated SDR outreach",
    "deterministic tool calling DAG",
    "realtime speech telephony"
]

LOCATIONS = [
    "Ahmedabad",
    "Gujarat",
    "India",
    "Remote",
    "US Timezone Remote",
    "UK Timezone Remote"
]

HIRING_INTENTS = [
    "hire",
    "hiring",
    "looking for",
    "candidate",
    "contract",
    "portfolio",
    "resume",
    "profile",
    "fractional",
    "specialist",
    "freelance",
    "senior"
]

CONSULTING_INTENTS = [
    "consultant",
    "consulting",
    "advisory",
    "audit",
    "roadmap",
    "strategy",
    "assessment",
    "blueprint"
]

IMPLEMENTATION_INTENTS = [
    "implementation",
    "integration",
    "solution architecture",
    "deployment",
    "pipeline build",
    "workflow automation",
    "engineering"
]

OUTCOMES = [
    "reduce manual work by 60%",
    "3x qualified leads",
    "sub-2s voice response",
    "save 10 hours weekly",
    "eliminate pipeline leakage",
    "accelerate sales velocity",
    "automate CRM updates",
    "91% predictive accuracy"
]

def determine_url(role, tech, problem, use_case):
    if tech in ["Voice AI", "ElevenLabs", "Retell AI", "Vapi"] or "voice" in str(use_case):
        return "/voice-ai"
    if role in ["AI Adoption Specialist", "AI Adoption Consultant"] or "adoption" in str(role).lower():
        return "/ai-adoption"
    if role in ["AI Solutions Architect", "Workflow Automation Architect"] or "architecture" in str(use_case):
        return "/solution-architecture"
    if "agent" in str(tech).lower() or "n8n" in str(tech).lower() or "Make" in str(tech) or "automation" in str(role).lower():
        return "/ai-automation"
    if role in ["AI Solutions Engineer", "Client AI Solutions Engineer"]:
        return "/ai-solutions"
    if "methodology" in str(use_case) or "audit" in str(problem):
        return "/methodology"
    return "/ai-solutions"

print("Generating 25,000 Keyword Universe...")

keywords_set = set()
dataset = []

# Pattern 1: Role + Location + Hiring Intent (Tier 1: High Priority Recruiter Intent)
for r in ROLES:
    for loc in LOCATIONS:
        for h in HIRING_INTENTS:
            kw = f"{h} {r} {loc}".strip().lower()
            if kw not in keywords_set:
                keywords_set.add(kw)
                target = determine_url(r, None, None, None)
                dataset.append({
                    "keyword": kw,
                    "cluster": "Role + Location + Hiring Intent",
                    "search_intent": "hiring",
                    "role": r,
                    "technology": None,
                    "industry": None,
                    "business_problem": None,
                    "location": loc,
                    "priority": "tier_1",
                    "target_url": target,
                    "content_type": "expertise",
                    "publish_or_not": True,
                    "reason": f"Direct recruiter intent for {r} located in {loc}"
                })

# Pattern 2: Recruiter Talent Discovery (Tier 1)
SENIORITIES = ["lead", "senior", "specialist", "architect", "consultant", "engineer"]
for r in ["AI Solutions Engineer", "AI Adoption Specialist", "AI Consultant", "AI Solutions Architect", "AI Automation Specialist"]:
    for s in SENIORITIES:
        for ind in ["B2B", "SaaS", "Enterprise", "Startup", "Admissions"]:
            for loc in ["Ahmedabad", "India", "Remote", "US hours", "UK hours"]:
                for term in ["job candidate", "portfolio", "resume", "experience", "hire"]:
                    kw = f"{term} {s} {r} {ind} {loc}".strip().lower()
                    if kw not in keywords_set:
                        keywords_set.add(kw)
                        target = "/resume" if "resume" in term else determine_url(r, None, None, None)
                        dataset.append({
                            "keyword": kw,
                            "cluster": "Recruiter Talent Discovery",
                            "search_intent": "hiring",
                            "role": r,
                            "technology": None,
                            "industry": ind,
                            "business_problem": None,
                            "location": loc,
                            "priority": "tier_1",
                            "target_url": target,
                            "content_type": "resume" if "resume" in term else "expertise",
                            "publish_or_not": True,
                            "reason": f"Direct recruiter candidate query for {r} in {loc}"
                        })

# Pattern 3: Role + Technology (Tier 2: Technical Competency Intent)
for r in ROLES:
    for t in TECHNOLOGIES:
        for prefix in ["", "expert ", "developer ", "architect ", "consultant "]:
            kw = f"{prefix}{r} {t}".strip().lower()
            if kw not in keywords_set:
                keywords_set.add(kw)
                target = determine_url(r, t, None, None)
                dataset.append({
                    "keyword": kw,
                    "cluster": "Role + Technology",
                    "search_intent": "implementation",
                    "role": r,
                    "technology": t,
                    "industry": None,
                    "business_problem": None,
                    "location": None,
                    "priority": "tier_2",
                    "target_url": target,
                    "content_type": "expertise",
                    "publish_or_not": True,
                    "reason": f"High relevance for technical role {r} with {t} capability"
                })

# Pattern 4: Technology + Problem + Solution (Tier 3: Commercial Solutions)
for t in TECHNOLOGIES:
    for p in PROBLEMS:
        for intent in ["automation", "solution", "integration", "workflow", "consultant", "architecture"]:
            kw = f"{t} for {p} {intent}".strip().lower()
            if kw not in keywords_set:
                keywords_set.add(kw)
                target = determine_url(None, t, p, None)
                dataset.append({
                    "keyword": kw,
                    "cluster": "Technology + Problem + Intent",
                    "search_intent": "solution",
                    "role": None,
                    "technology": t,
                    "industry": None,
                    "business_problem": p,
                    "location": None,
                    "priority": "tier_3",
                    "target_url": target,
                    "content_type": "case_study",
                    "publish_or_not": False,
                    "reason": f"Solves {p} using {t} within workflow"
                })

# Pattern 5: Industry + Use Case + Role / Intent (Tier 3)
for ind in INDUSTRIES:
    for uc in USE_CASES:
        for int_word in ["consultant", "engineer", "case study", "architecture", "specialist", "integration", "developer"]:
            kw = f"{ind} {uc} {int_word}".strip().lower()
            if kw not in keywords_set:
                keywords_set.add(kw)
                target = determine_url(None, None, None, uc)
                dataset.append({
                    "keyword": kw,
                    "cluster": "Industry + Use Case + Intent",
                    "search_intent": "consulting",
                    "role": None,
                    "technology": None,
                    "industry": ind,
                    "business_problem": None,
                    "location": None,
                    "priority": "tier_3",
                    "target_url": target,
                    "content_type": "case_study",
                    "publish_or_not": False,
                    "reason": f"Applies {uc} specifically to {ind} commercial context"
                })

# Pattern 6: Technology + Industry + Problem Combinations (Tier 3)
for t in ["Voice AI", "LangGraph", "n8n", "HubSpot", "Apollo.io", "CrewAI", "FastAPI", "Python"]:
    for ind in INDUSTRIES:
        for p in PROBLEMS:
            for suffix in ["solution", "consulting", "specialist", "automation", "integration"]:
                kw = f"{t} {ind} {p} {suffix}".strip().lower()
                if kw not in keywords_set:
                    keywords_set.add(kw)
                    target = determine_url(None, t, p, None)
                    dataset.append({
                        "keyword": kw,
                        "cluster": "Technology + Industry + Problem",
                        "search_intent": "implementation",
                        "role": None,
                        "technology": t,
                        "industry": ind,
                        "business_problem": p,
                        "location": None,
                        "priority": "tier_3",
                        "target_url": target,
                        "content_type": "case_study",
                        "publish_or_not": False,
                        "reason": f"Solves {p} in {ind} leveraging {t}"
                    })

# Pattern 7: Deep Long-Tail Implementation & Solution Patterns (Tier 4)
ACTION_VERBS = ["how to automate", "architecting", "building", "deploying", "designing", "optimizing"]
for verb in ACTION_VERBS:
    for uc in USE_CASES:
        for t in ["n8n", "Make", "LangGraph", "HubSpot", "FastAPI", "Python", "ElevenLabs", "Retell AI"]:
            for ind in ["SaaS", "B2B", "Admissions", "Services", "Real Estate"]:
                kw = f"{verb} {uc} with {t} for {ind}".strip().lower()
                if kw not in keywords_set:
                    keywords_set.add(kw)
                    target = determine_url(None, t, None, uc)
                    dataset.append({
                        "keyword": kw,
                        "cluster": "Implementation Architecture",
                        "search_intent": "implementation",
                        "role": None,
                        "technology": t,
                        "industry": ind,
                        "business_problem": None,
                        "location": None,
                        "priority": "tier_4",
                        "target_url": target,
                        "content_type": "methodology",
                        "publish_or_not": False,
                        "reason": f"Long-tail architecture query for {uc} using {t}"
                    })

# Pattern 8: Business Outcome & Proven Case Study Intent (Tier 2 & Tier 3)
for oc in OUTCOMES:
    for r in ["AI Solutions Engineer", "AI Adoption Specialist", "AI Consultant"]:
        for ind in ["SaaS", "B2B", "Admissions", "Marketplaces"]:
            for t in ["n8n", "LangGraph", "Voice AI", "HubSpot"]:
                kw = f"{r} {ind} {oc} with {t}".strip().lower()
                if kw not in keywords_set:
                    keywords_set.add(kw)
                    target = determine_url(r, t, None, None)
                    dataset.append({
                        "keyword": kw,
                        "cluster": "Proven Outcome & ROI",
                        "search_intent": "solution",
                        "role": r,
                        "technology": t,
                        "industry": ind,
                        "business_problem": None,
                        "location": None,
                        "priority": "tier_2",
                        "target_url": target,
                        "content_type": "case_study",
                        "publish_or_not": True,
                        "reason": f"Quantified ROI proof point: {oc}"
                    })

# Pattern 9: Role + Problem + Technology Fill to reach 25,000
for r in ROLES:
    for t in TECHNOLOGIES:
        for p in PROBLEMS:
            for mod in ["consultant", "engineer", "specialist", "architecture", "portfolio"]:
                if len(dataset) >= 25000:
                    break
                kw = f"{r} for {p} using {t} {mod}".strip().lower()
                if kw not in keywords_set:
                    keywords_set.add(kw)
                    target = determine_url(r, t, p, None)
                    dataset.append({
                        "keyword": kw,
                        "cluster": "Role + Problem + Technology",
                        "search_intent": "solution",
                        "role": r,
                        "technology": t,
                        "industry": None,
                        "business_problem": p,
                        "location": None,
                        "priority": "tier_3",
                        "target_url": target,
                        "content_type": "expertise",
                        "publish_or_not": False,
                        "reason": f"Capability alignment for {r} tackling {p} with {t}"
                    })

# Ensure exactly 25,000
dataset = dataset[:25000]
print(f"Generated exactly {len(dataset)} unique search targets.")

tiers = {}
for item in dataset:
    t = item["priority"]
    tiers[t] = tiers.get(t, 0) + 1
print("Priority distribution:", tiers)

# Write JSON
json_path = "seo/keyword-universe.json"
with open(json_path, "w", encoding="utf-8") as f:
    json.dump({
        "metadata": {
            "entity": "Dhruv Pathak",
            "canonical_domain": "https://itsdhruv.online",
            "total_keywords": len(dataset),
            "priority_distribution": tiers,
            "version": "1.0.0"
        },
        "keywords": dataset
    }, f, indent=2)

print(f"Wrote {json_path} successfully.")

# Write CSV
csv_path = "seo/keyword-map.csv"
fieldnames = [
    "keyword",
    "cluster",
    "search_intent",
    "role",
    "technology",
    "industry",
    "business_problem",
    "location",
    "priority",
    "target_url",
    "content_type",
    "publish_or_not",
    "reason"
]

with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for row in dataset:
        writer.writerow(row)

print(f"Wrote {csv_path} successfully.")
