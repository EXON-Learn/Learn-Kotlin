# 반복문
## for
```kotlin
for (i in 1..10){
    println("Hello $i")
}
```
기본적인 for문과는 약간 다르다. <br>
파이썬의 for 문처럼 in 을 사용하고 (시작할 수)..(끝날 수) 의 형태이다. <br>
(변수 선언을 안해도 된다.) <br>

## while
```kotlin
var i: Int = 0
while (i < 11) {
    println("Hello $i")
    i++
}
```
일반적인 while문과 같다. <br>
for문과는 다르게 변수 선언을 해줘야 한다. <br>