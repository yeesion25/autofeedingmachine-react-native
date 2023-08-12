# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

### er diagram
```mermaid
erDiagram
    database ||--o{ login : storage
    database {
        string name
        any pw
        number weight
        string pet
        number foodKcal
    }

    login ||--|{ pw : next
    database ||--o{ weight : storage
    weight ||--o{ pet : next
    pet ||--o{ dog : choose
    pet ||--o{ cat : choose
    pet ||--o{ parrot : choose
    database ||--o{ foodKcal : storage
    foodKcal ||--o{ pet : d
```