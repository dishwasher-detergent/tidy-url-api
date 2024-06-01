# ♡ Tidy-Url-Api

This is just a wrapper for the tidy-url package.
https://github.com/DrKain/tidy-url

## 🧰 Usage

### GET /clean/:url

- The response will always be an object with details of what was cleaned or modified in the URL.
- This can be used for debugging, testing or a simple way of letting users know they could have sent a shorter link.

**Response**

Sample `200` Response:

```json
{
  "url": "https://open.spotify.com/track/1hhZQVLXpg10ySFQFxGbih",
  "info": {
    "original": "https://open.spotify.com/track/1hhZQVLXpg10ySFQFxGbih?si=-k8RwDQwTCK923jxZuy07w&utm_source=copy-link",
    "reduction": 47,
    "difference": 47,
    "replace": [],
    "removed": [
      {
        "key": "utm_source",
        "value": "copy-link"
      },
      {
        "key": "si",
        "value": "-k8RwDQwTCK923jxZuy07w"
      }
    ],
    "match": [
      {
        "rules": ["si", "utm_source", "context"],
        "replace": [],
        "redirect": "",
        "name": "spotify.com",
        "match": "/open.spotify.com/i"
      }
    ],
    "decoded": null,
    "isNewHost": false,
    "fullClean": true
  }
}
```

### GET /validate/:url

- You can validate a URL using the validate function.

**Response**

Sample `200` Response:

```json
{
  "valid": true
}
```

## ⚙️ Configuration

| Setting           | Value          |
| ----------------- | -------------- |
| Runtime           | Node (18.0)    |
| Entrypoint        | `src/main.ts`  |
| Build Commands    | `pnpm install` |
| Permissions       | `any`          |
| Timeout (Seconds) | 15             |

## 🔒 Environment Variables

No environment variables required.
