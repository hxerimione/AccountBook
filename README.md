# 가계부

## Use Case

1.  현재 자산을 입력할 수 있다.
2.  가계부 내역을 입력할 수 있다.
3.  가계부 목록을 볼 수 있다.

---

## Datail

가계부 내역 데이터

```
json
{
    "currentFunds": 100000,
}

//가계부 내역
{
    "id": "...",
    "category": "coffee" | "meal" | "shopping" | "mart",
    "description": "this is acoountbook",
    "amount": 1000,
    "createAt": "2023-01-18T05:01:39.2582",
    "fundsAtTheTime": 100000,
}[]
```

데이터 관리

> 원본 데이터는 브라우저 storage에서 관리

