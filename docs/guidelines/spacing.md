# Spacing

## Overview

Spacing system based on an 8px base unit. Spacing values are stored in `/tokens/tokens.json`.

## Scale

| Token     | Value | Use case                      |
|-----------|-------|-------------------------------|
| space-xs  | 4px   | Tight spacing, icon gaps      |
| space-sm  | 8px   | Inside compact components     |
| space-md  | 16px  | Standard padding, gaps        |
| space-lg  | 24px  | Section spacing               |
| space-xl  | 32px  | Large section gaps            |
| space-2xl | 48px  | Page-level spacing            |

## Usage Guidelines

### Do
- Use tokens from the spacing scale
- Keep consistent padding within component groups
- Use 8px grid as the baseline

### Don't
- Don't use arbitrary values (e.g., 13px, 7px)
- Don't mix spacing systems across components
