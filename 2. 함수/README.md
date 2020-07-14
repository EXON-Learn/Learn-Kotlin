# 함수
## 정의
- fun 키워드로 정의
```kotlin
fun sum(a: Int, b: Int): Int{
    return a + b
}
```
- 리턴 타입을 소괄호 뒤에 써줌
```kotlin
fun a(): Int {
    return 10
}
```
- 함수 자체가 식인 경우 return 생략 가능, return type 은 추론됨
```kotlin
fun sum(a: Int, b: Int) = a + b
```
- 리턴할 값이 없는 경우는 Unit(Object) 로 리턴 (void)
```kotlin
fun printKotlin(): Unit {
    println("Hello")
}
```
- Unit 은 생략가능
```kotlin
fun printKotlin() {
    println("Hello")
}
```

## 호출
```kotlin
printKotlin()
```
- 일반적인 함수 호출